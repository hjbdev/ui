<script setup>
import BaseButton from './BaseButton.vue';
</script>
<template>
    <BaseButton
        class="bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500 dark:focus:ring-offset-zinc-800"
    >
        <slot />
    </BaseButton>
</template>
