import { RouterContext } from "koa-router";

async function createUser(ctx: RouterContext) {
  // On success
  ctx.set("Location", "/link/to/{id}");
  ctx.response.status = 201;
}

async function getAllUsers() {
  return;
}

async function getUser() {
  return;
}

async function updateUser(ctx: RouterContext) {
  const UserNotFound = false;
  // User was not found
  if (UserNotFound) {
    ctx.status = 404;
  }
}

async function patchUser(ctx: RouterContext) {
  const UserNotFound = false;
  // User was not found
  if (UserNotFound) {
    ctx.status = 404;
  }
}

async function deleteUser(ctx: RouterContext) {
  const UserNotFound = false;
  // User was not found
  if (UserNotFound) {
    ctx.status = 404;
  }
}

export { createUser, getAllUsers, getUser, updateUser, patchUser, deleteUser };
