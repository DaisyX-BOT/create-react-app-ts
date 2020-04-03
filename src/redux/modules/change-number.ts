/*
 * @Author: your name
 * @Date: 2020-03-24 15:11:23
 * @LastEditTime: 2020-04-02 17:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-react-ts-test/src/redux/modules/change-number.ts
 */
import { AnyAction } from 'redux';
import * as actionTypes from '../actionsTypes'

const defaultState = {
  title: 'react全家桶DEMO',
  testBumber: 22,
  list: [1, 2],
  showMsg: false
}

export default (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_NUMBER:
      const number = state.testBumber + 1;
      console.log('number',number)
      return { ...state, ...{ testBumber: number } }
    default:
      return state;
  }
}
