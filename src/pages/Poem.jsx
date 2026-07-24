import { useParams } from "react-router";
import poems from "../assets/poems.json";
import { ListContent } from "../components/list";

function Poem() {
    const params = useParams();
    const poem = poems.find((poem) => poem.id === Number(params.id));

    return (
        <div id="poem">
            <div className="mb-10 mt-40">
                <h2 className={`poem-title text-5xl`} style={{ viewTransitionName: `poem-title-${poem.id}` }}>
                    {poem.title}
                </h2>
            </div>

            <div>
                <ListContent
                    className={"poem-content border-2 border-blue-500"}
                    style={{ viewTransitionName: `poem-content-${poem.id}`, viewTransitionClass: "poem-content-class" }}
                >
                    <pre>{poem.content}</pre>
                </ListContent>
            </div>
        </div>
    );
}

export default Poem;
