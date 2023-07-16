import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

const pathname = '/api/v1/signup'

export const SignUp = async (props: {
  id: string
  password: string
  email: string
  marketingConsent: boolean
  promotionConsent: boolean
}) => {
  const {id, password, email, marketingConsent, promotionConsent} = props
  try {
    const {data} = await axios.post(BASE_URL + '/api/v1/signup/email', {
      username: id,
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

export const CheckEmail = async (props: {email: string}) => {
  const {email} = props

  const {data} = await axios.post(
    BASE_URL + '/api/v1/signup/email-verify/request',
    {email},
  )

  return data
}

export const CheckId = async (props: {id: string}) => {
  const {id} = props
  await axios.post(BASE_URL + '/api/v1/signup/check-username', {
    username: id,
  })
}

export const ConfirmCode = async (props: {code: string; key: string}) => {
  const {code, key} = props
  const {data} = await axios.post(
    BASE_URL + '/api/v1/signup/email-verify/confirm',
    {code, key},
  )
}
