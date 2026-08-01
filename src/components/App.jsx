import { Suspense, useState } from "react";
import { Outlet } from "react-router";
import useTranslationSetup from "../hooks/useTranslationSetup";
import useScrollToHash from "../styles/useScrollToHash";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { CurtainManager } from "./ui/Curtain";

function App() {
    /** @type {["covering" | "waiting" | "uncovering" | null]} */
    const [curtainPhase, setCurtainPhase] = useState(null);
    const showCurtain = () => setCurtainPhase("covering");
    useTranslationSetup();
    useScrollToHash();

    return (
        <main className="relative">
            <NavBar></NavBar>
            <CurtainManager
                config={[
                    { from: "/", to: "/my-poems" },
                    { from: "/my-poems", to: "/" },
                ]}
                showCurtain={showCurtain}
                curtainPhase={curtainPhase}
                setCurtainPhase={setCurtainPhase}
            ></CurtainManager>
            <Suspense>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </main>
    );
}

export default App;
