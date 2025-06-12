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
