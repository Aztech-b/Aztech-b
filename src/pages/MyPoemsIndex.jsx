import { Link } from "react-router";
import poemsData from "../assets/poems.json";
import { List, ListContent, ListItem, ListTitle } from "../components/list";

function MyPoemsIndex() {
    return (
        <div className="content">
            <div className="flex justify-center items-center h-[50vh]">
                <h1 className="heroHeading">Poems written by me</h1>
            </div>
            <List className="flex flex-wrap gap-4 content-stretch max-w-full">
                {poemsData.map((poem) => (
                    <Link key={poem.id} to={`/my-poems/${poem.id}`} className={"cursor-pointer shrink-0 grow"}>
                        <ListItem>
                            <ListTitle>{poem.title}</ListTitle>
                            {poem.preview ? (
                                <ListContent>
                                    <pre>{poem.preview}</pre>
                                </ListContent>
                            ) : null}
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
}

export default MyPoemsIndex;
