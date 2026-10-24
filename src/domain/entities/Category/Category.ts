import { checkEmptyString } from "../../../validators/checkEmptyString";
import { Budget } from "../Budget";
import { CategoryObject } from "./CategoryObject";

export class Category {
  constructor(
    private id: string,
    private name: string,
    private budget?: Budget,
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(name, "name");
  }

  toObject(): CategoryObject {
    return {
      id: this.id,
      name: this.name,
      budget: this.budget?.toObject()
    }
  }
}
