import { AnimatePresence } from "motion/react";
import { cloneElement } from "react";
import { useLocation, useOutlet } from "react-router";
import Hero from "../components/poems/Hero";

function MyPoems() {
    const outlet = useOutlet();
    const location = useLocation();
    return (
        <div className="backgroundContainer min-h-screen">
            <Hero></Hero>
            <AnimatePresence mode="wait">{outlet && cloneElement(outlet, { key: location.pathname })} </AnimatePresence>
        </div>
    );
}

export default MyPoems;
