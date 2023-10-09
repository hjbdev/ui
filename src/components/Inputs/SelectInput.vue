<template>
    <InputLayout
        v-bind="
            Object.keys(InputProps).reduce((acc, key) => {
                acc[key] = $props[key];
                return acc;
            }, {})
        "
    >
        <Listbox
            :model-value="modelValue"
            :multiple="multiple"
            by="id"
            @update:model-value="$emit('update:modelValue', $event)"
        >
            <ListboxButton
                :class="{
                    'flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2.5 text-left shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600':
                        appearance === 'select',
                    'inline-flex items-center rounded-md border border-transparent border-zinc-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-zinc-700 transition duration-150 ease-in-out hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-800':
                        appearance === 'primary-button',
                }"
            >
                <div class="text-sm">
                    {{
                        Array.isArray(modelValue)
                            ? modelValue
                                  ?.map((option) => option.name)
                                  .join(", ")
                            : modelValue?.name || defaultText
                    }}
                </div>
                <ChevronDownIcon class="h-4 w-4" />
            </ListboxButton>
            <FadeScaleTransition>
                <ListboxOptions
                    class="overflow-y-auto max-h-64 min-w-64 origin-top absolute z-50 mt-3 rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    :class="{
                        'right-0': align === 'right',
                        'left-0': align === 'left',
                    }"
                >
                    <slot name="listbox-title" />
                    <ListboxOption
                        v-for="option in options"
                        v-slot="{ active, selected }"
                        :key="option.id"
                        :value="option"
                        as="template"
                    >
                        <li
                            class="flex items-center justify-between gap-2 px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
                            :class="{
                                'bg-zinc-50 dark:bg-zinc-900': selected,
                                'bg-zinc-100 dark:bg-zinc-700': active,
                            }"
                        >
                            {{ option.name }}
                            <CheckIcon
                                v-if="selected"
                                class="h-5 w-5"
                            ></CheckIcon>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </FadeScaleTransition>
        </Listbox>
    </InputLayout>
</template>

<script setup>
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/vue";
import CheckIcon from "../Icons/CheckIcon.vue";
import FadeScaleTransition from "../Transitions/FadeScaleTransition.vue";
import ChevronDownIcon from "../Icons/ChevronDownIcon.vue";
import InputProps from "./InputProps";
import InputLayout from "./InputLayout.vue";

defineProps({
    ...InputProps,
    options: Array,
    modelValue: [Object, Array],
    multiple: Boolean,
    appearance: {
        type: String,
        default: "select",
    },
    defaultText: String,
    align: {
        type: String,
        default: "left",
    },
});

defineEmits(["update:modelValue"]);
</script>
<script>
export default {
    inheritAttrs: false,
};
</script>
