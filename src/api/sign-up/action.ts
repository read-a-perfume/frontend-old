import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

const pathname = '/api/v1/signup'

export const signUp = async (user: any) => {
  const {id, password, email, marketingConsent, promotionConsent} = user
  try {
    const {data} = await axios.post(BASE_URL + '/api/v1/signup/email', {
      username: id,
      name: '',
      password,
      email,
      marketingConsent,
      promotionConsent,
    })

    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

export const CheckEmail = async (email: string) =>
  axios.post(BASE_URL + +pathname + '/email-verify/request', {
    email,
  })

export const CheckId = async (id: string) => {
  axios.post(BASE_URL + '/api/v1/signup/check-username', {
    username: id,
  })
}
