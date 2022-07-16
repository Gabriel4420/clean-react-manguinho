import React from 'react'
import Styles from './styles.scss'

type Props = {
  className: string
  type: 'submit' | 'button' | 'reset'
  text: string
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button style={Styles.button} className={props.className} type={props.type}>
      {props.text}
    </button>
  )
}

export default Button
