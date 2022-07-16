import React from 'react'
import './styles.scss'

type Props = {
  className: string
  type: 'submit' | 'button' | 'reset'
  text: string
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.text}
    </button>
  )
}

export default Button
