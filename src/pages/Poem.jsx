import { useState } from "react";
import { useParams } from "react-router";
import { GetFormattedPoemById, GetSegmentedFormattedPoemById } from "../assets/poems.js";
import { ListContent } from "../components/list";
import { Highlighter } from "../components/ui/highlighter.jsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip.jsx";
import PoemNoteContent from "./PoemNoteContent.jsx";

function Poem() {
    const params = useParams();
    const poem = GetFormattedPoemById(Number(params.id));
    const segments = GetSegmentedFormattedPoemById(Number(params.id));
    const [noteContent, setNoteContent] = useState(null);

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

                <div className="w-full flex justify-center relative">
                    <ListContent
                        className={"poem-content"}
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
                                      <Tooltip key={index}>
                                          <TooltipTrigger asChild>
                                              <div
                                                  className={"highlighted w-fit"}
                                                  onClick={() => {
                                                      setNoteContent((prev) =>
                                                          prev === null ? segment.note.text : null,
                                                      );
                                                  }}
                                              >
                                                  <Highlighter
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
                                          </TooltipTrigger>
                                          <TooltipContent side="right">{segment.type}</TooltipContent>
                                      </Tooltip>
                                  ),
                              )
                            : poem.content.map((line, index) => (
                                  <p key={index} className="w-fit">
                                      {line}
                                  </p>
                              ))}
                    </ListContent>
                    <PoemNoteContent content={noteContent}></PoemNoteContent>
                </div>
            </div>
        </div>
    );
}

export default Poem;
