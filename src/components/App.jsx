import { AnimatePresence } from "motion/react";
import { createContext, Suspense, useContext } from "react";
import { Outlet } from "react-router";
import useCurtainSetup from "../hooks/useCurtainSetup";
import useTranslationSetup from "../hooks/useTranslationSetup";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Curtain, { useCurtainManager } from "./ui/Curtain";

const TransitionContextProvider = createContext();
export const useTransitionContext = () => useContext(TransitionContextProvider);

function App() {
    const { targetLocation, setTargetLocation } = useCurtainSetup();
    useTranslationSetup();
    useCurtainManager([
        { from: "/", to: "/my-poems" },
        { to: "/", from: "/my-poems" },
    ]);

    return (
        <main className="relative">
            <TransitionContextProvider value={{ setTargetLocation }}>
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
