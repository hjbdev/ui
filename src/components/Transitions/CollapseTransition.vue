<script setup>
import { animate } from "motion";

function onEnter(el, done) {
    const { height } = el.getBoundingClientRect();
    el.style.height = `0px`;
    animate(el, { height: `${height}px` }, { duration: 0.3 }).finished.then(
        done,
    );
}

function onLeave(el, done) {
    animate(el, { height: `0px` }, { duration: 0.2 }).finished.then(done);
}
</script>
<template>
    <Transition
        enter-active-class="overflow-hidden transition-all duration-300"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="overflow-hidden transition-all duration-200"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
        @enter="onEnter"
        @leave="onLeave"
    >
        <slot />
    </Transition>
</template>
