import { defineComponent, h, nextTick } from "vue";
import { IconBase } from "vuepress-shared/client";
import { useDarkMode } from "@theme-hope/composables/useDarkMode";
import { usePure } from "@theme-hope/composables/usePure";
import "../../styles/appearance/color-mode-switch.scss";
const AutoColorModeIcon = () => h(IconBase, { name: "auto" }, () => h("path", {
    d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z",
}));
AutoColorModeIcon.displayName = "AutoColorModeIcon";
const LightColorModeIcon = () => h(IconBase, { name: "light" }, () => h("path", {
    d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z",
}));
LightColorModeIcon.displayName = "LightColorModeIcon";
const DarkColorModeIcon = () => h(IconBase, { name: "dark" }, () => h("path", {
    d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z",
}));
DarkColorModeIcon.displayName = "DarkColorModeIcon";
export default defineComponent({
    name: "ColorModeSwitch",
    setup() {
        const { config, isDarkMode, status } = useDarkMode();
        const isPure = usePure();
        const updateDarkmodeStatus = () => {
            if (config.value === "switch") {
                status.value = {
                    light: "dark",
                    dark: "auto",
                    auto: "light",
                }[status.value];
            }
            else {
                status.value = status.value === "light" ? "dark" : "light";
            }
        };
        const toggleDarkmode = async (event) => {
            const useViewTransition = 
            // @ts-expect-error: Providing backward compatibility
            document.startViewTransition &&
                !globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches &&
                !isPure.value;
            if (!useViewTransition) {
                updateDarkmodeStatus();
                return;
            }
            const x = event.clientX;
            const y = event.clientY;
            const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
            const oldStatus = isDarkMode.value;
            const transition = document.startViewTransition(async () => {
                updateDarkmodeStatus();
                await nextTick();
            });
            await transition.ready;
            if (isDarkMode.value !== oldStatus) {
                document.documentElement.animate({
                    clipPath: isDarkMode.value
                        ? [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
                        : [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
                }, {
                    duration: 400,
                    pseudoElement: isDarkMode.value
                        ? "::view-transition-old(root)"
                        : "::view-transition-new(root)",
                });
            }
        };
        return () => h("button", {
            type: "button",
            class: "vp-color-mode-switch",
            id: "color-mode-switch",
            onClick: toggleDarkmode,
        }, [
            h(AutoColorModeIcon, {
                style: {
                    display: status.value === "auto" ? "block" : "none",
                },
            }),
            h(DarkColorModeIcon, {
                style: {
                    display: status.value === "dark" ? "block" : "none",
                },
            }),
            h(LightColorModeIcon, {
                style: {
                    display: status.value === "light" ? "block" : "none",
                },
            }),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JNb2RlU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2FwcGVhcmFuY2UvQ29sb3JNb2RlU3dpdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUxRCxPQUFPLGdEQUFnRCxDQUFDO0FBRXhELE1BQU0saUJBQWlCLEdBQXdCLEdBQUcsRUFBRSxDQUNsRCxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUNqQyxDQUFDLENBQUMsTUFBTSxFQUFFO0lBQ1IsQ0FBQyxFQUFFLGdSQUFnUjtDQUNwUixDQUFDLENBQ0gsQ0FBQztBQUVKLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztBQUVwRCxNQUFNLGtCQUFrQixHQUF3QixHQUFHLEVBQUUsQ0FDbkQsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FDbEMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNSLENBQUMsRUFBRSxxbkJBQXFuQjtDQUN6bkIsQ0FBQyxDQUNILENBQUM7QUFFSixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7QUFFdEQsTUFBTSxpQkFBaUIsR0FBd0IsR0FBRyxFQUFFLENBQ2xELENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQ2pDLENBQUMs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