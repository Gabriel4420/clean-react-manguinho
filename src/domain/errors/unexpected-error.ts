export class UnexpectedError extends Error {
  constructor() {
    super('Something is Wrong. Try again Later')
    this.name = 'UnexpectedError'
  }
}
