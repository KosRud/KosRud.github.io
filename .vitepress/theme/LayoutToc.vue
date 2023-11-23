<script lang="ts" setup>
import { computed, ComponentPublicInstance } from "vue";

const props = defineProps<{ pageContent: ComponentPublicInstance | null }>();

const tocContent = computed(() => {
    const content: HTMLElement = props.pageContent?.$el;

    if (!content) {
        return "";
    }
    return Array.from(content.querySelectorAll("h1, h2, h3, h4"))
        .map((element) => element.textContent)
        .reduce((a, b) => `${a} <br> ${b}`);
});
</script>

<template>
    <div :class="$style.Toc">
        <h2 :class="$style.Toc_title">On this page</h2>
        <nav :class="$style.Toc_content">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mattis tortor metus, non mattis odio auctor ac. Quisque
            ac ipsum mi. Proin luctus vulputate sem vel elementum. Suspendisse a
            accumsan diam. Aenean vitae ante et ligula sollicitudin tempor sed
            vitae risus. Integer dignissim nec velit id facilisis. Proin justo
            lectus, mollis in semper ac, aliquet eget lectus. In hac habitasse
            platea dictumst. Ut eget convallis dui, vitae tempus ex. Phasellus
            consequat lorem sit amet nisi fermentum dapibus. Quisque aliquam dui
            ut mauris rhoncus, eget pellentesque libero fringilla. Morbi
            ultrices, enim at porttitor posuere, ligula tortor dapibus tortor,
            vitae sodales tortor dolor vel nisi. Sed vel ultrices nulla. Donec
            ut tincidunt lorem. Aenean facilisis ac lacus et finibus. Mauris
            pulvinar egestas ultricies. Morbi placerat ut sapien vel aliquam.
            Proin quis rutrum lacus. Donec tempus hendrerit massa, nec ultrices
            neque euismod non. Pellentesque facilisis lacus eget urna tempor,
            vel interdum augue malesuada. Integer blandit ac purus sed varius.
            Etiam et metus quis quam consectetur pellentesque. Donec tincidunt
            enim eget mattis facilisis. Aenean ut eleifend nisi. Fusce lobortis
            lorem erat, ac dapibus lacus vulputate vel. Pellentesque vehicula
            dapibus ligula, eget dapibus felis rutrum ac. In tincidunt tortor a
            neque gravida, vel pulvinar arcu fringilla. Sed non quam vel dui
            blandit posuere quis non ligula. Vivamus elementum, lacus ut
            fermentum blandit, ex turpis volutpat massa, sit amet scelerisque
            elit enim ac velit. Quisque eget tempor purus. Proin ornare
            porttitor eros id malesuada. Nunc placerat tellus nisl, vel suscipit
            sem pretium a. Phasellus tincidunt, dui in tincidunt malesuada, nisi
            turpis mollis enim, et laoreet diam sem id ligula. Sed tincidunt
            varius libero, vitae dictum dui porta a. Sed eu quam et nisl
            interdum rutrum vel id felis. Morbi facilisis leo orci, id rutrum
            metus volutpat ut. Aenean ut fringilla velit, id efficitur enim.
            Fusce tincidunt suscipit magna id vestibulum. Cras eleifend velit eu
            tincidunt lacinia. Sed ac nunc sit amet metus volutpat porttitor.
            Nulla at enim egestas, aliquet lorem vitae, pellentesque ante. Sed
            euismod vel ligula vitae egestas. Vivamus malesuada tincidunt
            pulvinar. Fusce consectetur auctor viverra. Nulla facilisi. Vivamus
            eu tortor eros. Etiam eu porttitor libero, blandit maximus eros. Ut
            consectetur augue orci, placerat pretium mi maximus vel. In vel
            neque velit. Integer ut urna eu arcu vehicula ultrices et a ante.
            Aenean vel justo est. Fusce a porttitor dui, in volutpat odio. Nam
            mi ligula, sollicitudin ut mi nec, interdum sollicitudin sem. Ut at
            dolor id enim convallis porttitor eget a sapien. Praesent vulputate
            sem a rutrum tincidunt. Nam cursus dapibus ex at blandit. Curabitur
            eu tincidunt mauris. Nulla facilisi. Nulla non mollis nunc. Vivamus
            nec dolor felis. Etiam et pellentesque sapien, at sagittis odio. -->
            <div v-html="tocContent"></div>
        </nav>
    </div>
</template>

<style lang="less" module>
@import "./style/variables/index.less";

.PageContent {
    background-color: red;
}

.Toc {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: @gap;
}

.Toc_title {
    flex-grow: 0;
}

.Toc_content {
    flex-grow: 1;
    overflow-y: auto;
}
</style>
