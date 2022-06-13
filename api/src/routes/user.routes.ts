import Router from "@koa/router";
import koaBody from "koa-body";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  patchUser,
  updateUser,
} from "../controllers/user.controller";

const router = new Router({
  prefix: "/users",
});

router.post("/", koaBody(), createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", koaBody(), updateUser);
router.patch("/:id", koaBody(), patchUser);
router.delete("/:id", deleteUser);

export default router;
