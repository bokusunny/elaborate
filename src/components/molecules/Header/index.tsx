import React from 'react'
import { connect } from 'react-redux'
import SignInUpButton from '../../atoms/Buttons/SignInUpButton'
import { setIsModalOpen } from '../../../actions/authentications'
import * as styles from './style.css'

interface Props {
  setIsModalOpen: (isModalOpen: boolean, authenticationType?: 'Sign in' | 'Sign up') => void
}

const Header: React.FC<Props> = ({ setIsModalOpen }) => {
  const { Header, title, buttons } = styles
  return (
    <div className={Header}>
      <div className={title}>Elaborate</div>
      <div className={buttons}>
        <div
          onClick={() => {
            setIsModalOpen(true, 'Sign in')
          }}
        >
          <SignInUpButton buttonName="Continue with Elaborate" />
        </div>
        <div
          onClick={() => {
            setIsModalOpen(true, 'Sign up')
          }}
        >
          <SignInUpButton buttonName="Get started" />
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { setIsModalOpen }
)(Header)
