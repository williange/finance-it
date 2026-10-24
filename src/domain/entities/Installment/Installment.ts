import { checkEmptyString } from "../../../validators/checkEmptyString";
import { checkInvalidNumberValue } from "../../../validators/checkInvalidNumberValue";
import { InstallmentObject } from "./InstallmentObject";

export class Installment {
  constructor(
    private id: string,
    private name: string,
    private fullValue: number,
    private quantity: number,
    private valuePerPayment: number,
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(name, "name");
    checkInvalidNumberValue(fullValue, "fullValue");
    checkInvalidNumberValue(valuePerPayment, "valuePerPayment");
    checkInvalidNumberValue(quantity, "quantity", 2);
  }

  toObject(): InstallmentObject {
    return {
      name: this.name,
      fullValue: this.fullValue,
      quantity: this.quantity,
      valuePerPayment: this.valuePerPayment,
    };
  }
}
