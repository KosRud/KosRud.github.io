import { InjectionKey, provide } from "vue";

type Dig<T, K extends string | number | symbol> = T extends Record<K, infer U>
    ? U
    : never;

enum LessVarType {
    length,
    string,
}

type LessVar =
    | {
          value: number;
          type: LessVarType.length;
      }
    | {
          value: string;
          type: LessVarType.string;
      };

type LessVarDescriptions = { [key: string]: LessVar };

const lessVarDescriptions: LessVarDescriptions = {
    breakpointToc: {
        value: 800,
        type: LessVarType.length,
    },
};

type LessVars = {
    [K in keyof typeof lessVarDescriptions]: Dig<
        (typeof lessVarDescriptions)[K],
        "value"
    >;
};

export const symbolLessVars: InjectionKey<LessVars> = Symbol();

export function useLessVarsProvider() {
    const vars = getLessVars();
    provide(symbolLessVars, vars);
    return vars;
}

function getLessVars() {
    const html = document.querySelector("html");

    if (!html) {
        return produceResult(lessVarDescriptions);
    }

    const style = window.getComputedStyle(html);

    for (const key in lessVarDescriptions) {
        const varName = "--".concat(
            key.replaceAll(/[A-Z]/g, (match: string) => {
                return "-".concat(match.toLocaleLowerCase());
            })
        );

        const varValue = style.getPropertyValue(varName);

        if (varValue === "") {
            console.error(`Missing css variable "${varName}"`);
        } else {
            const k = key as keyof typeof lessVarDescriptions;
            switch (lessVarDescriptions[k].type) {
                case LessVarType.length:
                    lessVarDescriptions[k].value = parseInt(varValue);
                    break;
                case LessVarType.string:
                    lessVarDescriptions[k].value = varValue;
                    break;
                default:
                    console.error(
                        `unknown LESS variable type "${lessVarDescriptions[k].type}"`
                    );
                    break;
            }
        }
    }

    return produceResult(lessVarDescriptions);
}

function produceResult<T extends { [K: string]: { value: any } }>(
    lessVars: T
): {
    [K in keyof typeof lessVars]: Dig<(typeof lessVars)[K], "value">;
} {
    return Object.fromEntries(
        Object.entries(lessVars).map(([key, value]) => [key, value.value])
    ) as unknown as any;
}
