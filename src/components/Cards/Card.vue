<script setup>
defineProps({
    flush: Boolean,
});
</script>
<template>
    <div
        class="bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-zinc-900 dark:text-zinc-100"
        :class="{
            'p-6': !flush,
        }">
        <div v-if="$slots.header || $slots.extra" class="flex justify-between items-center gap-6 mb-6">
            <div>
                <slot name="header" />
            </div>
            <div v-if="$slots.extra">
                <slot name="extra" />
            </div>
        </div>
        <slot />
    </div>
</template>
