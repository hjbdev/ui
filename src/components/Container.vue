<script setup>
defineProps({
    narrow: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <template v-if="narrow">
            <div class="max-w-3xl mx-auto">
                <slot />
            </div>
        </template>
        <template v-else>
            <slot />
        </template>
    </div>
</template>
