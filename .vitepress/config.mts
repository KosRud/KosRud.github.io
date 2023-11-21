import { defineConfigWithTheme } from "vitepress";
import { ThemeConfig } from "./theme/ThemeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "Kostiantyn Rudenko",
    description: "personal website",
    srcDir: "./pages",
    themeConfig: {
        nav: [
            { title: "About me", url: "/about/" },
            {
                title: "My projects",
                url: "/projects/",
                children: [
                    {
                        title: "ProTeGe",
                        url: "/students/html",
                        children: [{ title: "Unity version", url: "/" }],
                    },
                    {
                        title: "DQ skinning for Unity",
                        url: "/students/html",
                    },
                    {
                        title: "dice-pool-calc",
                        url: "/students/html",
                    },
                    {
                        title: "Material clustering",
                        url: "/students/html",
                    },
                ],
            },
            { title: "Papers", url: "/Papers" },
            {
                title: "For students",
                url: "/students",
                children: [
                    { title: "HTML", url: "/students/html" },
                    { title: "CSS", url: "/students/css" },
                ],
            },
            { title: "Blog", url: "/blog" },
        ],
    },
});
