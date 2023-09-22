import { useResizeObserver } from "@vueuse/core";
import { animate, spring } from "motion";
import { reactive, ref } from "vue";

export default {
    mounted: (el, { modifiers }) => {
        const previousSize = reactive({ width: 0, height: 0 });
        const isAnimating = ref(false);

        const axis = modifiers.height
            ? "height"
            : modifiers.width
            ? "width"
            : "both";

        useResizeObserver(el, (entries) => {
            if (isAnimating.value) return;
            const [entry] = entries;
            const { width, height } = entry.contentRect;

            if (axis === "height") {
                if (previousSize.height !== height) {
                    isAnimating.value = true;
                    el.style.height = `${previousSize.height}px`;
                    previousSize.height = height;
                    animate(
                        el,
                        { height: `${height}px` },
                        {
                            easing: spring({ damping: 50, stiffness: 250 }),
                            // duration: isShrinking ? 0.175 : 0.35,
                            // ease: isShrinking ? "ease-in" : "ease-out",
                        },
                    ).finished.then(() => {
                        isAnimating.value = false;
                        el.style.height = null;
                    });
                }
                return;
            }

            if (axis === "width") {
                if (previousSize.width !== width) {
                    isAnimating.value = true;
                    el.style.width = `${previousSize.width}px`;
                    previousSize.width = width;
                    animate(
                        el,
                        { width: `${width}px` },
                        {
                            easing: spring({ damping: 50, stiffness: 250 }),
                            // duration: isShrinking ? 0.175 : 0.35,
                            // ease: isShrinking ? "ease-in" : "ease-out",
                        },
                    ).finished.then(() => {
                        isAnimating.value = false;
                        el.style.width = null;
                    });
                }
                return;
            }

            if (
                previousSize.width !== width ||
                previousSize.height !== height
            ) {
                isAnimating.value = true;

                el.style.height = `${previousSize.height}px`;
                el.style.width = `${previousSize.width}px`;

                previousSize.width = width;
                previousSize.height = height;

                animate(
                    el,
                    { height: `${height}px`, width: `${width}px` },
                    {
                        easing: spring({ damping: 50, stiffness: 250 }),
                        // duration: isShrinking ? 0.175 : 0.35,
                        // ease: isShrinking ? "ease-in" : "ease-out",
                    },
                ).finished.then(() => {
                    isAnimating.value = false;
                    el.style.height = null;
                    el.style.width = null;
                });
            }
        });
    },
};
