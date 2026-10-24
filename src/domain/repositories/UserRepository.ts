import { User } from "../entities/User";
import { BasicRepository } from "./BasicRepository";

export interface UserRepository extends BasicRepository<User> {
  findByEmail: (email: string) => Promise<User | null>;
}
