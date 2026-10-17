import { ValidationError } from ".";

export function checkEmptyArray(value: unknown[], valueKey: string): true {
  if (!Array.isArray(value))
    throw new ValidationError(
      `${valueKey} = ${value} is not an array`,
      valueKey,
    );
  if (value.length < 1)
    throw new ValidationError(`${valueKey} can't be an empty array`, valueKey);
  return true;
}
