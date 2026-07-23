import { AnimatePresence, motion } from "motion/react";
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
                <div key={location.pathname} className="main">
                    <Curtain duration={1.5}></Curtain>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, delay: 0.3 }}
                        className="main"
                    >
                        {outlet}
                    </motion.div>
                </div>
            </AnimatePresence>
            <Footer></Footer>
        </main>
    );
}

export default App;
