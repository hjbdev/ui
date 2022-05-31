<script setup>
defineProps({
    id: {
        type: String,
        required: false,
        default: "",
    },
    name: {
        type: String,
        required: false,
        default: "",
    },
    label: {
        type: String,
        required: false,
        default: null,
    },
    helpText: {
        type: String,
        required: false,
        default: null,
    },
    error: {
        type: String,
        required: false,
        default: null,
    },
});
</script>
<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div class="mt-1 relative">
            <input
                v-bind="$attrs"
                :name="name"
                :id="id"
                class="shadow-sm block w-full sm:text-sm rounded-md"
                :class="{
                    'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500':
                        error,
                    'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500': !error,
                }"
                :aria-describedby="`${id}-${error ? 'error' : 'description'}`"
            />
            <div v-if="error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
        <p v-if="helpText && !error" class="mt-2 text-sm text-gray-500" :id="`${id}-description`">{{ helpText }}</p>
        <p v-else-if="error" class="mt-2 text-sm text-red-600" :id="`${id}-error`">{{ error }}</p>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
};
</script>
