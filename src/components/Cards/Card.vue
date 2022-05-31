<script setup>
defineProps({
    flush: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div v-if="$slots.header" class="px-4 py-5 sm:px-6">
            <slot name="header"></slot>
        </div>
        <div :class="{ 'px-4 py-5 sm:p-6': !flush }">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="px-4 py-4 sm:px-6">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
