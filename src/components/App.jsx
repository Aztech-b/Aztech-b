import { Suspense, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router";
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
            <ScrollRestoration
                getKey={(location) => {
                    if (location.pathname.startsWith("/my-poems")) {
                        return "my-poems";
                    }
                    return location.key;
                }}
            ></ScrollRestoration>
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
