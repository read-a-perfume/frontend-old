import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

const pathname = '/api/v1/signup'

<<<<<<< HEAD
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
=======
export const signUp = async (user: any) => {
  const {id, password, email, marketingConsent, promotionConsent} = user
  try {
    const {data} = await axios.post(BASE_URL + '/api/v1/signup/email', {
      username: id,
      name: '',
>>>>>>> c7f0e8a504d87300067518651242c3ac5abad93f
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

<<<<<<< HEAD
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
=======
export const CheckEmail = async (email: string) =>
  axios.post(BASE_URL + +pathname + '/email-verify/request', {
    email,
  })

export const CheckId = async (id: string) => {
  axios.post(BASE_URL + '/api/v1/signup/check-username', {
    username: id,
  })
}
>>>>>>> c7f0e8a504d87300067518651242c3ac5abad93f
