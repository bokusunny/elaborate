import React from 'react'
import * as styles from './style.css'

interface Props {
  buttonName: 'Continue with Elaborate' | 'Get started'
  onClick: () => void
}

const SingInUpButton: React.FC<Props> = ({ buttonName, onClick }) => {
  const { SingInUpButton } = styles
  return (
    <div className={SingInUpButton} onClick={onClick}>
      {buttonName}
    </div>
  )
}

export default SingInUpButton
