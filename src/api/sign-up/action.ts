import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

const pathname = '/api/v1/signup'

type SignUpProps = {
  username: string
  password: string
  email: string
  marketingConsent: boolean
  promotionConsent: boolean
}

type CheckEmailProps = {
  email: string
}

type CheckIdProps = {
  id: string
}

type ConfirmCodeProps = {
  code: string
  key: string
}

export const SignUp = async (props: SignUpProps) => {
  const {username, password, email, marketingConsent, promotionConsent} = props
  try {
    const {data} = await axios.post(BASE_URL + '/api/v1/signup/email', {
      username,
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

export const CheckEmail = async (props: CheckEmailProps) => {
  const {email} = props

  const {data} = await axios.post(
    BASE_URL + '/api/v1/signup/email-verify/request',
    {email},
  )

  return data
}

export const CheckId = async (props: CheckIdProps) => {
  const {id} = props
  await axios.post(BASE_URL + '/api/v1/signup/check-username', {
    username: id,
  })
}

export const ConfirmCode = async (props: ConfirmCodeProps) => {
  const {code, key} = props
  const {data} = await axios.post(
    BASE_URL + '/api/v1/signup/email-verify/confirm',
    {code, key},
  )
}
