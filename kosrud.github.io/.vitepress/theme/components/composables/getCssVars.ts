import { InjectionKey, provide } from "vue";

type Dig<T, K extends string | number | symbol> = T extends Record<K, infer U>
    ? U
    : never;

enum CssVarType {
    length,
    string,
}

type CssVarDescription =
    | {
          value: number;
          type: CssVarType.length;
      }
    | {
          value: string;
          type: CssVarType.string;
      };

type CssVarDescriptions = { [key: string]: CssVarDescription };

const cssVarDescriptions: CssVarDescriptions = {
    breakpointToc: {
        value: 800,
        type: CssVarType.length,
    },
};

type cssVars = {
    [K in keyof CssVarDescriptions]: Dig<CssVarDescriptions[K], "value">;
};

export const symbolCssVars: InjectionKey<cssVars> = Symbol();

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
        const varName = "--".concat(
            key.replaceAll(/[A-Z]/g, (match: string) => {
                return "-".concat(match.toLocaleLowerCase());
            })
        );

        const varValue = style.getPropertyValue(varName);

        if (varValue === "") {
            console.error(`Missing css variable "${varName}"`);
        } else {
            const k = key as keyof CssVarDescriptions;
            switch (cssVarDescriptions[k].type) {
                case CssVarType.length:
                    cssVarDescriptions[k].value = parseInt(varValue);
                    break;
                case CssVarType.string:
                    cssVarDescriptions[k].value = varValue;
                    break;
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
