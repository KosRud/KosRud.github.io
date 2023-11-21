export interface NavItem {
    title: string;
    url: string;
    children?: NavItem[];
}

export interface ThemeConfig {
    nav: NavItem[];
}
