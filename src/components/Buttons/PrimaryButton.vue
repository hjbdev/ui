<script setup>
import BaseButton from "./BaseButton.vue";
</script>
<template>
    <BaseButton
        class="bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-white focus:bg-zinc-700 dark:focus:bg-white active:bg-zinc-900 dark:active:bg-zinc-300 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 disabled:opacity-25"
    >
        <slot />
    </BaseButton>
</template>
