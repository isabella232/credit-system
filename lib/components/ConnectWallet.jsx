import React, { PureComponent } from 'react'
import classnames from 'classnames'
import { web3 } from 'dapp-core'

import { Button } from 'lib/components/form'
import { withEthereumPermissionQuery } from 'lib/components/hocs/withEthereumPermissionQuery'

export const ConnectWallet = withEthereumPermissionQuery(
  class _ConnectWallet extends PureComponent {
    render () {
      const {
        ethereumPermissionQuery
      } = this.props
      const { ethereumPermission } = ethereumPermissionQuery

      return <div
        className={classnames(
          'fixed t-0 l-0 w-full mx-auto bg-white shadow text-black animated h-full text-center p-6 trans trans-fastest',
          {
            'slideOutUp': ethereumPermission
          }
        )}
      >
        <div className='flex flex-col justify-center h-full'>
          <div>
            <h5>
              Step 1.
            </h5>
            <h1 className='text-2xl mb-6'>
              To interact with the Ethereum Credit System please permit transactions with your wallet.
            </h1>
            <Button
              backgroundClasses='bg-blue-600 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-700'
              onClick={(e) => {
                e.preventDefault()
                web3.askEthereumPermissions()
              }}
            >
              Connect Wallet
            </Button>
          </div>

        <p className='text-blue-300 mt-24'>
          The Ethereum Credit System is a secure, audited in-person collateral tool.
        </p>
        </div>
      </div>
    }
  }
)