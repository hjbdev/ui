<script setup>
defineProps({
    as: {
        type: [String, Object],
        default: "div",
    },
});
</script>
<template>
    <component
        :is="as"
        class="rounded-full px-1.5 transition hover:bg-zinc-900/10 hover:dark:bg-white/10 cursor-pointer text-sm text-zinc-400"
    >
        <slot />
    </component>
</template>
