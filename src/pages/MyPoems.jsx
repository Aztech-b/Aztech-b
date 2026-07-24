import { Outlet } from "react-router";
import Hero from "../components/poems/Hero";

function MyPoems() {
    return (
        <div className="backgroundContainer min-h-screen">
            <Hero></Hero>
            {/* <AnimatePresence mode="wait"> */}
            <Outlet></Outlet>
            {/* </AnimatePresence> */}
        </div>
    );
}

export default MyPoems;
