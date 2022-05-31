<template>
    <div>
        <div
            class="fixed inset-0 z-50 flex justify-center max-w-full overflow-y-auto"
            :class="$modals.all.length ? '' : 'pointer-events-none'"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
                        class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                        aria-hidden="true"
                    ></div>
                </Transition>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
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
                        class="relative inline-block px-4 pt-5 pb-4 text-left align-bottom transition-all bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:w-full sm:p-6"
                    >
                        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                            <button
                                type="button"
                                class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                @click="$modals.pop()"
                            >
                                <span class="sr-only">Close</span>
                                <!-- Heroicon name: outline/x -->
                                <svg
                                    class="w-6 h-6"
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
                        <component :is="modal.name" :modal-index="modalIndex" :data="modal.data"></component>
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
