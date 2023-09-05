<script setup>
defineProps({
    narrow: Boolean,
});
</script>
<template>
    <div
        class="mx-auto px-4 sm:px-6 lg:px-8"
        :class="{
            'max-w-7xl': !narrow,
            'max-w-4xl': narrow,
        }">
        <slot />
    </div>
</template>
