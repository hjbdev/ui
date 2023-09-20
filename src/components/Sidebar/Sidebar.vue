<script setup>
import { useLocalStorage } from "@vueuse/core";
import ChevronRightIcon from "../Icons/ChevronRightIcon.vue";
import { provide } from "vue";

const sidebarMinimised = useLocalStorage('ui/sidebar', false);

provide('sidebarMinimised', sidebarMinimised);
</script>
<template>
    <nav
        class="min-h-screen h-full relative bg-white flex flex-col justify-between dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 transition-all duration-200 rounded-r-2xl z-10"
        :class="{
            '!w-24 !max-w-24 !min-w-24': sidebarMinimised,
            'w-64 max-w-64 min-w-64': !sidebarMinimised,
        }"
    >
        <button
            class="absolute top-1/2 -translate-y-1/2 left-full bg-white dark:bg-zinc-900 dark:text-white rounded-full -translate-x-1/2 flex items-center justify-center w-8 h-8 border dark:border-zinc-700 z-10"
            @click="sidebarMinimised = !sidebarMinimised"
        >
            <ChevronRightIcon class="w-5 h-5" :class="{
                'transform rotate-180': !sidebarMinimised,
            }" />
        </button>
        <!-- Primary Navigation Menu -->
        <div class="flex flex-col gap-6 py-6">
            <!-- Logo -->
            <slot />
        </div>

        <div class="flex flex-col gap-6 mb-6">
            <slot name="bottom" />
        </div>
    </nav>
</template>
