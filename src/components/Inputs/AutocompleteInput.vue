<template>
    <InputLayout
        v-bind="
            Object.keys(InputProps).reduce((acc, key) => {
                acc[key] = $props[key];
                return acc;
            }, {})
        "
    >
        <Combobox
            :model-value="modelValue"
            :multiple="multiple"
            by="id"
            @update:model-value="$emit('update:modelValue', $event)"
        >
            <ComboboxInput
                class="flex w-full items-center justify-between gap-3 rounded-md border border-zinc-300 px-3.5 py-2 text-left text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                @change="emit('update:query', $event.target.value)"
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
            </ComboboxInput>
            <FadeScaleTransition>
                <ComboboxOptions
                    class="min-w-64 absolute z-50 mt-3 origin-top rounded-md border bg-white py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    :class="{
                        'right-0': align === 'right',
                        'left-0': align === 'left',
                    }"
                >
                    <slot name="listbox-title" />
                    <ComboboxOption
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
                    </ComboboxOption>
                </ComboboxOptions>
            </FadeScaleTransition>
        </Combobox>
    </InputLayout>
</template>

<script setup>
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
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
    query: {
        type: String,
        default: "",
    },
});

defineEmits(["update:modelValue", "update:query"]);
</script>
<script>
export default {
    inheritAttrs: false,
};
</script>
