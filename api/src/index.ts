import Koa from "koa";
import connection from "./db";
import userRouter from "./routes/user.routes";

connection();

const app = new Koa();

app.use(userRouter.routes());

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.info(`Listening to http://localhost:${port}/`);

export default server;
