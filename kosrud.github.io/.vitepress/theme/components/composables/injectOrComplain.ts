import type { InjectionKey } from "vue";

import { inject } from "vue";

export function injectOrComplain<T>(
    key: InjectionKey<T>,
    name: string,
    canBeNull: boolean = false
) {
    const value = inject(key);

    if (!value) {
        console.error(`${name} not provided`);
    }
}
