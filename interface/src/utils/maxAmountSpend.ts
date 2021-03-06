import { CurrencyAmount, CKB, JSBI } from 'nervoswap-sdk'
import { MIN_CKB } from '../constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === CKB) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_CKB)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_CKB))
    } else {
      return CurrencyAmount.ether(JSBI.BigInt(0))
    }
  }
  return currencyAmount
}
