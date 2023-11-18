<script setup lang="ts"></script>

<template>
    <h3 :class="$style.Project_title">
        <div :style="$style.Project_titleText">ProTeGe v1</div>
        <section :class="$style.Project_devIcons">
            <img
                src="/assets/icons/dev/cpp/icon.svg"
                alt="c++"
                title="c++"
                :class="$style.DevIcon"
            />
            <img
                src="/assets/icons/dev/wxWidgets/icon.svg"
                alt="wxWidgets"
                title="wxWidgets"
                :class="$style.DevIcon"
            />
        </section>
    </h3>
    <p>Procedural texture generator (CPU, multi-threaded).</p>

    <h3 :class="$style.Project_title">
        <div :style="$style.Project_titleText">ProTeGe v2</div>
        <section :class="$style.Project_devIcons">
            <img
                src="/assets/icons/dev/unity/icon.svg"
                alt="unity"
                title="unity"
                :class="$style.DevIcon"
            />
            <img
                src="/assets/icons/dev/csharp/icon.svg"
                alt="csharp"
                title="csharp"
                :class="$style.DevIcon"
            /><img
                src="/assets/icons/dev/hlsl/icon.svg"
                alt="csharp"
                title="csharp"
                :class="$style.DevIcon"
            />
        </section>
    </h3>
    <p>
        Procedural texture generator with graph-based UI and real-time preview
        (GPU).<br />
    </p>

    <h3 :class="$style.Project_title">
        <div :style="$style.Project_titleText">DQ Skinning for Unity</div>
        <section :class="$style.Project_devIcons">
            <img
                src="/assets/icons/dev/unity/icon.svg"
                alt="unity"
                title="unity"
                :class="$style.DevIcon"
            />
            <img
                src="/assets/icons/dev/csharp/icon.svg"
                alt="csharp"
                title="csharp"
                :class="$style.DevIcon"
            /><img
                src="/assets/icons/dev/hlsl/icon.svg"
                alt="csharp"
                title="csharp"
                :class="$style.DevIcon"
            />
        </section>
    </h3>
    <p>
        Implementation of GPU dual quaternion skinning for Unity with a novel
        bulging compensation algorithm and blend shape support.<br />
    </p>

    <h3>dice-pool-calc</h3>
    <p>
        A library for efficitly calculating probabilities of arbitrary dice
        pools and dice rolling mechanics. Enumerates all possible outcomes and
        provides an exact result.
    </p>

    <h3>Material clustering benchmark</h3>
    <p>...</p>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.Project_title {
    display: flex;
    gap: @gap*2;
    align-items: center;
    flex-wrap: wrap;
}

.Project_devIcons {
    display: flex;
    gap: @gap*0.5;
}

.DevIcon {
    width: @size*2;
    aspect-ratio: 1;
    vertical-align: bottom;
    background-color: @color-gray-light;
    border-radius: @inf;

    box-shadow: -4px -4px 4px 0px inset #0002, 4px 4px 4px 0px inset #fff3;
}
</style>
