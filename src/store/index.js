//管理多个store,使用中间件
import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducer/user";
//第三方插件,将要修改的state都存放在store中,发起一个action描述发生了什么
import reduxThunk from "redux-thunk";

const reducer = combineReducers({
    user
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;

