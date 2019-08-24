import React, { Component } from 'react'

import { ContentBox } from 'lib/components/ContentBox'
import { DaiLogo } from 'lib/components/DaiLogo'
import { TransactionButton } from 'lib/components/TransactionButton'
import { TableRow } from 'lib/components/TableRow'

export const DaiBalanceContentBox = 
  class _DaiBalanceContentBox extends Component {
    render () {
      return <ContentBox>
        {/* <div
          className='tab-button-menu tab-button-menu--right flex items-center menu'
        >
          <TabButton
            active={page === 'account'}
            onClick={this.showBalances}
            roundedClasses='rounded-tl-lg'
            color='blue'
            className={`mt-2 lg:mt-4 xl:mt-6`}
          >
            Balances
          </TabButton>
          <TabButton
            active={page === 'account'}
            onClick={this.showTransactions}
            roundedClasses='rounded-tr-lg'
            color='blue'
            className={`mt-2 lg:mt-4 xl:mt-6`}
          >
            Transactions
          </TabButton>
        </div> */}
        <h6>
          Merchants will determine your credibility by your credit score and account balance.
          <br />
          <br/>
          Top up your account balance here:
        </h6>

        <TableRow>
          <span className='text-7xl'>
            200&nbsp;
          </span> 

          <span className='text-sm text-gray-600'>
            Your current Dai <DaiLogo /> balance
          </span>
        </TableRow>

        <TableRow
          noRule
          isHorizontal
        >
          <TransactionButton
            color='green'
          >
            Deposit
          </TransactionButton>
          <TransactionButton
          >
            Withdraw
          </TransactionButton>
        </TableRow>
      </ContentBox>
    }
  }