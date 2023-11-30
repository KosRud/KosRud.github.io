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

export function getLessVars() {
    const html = document.querySelector("html");

    const lessVars: { [key: string]: LessVar } = {
        breakpointToc: {
            value: 800,
            type: LessVarType.length,
        },
    };

    if (!html) {
        return produceResult(lessVars);
    }

    const style = window.getComputedStyle(html);

    for (const key in lessVars) {
        const varName = "--".concat(
            key.replaceAll(/[A-Z]/g, (match: string) => {
                return "-".concat(match.toLocaleLowerCase());
            })
        );

        const varValue = style.getPropertyValue(varName);

        if (varValue === "") {
            console.error(`Missing css variable "${varName}"`);
        } else {
            const k = key as keyof typeof lessVars;
            switch (lessVars[k].type) {
                case LessVarType.length:
                    lessVars[k].value = parseInt(varValue);
                    break;
                case LessVarType.string:
                    lessVars[k].value = varValue;
                    break;
                default:
                    console.error(
                        `unknown LESS variable type "${lessVars[k].type}"`
                    );
                    break;
            }
        }
    }

    return produceResult(lessVars);
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
