<template>
    <div>
        <div
            class="fixed inset-0 z-50 flex max-w-full justify-center overflow-y-auto"
            :class="modals.all.length ? '' : 'pointer-events-none'"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <FadeTransition>
                <div
                    v-if="modals.all.length"
                    key="modalBackground"
                    class="fixed inset-0 bg-black/40"
                    aria-hidden="true"
                ></div>
            </FadeTransition>
            <div
                class="flex min-h-screen w-full max-w-xl justify-center items-end sm:items-center"
            >
                <FadeScaleTransition>
                    <div
                        v-for="(modal, modalIndex) in modals.all"
                        :key="`modal${modalIndex}`"
                        class="relative w-full rounded-lg bg-white p-4 shadow-xl transition-all dark:bg-zinc-900 dark:text-white sm:my-8 sm:p-6"
                    >
                        <div
                            class="absolute right-0 top-0 hidden pr-4 pt-4"
                        >
                            <button
                                type="button"
                                class="rounded-md text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                @click="modals.pop()"
                            >
                                <span class="sr-only">Close</span>
                                <!-- Heroicon name: outline/x -->
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <component
                            :is="modal.component"
                            :modal-index="modalIndex"
                            :data="modal.data"
                        ></component>
                    </div>
                </FadeScaleTransition>
            </div>
        </div>
    </div>
</template>
<script setup>
import modals from "../../support/Modals";
import FadeTransition from "../Transitions/FadeTransition.vue";
import FadeScaleTransition from "../Transitions/FadeScaleTransition.vue";
import { nextTick, ref, watch } from "vue";

const open = ref(false);

watch(
    () => modals.modals,
    (v) => {
        if (v.length) {
            document.body.classList.add("overflow-hidden");
            nextTick(() => {
                open.value = true;
            });
        } else {
            document.body.classList.remove("overflow-hidden");
            nextTick(() => {
                open.value = false;
            });
        }
    },
);
</script>
