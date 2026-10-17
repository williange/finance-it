export class ValidationError extends Error{
  constructor(public message: string, private propertyFailed?: string) {
    super()
    this.name = "Validation Error";
    this.cause = `invalid value passed to property ${propertyFailed}`
  }
}
