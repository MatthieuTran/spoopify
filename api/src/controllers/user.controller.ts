import { RouterContext } from "@koa/router";
import * as UserService from "../services/user.service";

async function createUser(ctx: RouterContext) {
  // Simple validation
  if (!ctx.request.body.username) {
    ctx.status = 400;
    return;
  }

  const user = await UserService.createUser({
    username: ctx.request.body.username,
  });

  // On error (user already exists), return 409
  if (user == "error") {
    ctx.status = 409;
    return;
  }

  // On success
  ctx.set("Location", `${ctx.get("host")}/users/${user._id}`);
  ctx.response.status = 201;
}

async function getAllUsers(ctx: RouterContext) {
  ctx.body = await UserService.fetchAllUsers();
}

async function getUser(ctx: RouterContext) {
  const id = ctx.params.id;
  const user = await UserService.fetchUserById(id);

  // On error, return 404
  if (user == "error") {
    ctx.status = 404;
    return;
  }

  ctx.body = user;
}

async function updateUser(ctx: RouterContext) {
  const id = ctx.params.id;
  const user = await UserService.fetchUserById(id);

  // On error, return 404
  if (user == "error") {
    ctx.status = 404;
    return;
  }

  // Simple Validation
  if (!ctx.request.body.username) {
    ctx.status = 400;
    return;
  }

  const res = await UserService.updateUser(
    { _id: ctx.params.id },
    { username: ctx.request.body.username }
  );
}

// Partial update
async function patchUser(ctx: RouterContext) {
  const id = ctx.params.id;
  const user = await UserService.fetchUserById(id);

  // On error, return 404
  if (user == "error") {
    ctx.status = 404;
    return;
  }

  // Simple Validation
  if (!ctx.request.body.username) {
    ctx.status = 400;
    return;
  }

  const res = await UserService.updateUser(
    { _id: id },
    { username: ctx.request.body.username }
  );
}

async function deleteUser(ctx: RouterContext) {
  const id = ctx.params.id;
  const user = await UserService.fetchUserById(id);

  // On error, return 404
  if (user == "error") {
    ctx.status = 404;
    return;
  }

  const res = await UserService.deleteUserById(id);
  ctx.body = res;
}

export { createUser, getAllUsers, getUser, updateUser, patchUser, deleteUser };
