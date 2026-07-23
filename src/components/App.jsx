import { createContext, Suspense, useContext, useRef, useState } from "react";
import { useOutlet } from "react-router";
import Curtain from "./Curtain";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

const TransitionContextProvider = createContext();
export const useTransitionContext = () => useContext(TransitionContextProvider);

function App() {
    const outlet = useOutlet();
    const [isTransitioning, setIsTransitioning] = useState(false);
    let _onEnterAnimationEnd = useRef(() => {});
    const onEnterAnimationEnd = (callback) => {
        _onEnterAnimationEnd.current = callback;
    };

    return (
        <main>
            <TransitionContextProvider value={{ isTransitioning, setIsTransitioning, onEnterAnimationEnd }}>
                <ScrollToHash></ScrollToHash>
                <NavBar></NavBar>

                {isTransitioning ? (
                    <Curtain
                        onEnterAnimationEnd={() => {
                            _onEnterAnimationEnd.current();
                            console.log("onAnimationEnterEnd");
                        }}
                        onExitAnimationEnd={() => {
                            setIsTransitioning(false);
                            console.log("onExitAnimationEnd");
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
