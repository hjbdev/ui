<script setup>
import { computed, useSlots } from 'vue';

const slots = computed(() => useSlots().default());
</script>
<template>
    <div class="flex gap-2 items-center">
        <template v-for="(slot, slotIndex) in slots">
            <component :is="slot" :class="{
                'dark:text-zinc-200 text-zinc-700': slotIndex === (slots.length - 1)
            }"></component>
            <div v-if="slotIndex < (slots.length - 1)" class="text-zinc-400 select-none">/</div>
        </template>
    </div>
</template>