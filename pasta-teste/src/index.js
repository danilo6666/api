import express from "express";

import userRouter from "src/user/user-controller";

const app = express();
app.use(express.json());


app.use("/user", userRouter);

app.listen(3000, () => {

    console.log("escultando no porta 3000");
} );