import { db } from "./utils/dbConnection.js";
import { app } from "./utils/engine.js";

app.get("/getMessages", async (req, res) => {
  try {
    const query = await db.query(
      `SELECT * FROM week07messages ORDER BY id DESC`
    );
    res.json(query.rows);
  } catch {
    console.log("error at getMessages");
    res.json({ get: false });
  }
});

app.post("/addMessage", (req, res) => {
  try {
    const body = req.body;
    const query = db.query(
      `INSERT INTO week07messages (name, message) VALUES ($1, $2)`,
      [body.name, body.message]
    );
    res.json({ added: true });
  } catch {
    console.log("error at addMessage");
    res.json({ added: false });
  }
});

app.post("/addNewUser", async (req, res) => {
  try {
    const body = req.body;
    const isUser = await db.query(
      `SELECT * FROM week07users WHERE week07users.name=$1`,
      [body.username]
    );
    if (isUser.rowCount > 0) {
      res.json({ added: false, error: "used" });
    } else {
      const query = await db.query(
        `INSERT INTO week07passwords (password) VALUES ($1) RETURNING id`,
        [body.password]
      );
      await db.query(
        `INSERT INTO week07users (name, password_id) VALUES ($1,$2) RETURNING id`,
        [body.username, query.rows[0].id]
      );
      res.json({ added: true });
    }
  } catch {
    console.log("error at addNewUser");
    res.json({ added: false, error: "error" });
  }
});

app.post("/getUser", async (req, res) => {
  try {
    const body = req.body;
    const query = await db.query(
      `SELECT * FROM week07users JOIN week07passwords ON week07users.password_id = week07passwords.id WHERE week07users.name=$1 AND week07passwords.password=$2`,
      [body.username, body.password]
    );
    if (query.rowCount > 0) res.json({ get: true, username: body.username });
    else res.json({ get: false, error: "wrong" });
  } catch {
    console.log("error at getUser");
    res.json({ get: false, error: "error" });
  }
});
