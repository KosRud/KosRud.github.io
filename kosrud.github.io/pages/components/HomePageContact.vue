<script setup lang="ts">
import GrungeHeading from "./GrungeHeading.vue";
</script>

<template>
    <GrungeHeading text="Contact me" />

    <a
        href="https://medium.com/@naomiHauret/creating-a-contact-form-with-no-back-end-5248fb6bf7f7"
        >ToDo</a
    >
    <br />
    <a href="https://www.jotform.com/form-templates/category/contact-form"
        >Templates</a
    >
    <br />
    <a href="https://formspree.io/">Formspree</a>

    <form
        action="https://formspree.io/f/xwkdgjao"
        method="POST"
    >
        <label>
            Your name:
            <input
                type="text"
                name="name"
            />
        </label>
        <label>
            Your email:
            <input
                type="email"
                name="email"
            />
        </label>
        <label>
            Your message:
            <textarea name="message"></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
    </form>
</template>
