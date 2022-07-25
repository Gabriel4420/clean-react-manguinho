import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation'
import { makeLogin } from './factories'
import '@/presentation/styles/global.scss'

ReactDOM.render(
  <Router makeLogin={makeLogin} />,
  document.getElementById('main'),
)
