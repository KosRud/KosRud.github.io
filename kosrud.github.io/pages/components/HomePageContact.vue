<script setup lang="ts">
import handshake from "./assets/icons/handshake/icon.svg";

import GrungeHeading from "./GrungeHeading.vue";
</script>

<template>
    <div :class="$style.Contact">
        <GrungeHeading text="Contact me" />

        <!-- <a
        href="https://medium.com/@naomiHauret/creating-a-contact-form-with-no-back-end-5248fb6bf7f7"
        >ToDo</a
    >
    <br />
    <a href="https://www.jotform.com/form-templates/category/contact-form"
        >Templates</a
    >
    <br />
    <a href="https://formspree.io/">Formspree</a> -->

        <div :class="$style.StatusBox">
            <strong
                v-if="false"
                :class="$style.StatusBox_title"
                >Status:</strong
            >
            <img
                :class="$style.StatusBox_icon"
                :src="handshake"
            />
            <span :class="$style.StatusBox_text"
                >I'm available for contract work</span
            >
        </div>

        <form
            action="https://formspree.io/f/xwkdgjao"
            method="POST"
            :class="$style.ContactForm"
        >
            <label>
                <span>Your name:</span>
                <input
                    required
                    type="text"
                    name="name"
                    autocomplete="name"
                />
            </label>
            <label>
                <span>Your email:</span>
                <input
                    required
                    type="email"
                    name="email"
                    autocomplete="email"
                />
            </label>
            <label>
                <span>Your message:</span>
                <textarea
                    required
                    name="message"
                ></textarea>
            </label>

            <button
                colspan="2"
                type="submit"
            >
                Send message
            </button>
        </form>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Contact {
    width: min(100%, 800rem);
    margin-left: auto;
    margin-right: auto;
}

.StatusBox {
    margin-bottom: @gap*4;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    align-items: start;
}

.StatusBox_text {
    font-size: @size-l;
}

.StatusBox_icon {
    height: 2.5em;
    display: inline-block;
    vertical-align: middle;
    margin-right: @gap;
}

.ContactForm {
    margin-left: auto;
    margin-right: auto;
    align-items: stretch;
    width: min(100%, 600rem);
    gap: @gap;

    label {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: @gap*0.25;
    }

    display: flex;
    flex-direction: column;

    input {
        max-width: 200rem;
    }

    textarea {
        height: 200rem;
    }

    button {
        .button();

        font-size: @size-l;

        margin-top: @gap*1.5;
        margin-left: auto;
        margin-right: auto;
        min-width: min(200rem, 100%);
    }
}
</style>
