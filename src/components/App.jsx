import { AnimatePresence } from "motion/react";
import { createContext, Suspense, useContext, useState } from "react";
import { Outlet, useLocation, useOutlet } from "react-router";
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
