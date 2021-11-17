import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://twitter.com/syn_dac" target="_blank" rel="noopener noreferrer">
          @SYN_DAC
        </a>
        <span className="ms-1">DΞGΞNM4DΞ</span>
      </div>
      <div className="ms-auto">
        <a href="https://twitter.com/syn_dac" target="_blank" rel="noopener noreferrer">
          Follow us on Twitter
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
