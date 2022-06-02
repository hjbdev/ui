<script setup>
defineProps({
    as: {
        type: [String, Object, Function],
        default: "a",
    },
});
</script>
<template>
    <component :is="as" class="whitespace-nowrap font-medium">Details <span aria-hidden="true">&rarr;</span></component>
</template>
