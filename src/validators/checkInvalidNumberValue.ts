export function checkInvalidNumberValue(
  value: number,
  valueKey: string,
  minValue?: number,
): true {
  if (minValue === undefined && value < 0.01) {
    throw `${valueKey} needs to be greater than 0`;
  } else if (minValue && value < minValue) {
    throw `${valueKey} needs to be ${minValue} or more`;
  }

  return true;
}
