import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ToolsAndSkills from "./components/ToolsAndSkills";

function App() {
    return (
        <>
            <main>
                <Main></Main>
                <About></About>
                <ToolsAndSkills></ToolsAndSkills>
                <FeaturedProjects></FeaturedProjects>
                <Contact></Contact>
                <Footer></Footer>
            </main>
        </>
    );
}

export default App;
