const port = 7878;
import express from "express";
import bp from "body-parser";
import cors from "cors";
import * as bc from "./bookApp/controller/bookController.js";

var app = express();
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

app.get("/books", bc.defaultGetHandler);
app.get("/books/:id", bc.getBookByIdHandler);
app.post("/books", bc.createBookHandler);
app.put("/books", bc.modifyBookHandler);
app.put("/books/:id", bc.deleteBookHandler);

app.listen(port, () => {
    console.log(`server launched on port ${port}`)
})