import {BASE_URL} from '@api/Apiconfig'
import {useMutation} from '@tanstack/react-query'
import axios from 'axios'

const signUp = async (user: any) => {
  const {id, name, password, email, marketingConsent, promotionConsent} = user
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

export const CheckEmail = useMutation({
  mutationFn: (email: string) =>
    axios.post(BASE_URL + '/api/v1/signup/email-verify/request', {
      email,
    }),
  onSuccess: () => {
    console.log('emailCheck')
  },
})
