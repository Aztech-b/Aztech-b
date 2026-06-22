import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
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
            </main>
        </>
    );
}

export default App;
