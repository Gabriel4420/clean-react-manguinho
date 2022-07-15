export class InvalidCredentialsError extends Error {
    constructor(){
        super('Credenciais invalidades')
        this.name = 'InvalidCredentialsError'
    }
}
