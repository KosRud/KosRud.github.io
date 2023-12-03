<script setup lang="ts">
import { useStore } from "./pinia/store";

const store = useStore();
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
        ></div>
    </Transition>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.NavFull {
    max-width: 400rem;
    .FrostedGlass();
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
