import { makeApiUrl } from '@/main/goto'
import { makeAxiosHttpClient } from '@/main/goto'
import { Authentication } from '@/domain'
import { RemoteAuthentication } from '@/data'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
