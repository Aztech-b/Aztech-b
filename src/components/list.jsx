/* 
List
    ListItem
        ListTitle
        ListContent
    ListItem
        ListTitle
        ListContent
 */

export function List({ children, ...props }) {
    return (
        <ul className="flex flex-col gap-1" {...props}>
            {children}
        </ul>
    );
}

export function ListItem({ children, ...props }) {
    return (
        <li className="border-border border-2 h-full p-4 rounded-md" {...props}>
            {children}
        </li>
    );
}

export function ListTitle({ children, ...props }) {
    return (
        <div className="text-2xl" {...props}>
            {children}
        </div>
    );
}

export function ListContent({ children, ...props }) {
    return (
        <div className="relative mt-5" {...props}>
            <div className="w-1 absolute h-full min-h-full left-0 bg-blue-400"></div>
            <div className="ml-5">{children}</div>
        </div>
    );
}
