import { AnimatePresence } from "motion/react";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router";
import Curtain from "./Curtain";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

function App() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <main>
            <ScrollToHash></ScrollToHash>
            <NavBar></NavBar>
            <AnimatePresence mode="wait" initial={false}>
                <Curtain key={location.pathname}></Curtain>
            </AnimatePresence>
            <Suspense>{outlet}</Suspense>
            <Footer></Footer>
        </main>
    );
}

export default App;
