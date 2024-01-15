import { Link, Outlet } from "react-router-dom";

export default function layout(props){
    return(
        <>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/test"}>Test</Link>
            <Link to={"/login"}>Login</Link>
        </div>
        {/* {props.children} */}
        <Outlet/>
        </>
    )
}

