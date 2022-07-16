import React from 'react'
import './styles.scss'
type Props = {
  title: string
  className?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  textModify?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

const Heading: React.FC<Props> = (props: Props) => {
  switch (props.type) {
    case 'h1':
      return (
        <h1
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h1>
      )
    case 'h2':
      return (
        <h2
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h2>
      )
    case 'h3':
      return (
        <h3
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h3>
      )
    case 'h4':
      return (
        <h4
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h4>
      )
    case 'h5':
      return (
        <h5
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h5>
      )
    case 'h6':
      return (
        <h6
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h6>
      )
    default:
      return (
        <h1
          style={
            props.textModify
              ? { textTransform: props.textModify }
              : { textTransform: 'none' }
          }
          className={props.className}
        >
          {props.title}
        </h1>
      )
  }
}

export default Heading
