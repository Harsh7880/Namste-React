import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>
                OOPS's
            </h1>
            <h1>
                Someting Went Wrong.........!
            </h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;