import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.download("file.txt");
});

app.listen(process.env.PORT || 4444, (err) => {
	if (err) {
		return console.log(err);
	}
	{
		console.log("Server OK");
	}
});
