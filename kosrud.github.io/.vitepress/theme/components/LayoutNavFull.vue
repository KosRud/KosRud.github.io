<script setup lang="ts">
import YouAreHere from "./YouAreHere.vue";
import LayoutNavSide from "./LayoutNavSide.vue";

import type { Ref } from "vue";

import { useStore } from "./pinia/store";
import { watchEffect, ref, onMounted } from "vue";

const store = useStore();

const elMenu: Ref<Element | null> = ref(null);

onMounted(() => {
    function onClick(ev: MouseEvent) {
        if (!elMenu.value) {
            return;
        }

        if (
            !elMenu.value.contains(ev.target as Element) &&
            elMenu.value != ev.target
        ) {
            store.isNavFullOpen = false;
        }
    }

    watchEffect(() => {
        if (store.isNavFullOpen) {
            window.requestAnimationFrame(() =>
                window.addEventListener("click", onClick)
            );
        } else {
            window.removeEventListener("click", onClick);
        }
    });
});
</script>

<template>
    <Transition
        :enter-from-class="$style.NavFull___enterFrom"
        :enter-to-class="$style.NavFull___enterTo"
        :enter-active-class="$style.NavFull___enterActive"
        :leave-from-class="$style.NavFull___leaveFrom"
        :leave-to-class="$style.NavFull___leaveTo"
        :leave-active-class="$style.NavFull___leaveActive"
    >
        <div
            :class="[$style.NavFull]"
            v-if="store.isNavFullOpen"
            :ref="(element) => {elMenu = element as Element;}"
        >
            <YouAreHere />
            <br />
            <a href="#">On this page (collapsed)</a>
            <LayoutNavSide top-level />
        </div>
    </Transition>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.NavFull {
    max-width: 400rem;

    padding: @gap*2;
    // color: @color-white;

    font-family: @font-ui;

    // .FrostedGlass();
    // .DarkMode();

    background-color: @color-background;

    border-left: @border-width-s solid @color-border;
}

/*
	Transitions
\*----------------------------------*/

.NavFull___enterFrom {
    transform: translateX(100%);
}

.NavFull___enterTo {
    transform: none;
}

.NavFull___enterActive {
    transition: transform @duration-s ease-in;
}

.NavFull___leaveFrom {
    transform: none;
}

.NavFull___leaveTo {
    transform: translateX(100%);
}

.NavFull___leaveActive {
    transition: transform @duration ease-out;
}

/*
	UI shadows
\*----------------------------------*/

.NavFull {
    box-shadow: @shadow;
}
</style>
