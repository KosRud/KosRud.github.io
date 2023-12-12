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
const triangleWidth = computed(() => {
    const ratio = perspectiveUnitless / (perspectiveUnitless + depth.value);
    const percent = 50 * (1 - ratio) * (props.tilt >= 0 ? 1 : -1);
    return `${percent}%`;
});
const transformOrigin = computed(() => (props.tilt >= 0 ? "top" : "bottom"));
const clipTop = computed(() => (props.tilt >= 0 ? "0%" : "100%"));
const clipBottom = computed(() => (props.tilt >= 0 ? "100%" : "0%"));
</script>

<template>
    <div>
        <div
            :class="$style.Trapezoid"
            :style="
                props.tilt >= 0
                    ? { marginTop: 'unset' }
                    : { marginBottom: 'unset' }
            "
        >
            <div :class="$style.Trapezoid_background"></div>
            <div
                :class="$style.Trapezoid_content"
                :style="
                    props.tilt >= 0 ? { bottom: 'unset' } : { top: 'unset' }
                "
            >
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
    margin-top: calc(v-bind(height) * v-bind(angleCos) - v-bind(height));

    perspective: v-bind(perspective);
    perspective-origin: center;
    transform-style: preserve-3d;

    position: relative;
}

.Trapezoid_background {
    box-shadow: @shadow-l;
    border: @border-width-s solid @color-border;

    transform: rotateX(calc(0deg - v-bind(angle)));
    transform-origin: v-bind(transformOrigin);

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
    bottom: @gap;
    height: calc(100% * v-bind(angleCos) - @gap*2);

    text-align: justify;

    p {
        margin-bottom: @gap;
    }

    overflow: hidden;
}

.Trapezoid_triangleLeft {
    height: 100%;
    width: v-bind(triangleWidth);
    float: left;
    shape-outside: polygon(
        0% 0%,
        v-bind(clipTop) 0%,
        v-bind(clipBottom) 100%,
        0% 100%
    );
    clip-path: polygon(
        0% 0%,
        v-bind(clipTop) 0%,
        v-bind(clipBottom) 100%,
        0% 100%
    );
    visibility: hidden;
}

.Trapezoid_triangleRight {
    height: 100%;
    width: v-bind(triangleWidth);
    float: right;
    shape-outside: polygon(
        100% 0%,
        calc(100% - v-bind(clipTop)) 0%,
        calc(100% - v-bind(clipBottom)) 100%,
        100% 100%
    );
    clip-path: polygon(
        100% 0%,
        calc(100% - v-bind(clipTop)) 0%,
        calc(100% - v-bind(clipBottom)) 100%,
        100% 100%
    );
    visibility: hidden;
}
</style>
