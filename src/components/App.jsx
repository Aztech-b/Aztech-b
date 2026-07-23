import { AnimatePresence } from "motion/react";
import { createContext, Suspense, useContext, useState } from "react";
import { useLocation, useOutlet } from "react-router";
import Curtain from "./Curtain";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

const TransitionContextProvider = createContext();
export const useTransitionContext = () => useContext(TransitionContextProvider);

function App() {
    const outlet = useOutlet();
    const [targetLocation, setTargetLocation] = useState(null);
    const location = useLocation();

    // can merge is isTransitioning and address into one variable
    return (
        <main>
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
                <Suspense>{outlet}</Suspense>
                <Footer></Footer>
            </TransitionContextProvider>
        </main>
    );
}

export default App;
