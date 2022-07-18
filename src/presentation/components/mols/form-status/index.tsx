import { Spinner } from '@/presentation/components'
import Styles from './styles.scss'
import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts'

const FormStatus: React.FC = () => {
  const {state} = useContext(FormContext)
  
  const { isLoading, errorMessage } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && (
        <Spinner className={Styles.spinner} />
      )}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
