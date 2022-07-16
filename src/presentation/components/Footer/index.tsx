import Styles from './styles.scss'
import React, { memo } from 'react'

const FooterHeader: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <span>
        develop by{' '}
        <a
          target="blank"
          rel="nofollow noreferrer"
          href="https://gabriel4420.github.io"
        >
          @gabriel4420
        </a>
      </span>
    </footer>
  )
}

export default memo(FooterHeader)
