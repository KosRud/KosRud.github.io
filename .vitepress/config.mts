import { defineConfigWithTheme } from "vitepress";
import ThemeConfig from "./theme/ThemeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
    title: "Kostiantyn Rudenko",
    description: "personal website",
    srcDir: "./pages",
    themeConfig: {
        nav: [
            { title: "About me", url: "/about/" },
            {
                title: "My Projects",
                url: "/projects/",
                children: [
                    {
                        title: "ProTeGe",
                        url: "/students/html",
                        children: [{ title: "Unity version", url: "/" }],
                    },
                    {
                        title: "DQ Skinning for Unity",
                        url: "/students/html",
                    },
                    {
                        title: "Dice-pool-calc",
                        url: "/students/html",
                    },
                    {
                        title: "Material clustering",
                        url: "/students/html",
                    },
                ],
            },

            {
                title: "For Students",
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
