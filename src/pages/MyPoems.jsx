import { Link } from "react-router";
import Curtain from "../components/Curtain";
import { ListItem, ListItems, ListProvider } from "../components/kibo-ui/list";
import Hero from "../components/poems/Hero";

const jsonModules = import.meta.glob("../assets/poems/*.json", { eager: true });
const allPoems = Object.entries(jsonModules).map(([filepath, module]) => {
    return { _filepath: filepath, ...module.default };
});
function MyPoems() {
    return (
        <div className="relative backgroundContainer min-h-screen">
            <Hero></Hero>

            <div className="content">
                <div className="flex justify-center items-center h-[50vh]">
                    <h1 className="heroHeading">Poems written by me</h1>
                </div>
                <ListProvider>
                    <ListItems>
                        {allPoems.map((poem) => (
                            <Link to="#" key={poem._filepath} className={"cursor-pointer"}>
                                <ListItem className={"cursor-pointer"}>{poem.title}</ListItem>
                            </Link>
                        ))}
                    </ListItems>
                </ListProvider>
            </div>
        </div>
    );
}

export default Curtain(MyPoems);
