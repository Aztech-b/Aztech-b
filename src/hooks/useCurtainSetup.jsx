import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function useCurtainSetup() {
    const [targetLocation, setTargetLocation] = useState(null);
    const location = useLocation();
    // when transition link is clicked but the target location and current location are identical
    // conditional rendering inside app component waits for location and target location not to be identical
    // as target location state is not null, any link change(even if the link is not transition link) triggers the curtain animation
    useEffect(() => {
        if (location.pathname === targetLocation) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTargetLocation(null);
        }
    }, [location.pathname, targetLocation]);

    return { targetLocation, setTargetLocation };
}

export default useCurtainSetup;
