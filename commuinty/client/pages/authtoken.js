import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { publicFetch } from '../util/fetcher'
import { AuthContext } from '../store/auth'

import LoginForm from '../components/auth-forms'
function decryptObject(o, salt) {
  o = decodeURI(o);
  if (salt && o.indexOf(salt) != 0)
    throw new Error('object cannot be decrypted');
  o = o.substring(salt.length).split('');
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == '{')
      o[i] = '}';
    else if (o[i] == '}')
      o[i] = '{';
  return JSON.parse(o.join(''));
}

const Login = () => {
  const { setAuthState } = useContext(AuthContext)
  const { isAuthenticated } = useContext(AuthContext)
  const router = useRouter()


  if (typeof window !== 'undefined') {

    const params = window.location.href;
    const encryptedGetData = params.split("user_detail=");
    const encryptedGet = encryptedGetData[1];

    if (encryptedGet) {
      publicFetch.post('authenticatetoken', { "encryptedget" : encryptedGet}).then(async function (data) {
        const { token, expiresAt, userInfo, success, decodedToken } = await data.data;
        success ? setAuthState({ token, expiresAt, userInfo }) : '';
       (typeof window !== 'undefined') ? window.location.replace('/') : '';
      });
    }

  } else {
   (typeof window !== 'undefined') ? window.location.replace('/') : ''
  }

  return (
    <>
    </>
  )
}

export default Login
