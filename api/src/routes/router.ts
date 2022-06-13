import Router from "@koa/router";
import userRouter from "./user.routes";

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello World";
});

router.use(userRouter.routes());

export default router;
