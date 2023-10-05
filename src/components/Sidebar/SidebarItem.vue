<script setup>
import { computed, inject } from "vue";

const minimised = inject('sidebarMinimised');

const props = defineProps({
    as: {
        type: [Object, String, Function],
        default: "a",
    },
    active: {
        type: Boolean,
    },
    icon: {
        type: Object,
    },
});

const classes = computed(() => {
    const c = [
        "inline-flex",
        "items-center",
        "py-3",
        "text-sm",
        "font-medium",
        "leading-5",
        "transition-all",
        "duration-150",
        "relative",
        "ease-in-out",
        "rounded-full",
        "whitespace-nowrap",
        "group",
    ];

    if (!minimised.value) {
        c.push("px-6");
    } else {
        c.push("justify-center");
    }

    if (props.active) {
        c.push(
            "bg-purple-400",
            "dark:bg-purple-900",
            "text-sm",
            "font-medium",
            "text-zinc-900",
            "dark:text-zinc-100",
            "focus:outline-none",
            "focus:bg-purple-700"
        );
    } else {
        c.push(
            // text
            "text-zinc-500",
            "dark:text-zinc-400",

            // hover
            "hover:text-zinc-700",
            "dark:hover:text-zinc-300",
            "hover:bg-zinc-300",
            "dark:hover:bg-zinc-700",

            // focus
            "focus:outline-none",
            "focus:text-zinc-700",
            "dark:focus:text-zinc-300"
        );
    }

    return c;
});
</script>

<template>
    <component :is="as" :class="classes">
        <component
            v-if="icon"
            :is="icon"
            class="w-6 h-6 transition-all"
            :class="{
                ' mr-4': !minimised,
            }"></component>
        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100"
            leave-to-class="transform opacity-0">
            <slot v-if="!minimised" />
        </transition>
        <div
            v-if="minimised"
            class="absolute left-full opacity-0 transition pointer-events-none group-hover:opacity-100 bg-white dark:bg-zinc-800 shadow-lg py-3 px-6 rounded-full ml-3">
            <slot />
        </div>
    </component>
</template>
