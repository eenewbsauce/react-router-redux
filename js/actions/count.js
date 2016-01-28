import { INCREASE, DECREASE } from '../constants'

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  //n = n + 1;
  return {
    type: DECREASE,
    amount: n
  }
}
