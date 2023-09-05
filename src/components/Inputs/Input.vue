<script setup>
import InputLayout from "./InputLayout.vue";
import InputProps from "./InputProps";

defineProps({
    ...InputProps,
});
</script>
<template>
    <InputLayout v-bind="$props">
        <input
            v-bind="$attrs"
            :name="name"
            :id="id"
            class="block w-full rounded-md shadow-sm dark:bg-zinc-900 sm:text-sm"
            :class="{
                'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-red-800':
                    error,
                'border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700':
                    !error,
            }"
            :aria-describedby="`${id}-${error ? 'error' : 'description'}`"
        />
    </InputLayout>
</template>
<script>
export default {
    inheritAttrs: false,
};
</script>
