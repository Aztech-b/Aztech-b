/* 
List
    ListItem
        ListTitle
        ListContent
    ListItem
        ListTitle
        ListContent
 */

import { cn } from "@/lib/utils";

export function List({ children, className, ...props }) {
    return (
        <ul className={cn("flex flex-wrap gap-4 content-stretch max-w-full", className)} {...props}>
            {children}
        </ul>
    );
}

export function ListItem({ children, className, ...props }) {
    return (
        <li className={cn("border-border border-2 h-full p-4 rounded-md", className)} {...props}>
            {children}
        </li>
    );
}

export function ListTitle({ children, className, ...props }) {
    return (
        <h2 className={cn("text-2xl", className)} {...props}>
            {children}
        </h2>
    );
}

export function ListContent({ children, className, ...props }) {
    return (
        <div className={cn("relative mt-5", className)} {...props}>
            <div className="w-1 absolute h-full min-h-full left-0 bg-blue-400"></div>
            <div className="ml-5 max-w-full">{children}</div>
        </div>
    );
}
