import { AnimatePresence } from "motion/react";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router";
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

            <AnimatePresence mode="wait">
                <Suspense key={location.pathname}>{outlet}</Suspense>
            </AnimatePresence>
            <Footer></Footer>
        </main>
    );
}

export default App;
