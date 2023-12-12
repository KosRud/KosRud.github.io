<template>
    <div :class="$style.TrapezoidWrapper">
        <div :class="$style.Trapezoid">
            <div :class="$style.Trapezoid_content">
                <div :class="$style.Trapezoid_triangleLeft"></div>
                <div :class="$style.Trapezoid_triangleRight"></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vitae massa quis elit aliquam gravida at sed mauris. Ut
                ultricies semper ultrices. Praesent eget tincidunt arcu. Mauris
                et tortor nisl. Morbi ullamcorper enim in molestie blandit.
                Morbi rhoncus augue ut blandit auctor. In hac habitasse platea
                dictumst. Mauris malesuada vulputate vestibulum. Sed ultrices
                ante ut enim condimentum aliquam. Etiam lobortis sem quis felis
                venenatis auctor. Donec sed scelerisque est. Praesent vel elit
                pretium, pellentesque nisl at, suscipit metus. Vestibulum et
                turpis egestas, viverra neque quis, fermentum arcu. Integer eu
                sem tortor. Maecenas sit amet fermentum felis. Sed dignissim
                auctor risus in elementum.

                <slot />
            </div>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

@Trapezoid-perspective: 2000rem;
@Trapezoid-height: 300px;
@Trapezoid-angle: 40deg;
@Trapezoid-projected-height: @Trapezoid-height * sin(@Trapezoid-angle);

.TrapezoidWrapper,
.Trapezoid {
    perspective: @Trapezoid-perspective;
    perspective-origin: center;
    transform-style: preserve-3d;
}

.Trapezoid {
    height: @Trapezoid-height;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;

    perspective: none;

    box-shadow: @shadow;
    border: @border-width-s solid @color-border;

    transform: rotateX(-@Trapezoid-angle);
    transform-origin: center;
}

@perspective-compensation: unit(
    (
        (@Trapezoid-perspective + @Trapezoid-projected-height * 0.5) /
            @Trapezoid-perspective
    )
);

.Trapezoid_content {
    height: calc(100% * cos(@Trapezoid-angle) / @perspective-compensation);
    transform: rotateX(@Trapezoid-angle);
    transform-origin: top;
    text-align: justify;
    padding: @gap;
}

.Trapezoid_triangleLeft {
    height: 100%;
    width: calc(
        50% - 50% *
            unit(
                (
                    (@Trapezoid-perspective - @Trapezoid-projected-height*0.5) /
                        (
                            @Trapezoid-perspective +
                                @Trapezoid-projected-height*0.5
                        )
                )
            )
    );
    background-color: red;
    float: left;
    shape-outside: polygon(0% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
    visibility: hidden;
}

.Trapezoid_triangleRight {
    height: 100%;
    width: calc(
        50% - 50% *
            unit(
                (
                    (@Trapezoid-perspective - @Trapezoid-projected-height*0.5) /
                        (
                            @Trapezoid-perspective +
                                @Trapezoid-projected-height*0.5
                        )
                )
            )
    );
    float: right;
    shape-outside: polygon(100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
    visibility: hidden;
}
</style>
