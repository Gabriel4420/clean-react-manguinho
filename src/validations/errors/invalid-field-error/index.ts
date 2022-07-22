export default class InvalidFieldError extends Error {
  constructor() {
    super('valor inválido')
  }
}
