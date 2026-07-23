import { createContext, Suspense, useContext, useRef, useState } from "react";
import { useLocation, useOutlet } from "react-router";
import Curtain from "./Curtain";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

const TransitionContextProvider = createContext();
export const useTransitionContext = () => useContext(TransitionContextProvider);

function App() {
    const outlet = useOutlet();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const address = useRef("");
    const setAddress = (value) => (address.current = value);
    const location = useLocation();

    // can merge is isTransitioning and address into one variable
    return (
        <main>
            <TransitionContextProvider value={{ isTransitioning, setIsTransitioning, setAddress }}>
                <ScrollToHash></ScrollToHash>
                <NavBar></NavBar>

                {isTransitioning && location.pathname !== address ? (
                    <Curtain
                        to={address}
                        onExitAnimationEnd={() => {
                            setIsTransitioning(false);
                        }}
                    ></Curtain>
                ) : null}
                <Suspense>{outlet}</Suspense>
                <Footer></Footer>
            </TransitionContextProvider>
        </main>
    );
}

export default App;
