import { useParams } from "react-router";
import poems from "../assets/poems.json";
import { ListContent } from "../components/list";

function Poem() {
    const params = useParams();
    const poem = poems.find((poem) => poem.id === Number(params.id));
    return (
        <div>
            <h2 className="poemHeading mb-10">{poem.title}</h2>

            <div>
                <ListContent>
                    <pre>{poem.content}</pre>
                </ListContent>
            </div>
        </div>
    );
}

export default Poem;
