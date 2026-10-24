import { BudgetObject } from "../Budget";

export type CategoryObject = {
   id: string,
   name: string,
   budget?: BudgetObject,
}
