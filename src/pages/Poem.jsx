import { useParams } from "react-router";
import { GetFormattedPoemById, GetSegmentedFormattedPoemById } from "../assets/poems.js";
import { ListContent } from "../components/list";
import { Highlighter } from "../components/ui/highlighter.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover.jsx";

function Poem() {
    const params = useParams();
    const poem = GetFormattedPoemById(Number(params.id));
    const segments = GetSegmentedFormattedPoemById(Number(params.id));

    return (
        <div id="poem" className="relative content">
            <div className="main relative">
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

                <div className={"w-full relative grid-cols-3 grid gap-4"}>
                    <div></div>
                    <ListContent
                        className={"poem-content justify-self-center"}
                        style={{
                            viewTransitionName: `poem-content-${poem.id}`,
                            viewTransitionClass: "poem-content-class",
                        }}
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
                                      <Popover key={index}>
                                          <PopoverTrigger asChild>
                                              <div className={"highlighted"}>
                                                  <Highlighter
                                                      padding={[2, 4]}
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
                                          </PopoverTrigger>
                                          <PopoverContent sideOffset={10} side="right">
                                              {segment.type}
                                          </PopoverContent>
                                      </Popover>
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
        </div>
    );
}

export default Poem;
