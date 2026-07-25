import { AnimatePresence } from "motion/react";
import { createContext, Suspense, useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Curtain from "./Curtain";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

const TransitionContextProvider = createContext();
export const useTransitionContext = () => useContext(TransitionContextProvider);

function App() {
    const [targetLocation, setTargetLocation] = useState(null);
    const location = useLocation();

    // when transition link is clicked but the target location and current location are identical
    // conditional rendering inside app component waits for location and target location not to be identical
    // as target location state is not null, any link change(even if the link is not transition link) triggers the curtain animation
    useEffect(() => {
        if (location.pathname === targetLocation) {
            setTargetLocation(null);
        }
    }, [location.pathname, targetLocation]);

    return (
        <main className="relative">
            <TransitionContextProvider value={{ setTargetLocation }}>
                <ScrollToHash></ScrollToHash>
                <NavBar></NavBar>

                <AnimatePresence mode="wait">
                    {targetLocation && location.pathname !== targetLocation ? (
                        <Curtain
                            to={targetLocation}
                            onComplete={() => {
                                setTargetLocation(null);
                            }}
                        ></Curtain>
                    ) : null}
                </AnimatePresence>
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
                <Footer></Footer>
            </TransitionContextProvider>
        </main>
    );
}

export default App;
