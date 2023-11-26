export default interface TocItem {
    level: number;
    element: Element;
    children: TocItem[];
}
