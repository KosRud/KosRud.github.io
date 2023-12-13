<script setup lang="ts">
import { Ref, computed, ref } from "vue";
import { useResizeObserver } from "../../.vitepress/theme/components/composables/resizeObserver";
import { pxToRem } from "../../.vitepress/theme/components/composables/unitConverter";

const props = defineProps<{ title: string; images?: string[] }>();
const alt = computed(() => `screenshot of project "${props.title}""`);

const thresholdWidthRem = 550;

const container: Ref<Element | null> = ref(null);
const compact = ref(false);
useResizeObserver(
    () => {
        if (!container.value) {
            console.error("project highlight container ref not set");
            return;
        }

        const width = pxToRem(container.value.clientWidth);
        compact.value = width < thresholdWidthRem;
    },
    () => container.value,
    true
);
</script>

<template>
    <article
        :class="[$style.Project, compact ? $style.Project___compact : '']"
        :ref="(element) => {container = element as Element}"
    >
        <div :class="$style.Project_descriptionContainer">
            <h3 :class="$style.Project_title">{{ props.title }}</h3>
            <div :class="$style.Project_description">
                <slot />
            </div>
        </div>
        <div
            v-if="props.images"
            :class="$style.Project_images"
        >
            <img
                :src="image"
                v-for="image in props.images"
                :alt="alt"
            />
        </div>
    </article>
</template>

<style lang="less" module>
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Project {
    min-height: 200rem;

    display: flex;
    flex-direction: row;
    justify-items: stretch;
    align-items: stretch;

    border: @border-width-s solid @color-border;
}

.Project_descriptionContainer {
    flex: 1 1 200rem;

    // background-color: #a003;
}

.Project_images {
    flex: 0 0 250rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: @gap*0.5;

    > * {
        flex: 0 0 100%;
    }
}

.Project_title {
    @Project_title-padding: @gap*0.5;
    @Project_title-clip: @gap;

    min-width: min(220rem, 100%);
    width: fit-content;

    padding: @Project_title-padding;
    padding-right: @Project_title-padding + @Project_title-clip;
    background-color: @color-background-dark;

    text-align: left;
    color: @color-white;
    clip-path: polygon(
        0% 0%,
        100% 0%,
        calc(100% - @Project_title-clip) 100%,
        0% 100%
    );

    margin-bottom: @gap;
}

.Project_description {
    margin: @gap;
}

/*
	Responsive
\*----------------------------------*/

.Project___compact {
    flex-wrap: wrap;
    justify-content: stretch;

    .Project_descriptionContainer {
        flex: 1 1 100%;
    }

    .Project_images {
        flex: 1 1 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > * {
            flex: 0 1 250rem;
        }

        margin-bottom: @gap;
    }
}
</style>
