import {BASE_URL} from '@api/Apiconfig'
import axios from 'axios'

type LoginParams = {
  username: string
  password: string
}

export const accountLogin = async (params: LoginParams) => {
  const {username, password} = params
  try {
    const {data} = await axios.post(BASE_URL + '/api/v1/login', {
      username,
      password,
    })

    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

export const googleLogin = () => {
  location.href =
    'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=554827564259-mhmn6isbu6emg3e354djamp2lvcon55b.apps.googleusercontent.com&scope=profile%20email&state=svj4nn451vB9WDTW0ZGOesL1p8zH1VvAh4Pt_fXVdHM%3D&redirect_uri=http%3A%2F%2Fec2-15-164-250-165.ap-northeast-2.compute.amazonaws.com%2Fapi%2Flogin%2Foauth2%2Fcode%2Fgoogle&service=lso&o2v=2&flowName=GeneralOAuthFlow'
}
