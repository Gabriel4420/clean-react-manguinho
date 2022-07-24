import {
  Authentication,
  AuthenticationParams,
  mockAccountModel,
  AccountModel,
} from '@/domain'

export default class AuthenticationSpy implements Authentication {
  //

  account = mockAccountModel()

  params: AuthenticationParams

  callsCount = 0

  auth(params: AuthenticationParams): Promise<AccountModel> {
    //

    this.params = params

    this.callsCount++

    return Promise.resolve(this.account)
  }

  //
}
