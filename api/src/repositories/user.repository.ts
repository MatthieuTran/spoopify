import { BaseRepository } from "./base.repository";
import { User } from "../models/User";

const UserRepository = new BaseRepository();
UserRepository.setModel(User);

export { UserRepository };
