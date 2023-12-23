import { Ref } from 'vue';

import { InjectionKey, inject, provide, ref } from 'vue';

const symbolDarkMode: InjectionKey<Ref<boolean>> = Symbol();

export function useDarkModeEnforce(isDarkModeActive: boolean) {
	const toggle = ref(isDarkModeActive);
	provide(symbolDarkMode, toggle);
	return toggle;
}

export function useDarkModeDetect() {
	return inject(symbolDarkMode) ?? ref(false);
}

export function bloat() {
	let a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
	a = 1;
}
