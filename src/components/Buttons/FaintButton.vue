<script setup>
defineProps({
    size: {
        type: String,
        default: "base"
    }
})
</script>
<template>
    <button
        type="button"
        :class="{
            'px-2.5 py-1.5 text-xs': size === 'xs',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-sm': size === 'base',
            'px-4 py-2 text-base': size === 'lg',
            'px-6 py-3 text-base': size === 'xl',
        }"
        class="transition inline-flex items-center border border-gray-300 font-medium rounded-md shadow-sm text-gray-700 hover:bg-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
        <slot></slot>
    </button>
</template>
