import { Spinner } from '@/presentation/components'
import Styles from './styles.scss'
import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts'

const FormStatus: React.FC = () => {
  const { state } = useContext(FormContext)

  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && (
        <span data-testid="main-error" className={Styles.error}>
          {mainError}
        </span>
      )}
    </div>
  )
}

export default FormStatus
