import { useEffect } from "react";

function PageLoaderWrapper({ children, onLoadComplete }) {
    useEffect(() => {
        console.log("onLoadComplete();");
        onLoadComplete();
    }, [onLoadComplete]);
    return children;
}

export default PageLoaderWrapper;
