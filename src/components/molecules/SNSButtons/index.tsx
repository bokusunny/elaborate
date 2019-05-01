import React from 'react'
import { firebase, auth } from '../../../utils/firebase'
import SNSSignInButton from '../../atoms/Buttons/SNSSigiInButton'

interface Props {
  type: 'Sign In' | 'Sign Up'
  onClick: () => void
}

const onClickGoogleSignin = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithRedirect(provider)
}

const SNSButtons: React.FC<Props> = ({ type, onClick }) => {
  return (
    <div>
      <SNSSignInButton type="google" onClick={onClickGoogleSignin}>
        {`${type} with Google`}
      </SNSSignInButton>
      <SNSSignInButton type="twitter" onClick={onClick}>
        {`${type} with Twiiter`}
      </SNSSignInButton>
      <SNSSignInButton type="facebook" onClick={onClick}>
        {`${type} with Facebook`}
      </SNSSignInButton>
    </div>
  )
}

export default SNSButtons
