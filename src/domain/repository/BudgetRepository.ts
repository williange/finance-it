import { Budget } from "../entities/Budget";
import { BasicRepository } from "./BasicRepository";

export interface BudgetRepository extends BasicRepository<Budget> {
  findByName: (name: string) => Promise<Budget | null>
}
