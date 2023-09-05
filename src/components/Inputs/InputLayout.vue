<script setup>
import InputProps from "./InputProps";

defineProps({
    ...InputProps,
});
</script>
<template>
    <div>
        <label
            v-if="label"
            :for="id"
            class="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >{{ label }}</label
        >
        <div class="relative mt-1">
            <slot />
            <div
                v-if="error"
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
            >
                <!-- Heroicon name: solid/exclamation-circle -->
                <svg
                    class="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
        <p
            v-if="helpText && !error"
            class="mt-1 text-sm text-zinc-600 dark:text-zinc-500"
            :id="`${id}-description`"
        >
            {{ helpText }}
        </p>
        <p
            v-else-if="error"
            class="mt-1 text-sm text-red-600"
            :id="`${id}-error`"
        >
            {{ error }}
        </p>
    </div>
</template>
