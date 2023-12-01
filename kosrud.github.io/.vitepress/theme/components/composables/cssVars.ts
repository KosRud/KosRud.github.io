import { InjectionKey, provide } from "vue";

type Dig<T, K extends string | number | symbol> = T extends Record<K, infer U>
    ? U
    : never;

enum CssVarType {
    length,
    string,
}

type CssVarDescription = {
    value: number;
    type: CssVarType.length;
};
// | {
//       value: string;
//       type: CssVarType.string;
//   };

const cssVarDescriptions = {
    breakpointToc: {
        value: 800,
        type: CssVarType.length,
    },
};

// assert type compatibility
cssVarDescriptions as { [key: string]: CssVarDescription };

type CssVarDescriptions = typeof cssVarDescriptions;

export type CssVars = {
    [K in keyof typeof cssVarDescriptions]: Dig<
        (typeof cssVarDescriptions)[K],
        "value"
    >;
};

export const symbolCssVars: InjectionKey<CssVars> = Symbol();

export function useCssVarsProvider() {
    const vars = getCssVars();
    provide(symbolCssVars, vars);
    return vars;
}

function getCssVars() {
    const html = document.querySelector("html");

    if (!html) {
        return produceResult(cssVarDescriptions);
    }

    const style = window.getComputedStyle(html);

    for (const key in cssVarDescriptions) {
        const k = key as keyof CssVarDescriptions;

        const varName = "--".concat(
            key.replaceAll(/[A-Z]/g, (match: string) => {
                return "-".concat(match.toLocaleLowerCase());
            })
        );

        const varValue = style.getPropertyValue(varName);

        if (varValue === "") {
            console.error(
                `Missing css variable: "${varName}"`,
                "\n",
                "Fallback to default:",
                cssVarDescriptions[k].value
            );
        } else {
            switch (cssVarDescriptions[k].type) {
                case CssVarType.length:
                    if (!varValue.match(/^[\d]+rem$/)) {
                        console.error(
                            `Invalid CSS variable value:`,
                            {
                                name: varName,
                                value: varValue,
                            },
                            "\n",
                            "Fallback to default:",
                            cssVarDescriptions[k].value
                        );
                        break;
                    }
                    cssVarDescriptions[k].value = parseInt(varValue);
                    break;
                // case CssVarType.string:
                //     cssVarDescriptions[k].value = varValue;
                //     break;
                default:
                    console.error(
                        `unknown CSS variable type "${cssVarDescriptions[k].type}"`
                    );
                    break;
            }
        }
    }

    return produceResult(cssVarDescriptions);
}

function produceResult<T extends { [K: string]: { value: any } }>(
    cssVars: T
): {
    [K in keyof typeof cssVars]: Dig<(typeof cssVars)[K], "value">;
} {
    return Object.fromEntries(
        Object.entries(cssVars).map(([key, value]) => [key, value.value])
    ) as unknown as any;
}