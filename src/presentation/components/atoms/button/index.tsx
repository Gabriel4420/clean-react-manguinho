import React from 'react'
import './styles.scss'

type Props = {
  className: string
  type: 'submit' | 'button' | 'reset'
  text: string
  'data-testid'?: string
  disabled:boolean
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button
      data-testid={props['data-testid']}
      disabled={props.disabled}
      className={props.className}
      type={props.type}
    >
      {props.text}
    </button>
  )
}

export default Button
