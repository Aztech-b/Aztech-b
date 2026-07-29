import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { GetFormattedPoemById, GetSegmentedFormattedPoemById } from "../assets/poems.js";
import { ListContent } from "../components/list";
import { Button } from "../components/ui/button.jsx";
import { Highlighter } from "../components/ui/highlighter.jsx";
import { Separator } from "../components/ui/separator.jsx";

function Poem() {
    const params = useParams();
    const poem = GetFormattedPoemById(Number(params.id));
    const segments = GetSegmentedFormattedPoemById(Number(params.id));
    /** @type {[String | null]} */
    const [note, setNote] = useState(null);
    // Without useMemo the Highlighter keeps being repainted
    // The useLayoutEffect of Highlighter Component has this padding as a dependency and without useMemo, the array point to the
    // another chunk in memory, and the Highlighter gets repainted. With useMemo on any state update, al boxes remain intact without any repaints

    const paddingOfBox = useMemo(() => [2, 4], []);
    const [distanceFromTop, setDistanceFromTop] = useState();

    return (
        <div id="poem" className="relative content">
            <div
                className="main relative"
                style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gridTemplateRows: "1fr auto" }}
            >
                <div className="mb-10 mt-40 flex justify-between w-max items-center col-start-2">
                    <Link to={"/my-poems"} viewTransition>
                        <Button variant="ghost" size="icon-xl" className={"rounded-full justify-self-start mr-3"}>
                            <ArrowLeft size={90}></ArrowLeft>
                        </Button>
                    </Link>
                    <h2
                        className={`poem-title text-5xl w-full`}
                        style={{
                            viewTransitionName: `poem-title-${poem.id}`,
                            viewTransitionClass: "poem-title-transition",
                        }}
                    >
                        {poem.title}
                    </h2>
                </div>

                <div className={"w-full relative col-start-2 justify-self-start grid grid-cols-[1fr_auto_1fr]"}>
                    <ListContent
                        className={"poem-content flex-1"}
                        style={{
                            viewTransitionName: `poem-content-${poem.id}`,
                            viewTransitionClass: "poem-content-class",
                        }}
                    >
                        {segments
                            ? segments.map((segment, index) => {
                                  const isBox = segment?.note?.type?.includes("box");
                                  return segment.type === "plain" ? (
                                      segment.lines.map((line, index) => (
                                          <p key={index} className="w-fit">
                                              {line}
                                          </p>
                                      ))
                                  ) : (
                                      <div
                                          key={index}
                                          className={"w-fit highlighted"}
                                          onClick={(e) => {
                                              setNote(segment?.note?.text);
                                              setDistanceFromTop(e.currentTarget.offsetTop);
                                              console.log(e.currentTarget.offsetTop);
                                          }}
                                      >
                                          <Highlighter
                                              padding={isBox ? paddingOfBox : 0}
                                              action={isBox ? "box" : "highlight"}
                                              multiline={false}
                                              iterations={4}
                                              color={
                                                  segment.type.includes("box")
                                                      ? "var(--highlighterBoxColor)"
                                                      : "var(--highlighterHighlightColor)"
                                              }
                                          >
                                              {segment.lines.map((line, index) => (
                                                  <p key={index} className="w-fit">
                                                      {line}
                                                  </p>
                                              ))}
                                          </Highlighter>
                                      </div>
                                  );
                              })
                            : poem.content.map((line, index) => (
                                  <p key={index} className="w-fit">
                                      {line}
                                  </p>
                              ))}
                    </ListContent>
                    {note ? (
                        <>
                            <Separator orientation="vertical"></Separator>
                            <div className="p-5">
                                <p style={{ marginTop: distanceFromTop }}>{note}</p>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Poem;
