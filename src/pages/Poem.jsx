import { useParams } from "react-router";
import { GetFormattedPoemById, GetSegmentedFormattedPoemById } from "../assets/poems.js";
import { ListContent } from "../components/list";
import { Highlighter } from "../components/ui/highlighter.jsx";

function Poem() {
    const params = useParams();
    const poem = GetFormattedPoemById(Number(params.id));
    const segments = GetSegmentedFormattedPoemById(Number(params.id));
    return (
        <div id="poem">
            <div className="mb-10 mt-40">
                <h2
                    className={`poem-title text-5xl`}
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
                    {segments
                        ? segments.map((segment, index) =>
                              segment.type === "plain" ? (
                                  segment.lines.map((line, index) => (
                                      <p key={index} className="w-fit">
                                          {line}
                                      </p>
                                  ))
                              ) : (
                                  <div className={"highlighted w-fit"}>
                                      <Highlighter
                                          key={index}
                                          action={segment.type === "draft" ? "box" : "highlight"}
                                          multiline={false}
                                          iterations={4}
                                      >
                                          {segment.lines.map((line, index) => (
                                              <p key={index} className="w-fit">
                                                  {line}
                                              </p>
                                          ))}
                                      </Highlighter>
                                  </div>
                              ),
                          )
                        : poem.content.map((line, index) => (
                              <p key={index} className="w-fit">
                                  {line}
                              </p>
                          ))}
                </ListContent>
            </div>
        </div>
    );
}

export default Poem;
