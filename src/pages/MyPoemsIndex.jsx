import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { poemsAllFormatted as poemsData } from "../assets/poems.js";
import { List, ListContent, ListItem, ListTitle } from "../components/list";

function MyPoemsIndex() {
    const { t } = useTranslation("translation", { keyPrefix: "myPoemsIndexPage" });
    return (
        <div className="content" id="my-poems-index">
            <div className="flex justify-center items-center h-[50vh] flex-col">
                <h1 className="heroHeading text-center"> {t("heading")} </h1>
                <p className="description heroDescription"> {t("headingDescription")} </p>
            </div>
            <List className={"slide-in-out"}>
                {poemsData.map((poem) => (
                    <Link
                        viewTransition
                        key={poem.id}
                        to={`/my-poems/${poem.id}`}
                        className={"cursor-pointer shrink-0 grow"}
                    >
                        <ListItem>
                            <ListTitle
                                className={`poem-title text-2xl/[1]`}
                                style={{
                                    viewTransitionName: `poem-title-${poem.id}`,
                                    viewTransitionClass: "poem-title-transition",
                                }}
                            >
                                {poem.title}
                            </ListTitle>
                            {poem.preview ? (
                                <ListContent
                                    className={"poem-content w-max"}
                                    style={{
                                        viewTransitionName: `poem-content-${poem.id}`,
                                        viewTransitionClass: "poem-content-class",
                                    }}
                                >
                                    {poem.preview.map((poemPreviewLine, index) => (
                                        <p key={index}>{poemPreviewLine}</p>
                                    ))}
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
