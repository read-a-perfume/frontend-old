import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

type FindAccountParams = {
  email: string
}

type FindPasswordParams = {
  email: string
  username: string
}

export const findAccount = async (params: FindAccountParams) => {
  const {email} = params
  try {
    await axios.get(BASE_URL + `/api/v1/fint-username?email=${email}`)
  } catch (err) {
    console.error(err)
  }
}

export const findPassword = async (params: FindPasswordParams) => {
  const {email, username} = params
  try {
    await axios.get(
      BASE_URL + `/api/v1/find-password?email=${email}&username=${username}`,
    )
  } catch (err) {
    console.error(err)
  }
}
