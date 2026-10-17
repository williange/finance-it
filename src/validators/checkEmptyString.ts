import { ValidationError } from "."

export function checkEmptyString(value: string, valueKey: string): true {
  if (typeof value !== "string")
    throw new ValidationError(`${valueKey} = ${value} is not a string`)
  if (value === "") {
    throw new ValidationError(`${valueKey} can't be a empty string`, valueKey)
  }
  return true
}
