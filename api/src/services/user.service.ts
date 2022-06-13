import { UserRepository } from "../repositories/user.repository";

export async function createUser(user: Record<string, unknown>) {
  return await UserRepository.create(user);
}

export async function fetchAllUsers(id: unknown) {
  return await UserRepository.fetch({});
}

export async function fetchUser(conditions: Record<string, unknown>) {
  return await UserRepository.fetchOne(conditions);
}

export async function fetchUserById(id: unknown) {
  return await UserRepository.fetchById(id);
}

export async function updateUser(
  conditions: Record<string, unknown>,
  updates: Record<string, unknown>
) {
  return await UserRepository.updateOne(conditions, updates);
}

export async function deleteUser(conditions: Record<string, unknown) {
  return await UserRepository.deleteOne(conditions);
}

export { UserRepository };
