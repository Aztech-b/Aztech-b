import { Button } from "../components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../components/ui/card";

function PoemNoteContent({ content, hide }) {
    return content ? (
        <div>
            <Card className={"w-full sticky top-1/2 translate-y-[-50%]"}>
                <CardHeader>
                    <CardTitle className={"w-max"}>Annotation notes</CardTitle>
                    {/* <CardDescription className={"w-max"}>Note context</CardDescription> */}
                    <CardAction className={"w-full"}>
                        <Button className={"rounded-full"} variant="ghost" onClick={() => hide()}>
                            x
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>{content}</CardContent>
            </Card>
        </div>
    ) : null;
}

export default PoemNoteContent;
