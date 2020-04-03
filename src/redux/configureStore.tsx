import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"  // reducers

let finalCreateStore: any;
const initialState = {};
// 如果进程运行在非生产模式下，且浏览器安装了调试插件，则创建包含调试插件的store
if (process.env.NODE_ENV !== "production" && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    ...(window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(thunk)(createStore);
}

export function configureStore(initialState: any) {
  const store = finalCreateStore(rootReducer, initialState);

  if (process.env.NODE_ENV !== "production" && (module as any).hot) {
    // Enable Webpack hot module replacement for reducers
     // 支持reducer的热加载
    (module as any).hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store;
}

const store = configureStore(initialState)
export default store // 将仓库暴露出去
