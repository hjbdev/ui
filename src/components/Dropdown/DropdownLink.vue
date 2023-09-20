<script setup>
defineProps({
    as: {
        type: [Object, String],
        default: "a",
    },
    href: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <component
        :is="as"
        :href="href"
        class="block w-full px-4 py-2 text-left text-sm leading-5 text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    >
        <slot />
    </component>
</template>
