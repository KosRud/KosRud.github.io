<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ tilt: number; height: number }>();

const perspectiveUnitless = 2000;

const perspective = `${perspectiveUnitless}rem`;
const angle = computed(() => `${props.tilt}deg`);
const angleSin = computed(() => Math.sin((props.tilt * Math.PI) / 180));
const angleCos = computed(() => Math.cos((props.tilt * Math.PI) / 180));
const depth = computed(() => props.height * angleSin.value);
const height = computed(() => `${props.height / angleCos.value}rem`);
const triangleWidth = computed(
    () =>
        `${
            (1 - perspectiveUnitless / (perspectiveUnitless + depth.value)) * 50
        }%`
);
</script>

<template>
    <div>
        <div :class="$style.Trapezoid">
            <div :class="$style.Trapezoid_background"></div>
            <div :class="$style.Trapezoid_content">
                <div :class="$style.Trapezoid_triangleLeft"></div>
                <div :class="$style.Trapezoid_triangleRight"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vitae massa quis elit aliquam gravida at sed mauris.
                    Ut ultricies semper ultrices. Praesent eget tincidunt arcu.
                    Mauris et tortor nisl. Morbi ullamcorper enim in molestie
                    blandit. Morbi rhoncus augue ut blandit auctor.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vitae massa quis elit aliquam gravida at sed mauris.
                    Ut ultricies semper ultrices. Praesent eget tincidunt arcu.
                    Mauris et tortor nisl. Morbi ullamcorper enim in molestie
                    blandit. Morbi rhoncus augue ut blandit auctor.
                </p>
                <slot />
            </div>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Trapezoid {
    height: v-bind(height);

    margin-bottom: calc(v-bind(height) * v-bind(angleCos) - v-bind(height));

    perspective: v-bind(perspective);
    perspective-origin: center;
    transform-style: preserve-3d;

    position: relative;
}

.Trapezoid_background {
    box-shadow: @shadow;
    border: @border-width-s solid @color-border;

    transform: rotateX(calc(0deg - v-bind(angle)));
    transform-origin: top;

    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
}

.Trapezoid_content {
    position: absolute;
    top: @gap;
    left: @gap;
    right: @gap;
    height: calc(100% * v-bind(angleCos) - @gap*2);

    text-align: justify;

    p {
        margin-bottom: @gap;
    }

    overflow: hidden;

    // background-color: green;
    // opacity: 50%;
}

.Trapezoid_triangleLeft {
    height: 100%;
    width: v-bind(triangleWidth);
    float: left;
    shape-outside: polygon(0% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
    // background-color: red;
    visibility: hidden;
}

.Trapezoid_triangleRight {
    height: 100%;
    width: v-bind(triangleWidth);
    float: right;
    shape-outside: polygon(100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
    // background-color: red;
    visibility: hidden;
}
</style>
