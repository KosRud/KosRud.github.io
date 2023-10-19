interface NavItem {
    title: string;
    url: string;
    children?: NavItem[];
}

export default interface themeConfig {
    nav: NavItem[];
}
