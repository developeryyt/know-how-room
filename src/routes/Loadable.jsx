import {Suspense} from "react";

const Loadable = (Component) => (props) => {

    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <Component {...props} />
        </Suspense>
    )
}

export default Loadable
