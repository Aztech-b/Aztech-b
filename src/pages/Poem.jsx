import { useParams } from "react-router";
import { GetFormattedPoemById } from "../assets/poems.js";
import { ListContent } from "../components/list";

function Poem() {
    const params = useParams();
    const poem = GetFormattedPoemById(Number(params.id));

    return (
        <div id="poem">
            <div className="mb-10 mt-40">
                <h2
                    className={`poem-title text-5xl border-2 border-blue-500 m-0`}
                    style={{
                        viewTransitionName: `poem-title-${poem.id}`,
                        viewTransitionClass: "poem-title-transition",
                    }}
                >
                    {poem.title}
                </h2>
            </div>

            <div>
                <ListContent
                    className={"poem-content"}
                    style={{ viewTransitionName: `poem-content-${poem.id}`, viewTransitionClass: "poem-content-class" }}
                >
                    {poem.content.map((poemLine, index) => (
                        <p key={index}>{poemLine}</p>
                    ))}
                </ListContent>
            </div>
        </div>
    );
}

export default Poem;
