import Router from "@koa/router";
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

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.patch("/:id", patchUser);
router.delete("/:id", deleteUser);

export default router;
