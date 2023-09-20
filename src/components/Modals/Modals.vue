<template>
    <div>
        <div
            class="fixed inset-0 z-50 flex max-w-full justify-center overflow-y-auto"
            :class="$modals.all.length ? '' : 'pointer-events-none'"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
            >
                <Transition
                    enter-active-class="duration-300 ease-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="duration-200 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div
                        v-if="$modals.all.length"
                        key="modalBackground"
                        class="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity"
                        aria-hidden="true"
                    ></div>
                </Transition>
                <span
                    class="hidden sm:inline-block sm:h-screen sm:align-middle"
                    aria-hidden="true"
                    >&#8203;</span
                >
                <TransitionGroup
                    enter-active-class="duration-150 ease-out"
                    enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                    leave-active-class="duration-200 ease-in"
                    leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                    leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        v-for="(modal, modalIndex) in $modals.all"
                        :key="`modal${modalIndex}`"
                        class="relative inline-block rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle"
                    >
                        <div
                            class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"
                        >
                            <button
                                type="button"
                                class="rounded-md bg-white text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                @click="$modals.pop()"
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
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>
<script>
import modals from "../../support/Modals";

export default {
    data() {
        return {
            open: false,
            modals,
        };
    },
    watch: {
        "modals.modals": function (v) {
            if (v.length) {
                document.body.classList.add("overflow-hidden");
                this.$nextTick(() => {
                    this.open = true;
                });
            } else {
                document.body.classList.remove("overflow-hidden");
                this.$nextTick(() => {
                    this.open = false;
                });
            }
        },
    },
};
</script>
