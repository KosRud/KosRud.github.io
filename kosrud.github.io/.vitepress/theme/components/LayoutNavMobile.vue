<script setup lang="ts">
import type { Ref } from "vue";

import { watchEffect, ref, onMounted } from "vue";

const props = defineProps<{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}>();

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
            props.setIsOpen(false);
        }
    }

    watchEffect(() => {
        if (props.isOpen) {
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
        :enter-from-class="$style.NavMobile___enterFrom"
        :enter-to-class="$style.NavMobile___enterTo"
        :enter-active-class="$style.NavMobile___enterActive"
        :leave-from-class="$style.NavMobile___leaveFrom"
        :leave-to-class="$style.NavMobile___leaveTo"
        :leave-active-class="$style.NavMobile___leaveActive"
    >
        <div
            :class="[$style.NavMobile]"
            v-if="props.isOpen"
            :ref="(element) => {elMenu = element as Element;}"
        >
            <slot />
        </div>
    </Transition>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.NavMobile {
    max-width: 400rem;

    padding: @gap*2;

    background-color: @color-background;

    border-left: @border-width-s solid @color-border;

    overflow: auto;
}

/*
	Transitions
\*----------------------------------*/

.NavMobile___enterFrom {
    transform: translateX(100%);
}

.NavMobile___enterTo {
    transform: none;
}

.NavMobile___enterActive {
    transition: transform @duration-s ease-in;
}

.NavMobile___leaveFrom {
    transform: none;
}

.NavMobile___leaveTo {
    transform: translateX(100%);
}

.NavMobile___leaveActive {
    transition: transform @duration ease-out;
}

/*
	UI shadows
\*----------------------------------*/

.NavMobile {
    box-shadow: @shadow;
}
</style>
