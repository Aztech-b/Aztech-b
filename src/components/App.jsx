import { Outlet } from "react-router";
import { Toaster } from "sonner";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

function App() {
    return (
        <main>
            <ScrollToHash></ScrollToHash>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </main>
    );
}

export default App;
