<template>
    <component
        :is="as"
        class="inline-flex items-center border border-transparent rounded-md font-semibold transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class="{
            'p-1.5': size === 'uniform',
            'px-1 py-0.5 text-xs': size === 'tiny',
            'px-2 py-1 text-xs': size === 'small',
            'px-3.5 py-1.5 text-sm': size === 'medium',
            'px-3.5 py-1.5 text-base': size === 'large',
        }"
    >
        <slot />
    </component>
</template>
<script setup>
defineProps({
    size: {
        type: String,
        default: "medium",
    },
    as: {
        type: [String, Object],
        default: "button",
    },
});
</script>
