/*
 * @Author: your name
 * @Date: 2020-03-25 21:35:05
 * @LastEditTime: 2020-03-25 21:35:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-react-ts-test/src/api/config.ts
 */
export const __DEV__ = process.env.NODE_ENV === 'development';
const __TEST__ = process.env.NODE_ENV === 'test';

export default {
  apiHost: __DEV__ ? 'http://ScrmZkzs.agile.com.cn:8280/' : (__TEST__ ? 'http://ScrmZkzstest.agile.com.cn:8280/' : 'http://ScrmZkzstest.agile.com.cn:8280/')

}; 
