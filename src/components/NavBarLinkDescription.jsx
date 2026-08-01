import { ArrowUpRight } from "lucide-react";

function NavBarLinkDescription({ children, title }) {
    return (
        <div className="max-w-full w-max">
            <div className="flex justify-between gap-2 max-w-full">
                <h3>{title}</h3>
                <ArrowUpRight size={24} />
            </div>
            <div className="description max-w-full">{children}</div>
        </div>
    );
}

export default NavBarLinkDescription;
