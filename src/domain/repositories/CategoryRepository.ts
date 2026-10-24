import { Category } from "../entities/Category";
import { BasicRepository } from "./BasicRepository";

export interface CategoryRepository extends BasicRepository<Category> {
  findByName: (name: string) => Promise<Category | null>
}
