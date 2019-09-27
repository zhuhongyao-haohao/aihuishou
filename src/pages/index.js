import Loadable from "react-loadable";
import Loading from "@common/loading";

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Change = Loadable({
    loader:()=>import("./change"),
    loading:Loading
})

const Server = Loadable({
    loader:()=>import("./server"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export {
    Home,
    Change,
    Server,
    Mine,
    Login
}