import { checkEmptyString } from "../../../validators/checkEmptyString";
import { checkInvalidNumberValue } from "../../../validators/checkInvalidNumberValue";
import { BudgetObject } from "./BudgetObject";

export class Budget {
  constructor(
    private id: string,
    private name: string,
    private value: number,
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(name, "name");
    checkInvalidNumberValue(value, "value");
  }

  toObject(): BudgetObject {
    return {
      id: this.id,
      name: this.name,
      value: this.value
    };
  }
}
