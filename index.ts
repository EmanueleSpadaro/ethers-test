// index.ts
import  express  from "express";

const app = express();
const port = 3000;

app.use(express.static("app"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app-test.html");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
