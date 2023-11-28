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
                        url: "/projects/ProTeGe",
                        children: [{ title: "Unity version", url: "/" }],
                    },
                    {
                        title: "DQ skinning for Unity",
                        url: "#",
                    },
                    {
                        title: "dice-pool-calc",
                        url: "#",
                    },
                    {
                        title: "Material clustering",
                        url: "#",
                    },
                ],
            },
            { title: "Papers", url: "/Papers" },
            {
                title: "For students",
                url: "/students",
                children: [
                    { title: "HTML", url: "/students/HTML" },
                    { title: "CSS", url: "/students/CSS" },
                ],
            },
            { title: "Blog", url: "/blog" },
        ],
    },
});
