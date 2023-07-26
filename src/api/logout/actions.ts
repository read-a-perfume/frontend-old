import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

type LogoutParams = {
  accessToken: string
}

export const Logout = async (params: LogoutParams) => {
  const {accessToken} = params
  try {
    await axios.post(BASE_URL + '/api/v1/logout', {accessToken})
  } catch (err) {
    console.error(err)
  }
}
