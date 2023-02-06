import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PrivatRoute = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!props.isAuth) {
            navigate('/login')
        }
    }, [props.isAuth])

    if(!props.isAuth) {
        return;
    }

    return props.children
}

export default PrivatRoute;