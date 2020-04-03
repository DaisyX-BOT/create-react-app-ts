/*
 * @Author: your name
 * @Date: 2020-04-02 17:45:19
 * @LastEditTime: 2020-04-02 17:46:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-react-ts-test/src/redux/actions.ts
 */
import * as actionTypes from './actionsTypes'

const changeNumber = (payload?: any) => {
  return {
    type: actionTypes.CHANGE_NUMBER,
    payload
  }
}

export {
  changeNumber
}
