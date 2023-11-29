<template>
    <span>
        <span :class="$style.Visible">
            <slot />
        </span>
        <span :class="$style.Dummy">
            <slot />
        </span>
    </span>
</template>

<style module lang="less">
.Visible {
    position: absolute;
}

.Dummy {
    visibility: hidden;
    font-weight: normal;
}
</style>
