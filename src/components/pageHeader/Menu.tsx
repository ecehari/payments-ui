import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext, LoginContextType, UserType } from "../../context/context";


const Menu = () : JSX.Element => {

    const contextPointer = useContext<LoginContextType>(LoginContext);
    const userDetails : UserType = contextPointer.user;


    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
            <li>{ userDetails.id === 0 ? <Link to="/signin">Sign In</Link> : userDetails.name } </li>
        </ul>
    );
}

export default Menu;
