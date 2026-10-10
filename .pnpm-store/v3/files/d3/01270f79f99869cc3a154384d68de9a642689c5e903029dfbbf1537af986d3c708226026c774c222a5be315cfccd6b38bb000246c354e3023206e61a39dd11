import { useFullscreen } from "@vueuse/core";
import { computed, defineComponent, h, ref } from "vue";
import { onContentUpdated } from "vuepress/client";
import AppearanceIcon from "@theme-hope/components/appearance/AppearanceIcon";
import AppearanceSettings from "@theme-hope/components/appearance/AppearanceSettings";
import ColorModeSwitch from "@theme-hope/components/appearance/ColorModeSwitch";
import { hasMultipleThemeColors } from "@theme-hope/components/appearance/ThemeColor";
import ToggleFullScreenButton from "@theme-hope/components/appearance/ToggleFullScreenButton";
import { useDarkMode } from "@theme-hope/composables/useDarkMode";
import { usePure } from "@theme-hope/composables/usePure";
import { useTheme } from "@theme-hope/composables/useTheme";
import "../../styles/appearance/appearance-button.scss";
export default defineComponent({
    name: "AppearanceButton",
    setup() {
        const theme = useTheme();
        const { canToggle } = useDarkMode();
        const { isSupported } = useFullscreen();
        const isPure = usePure();
        const open = ref(false);
        const enableFullScreen = computed(() => !isPure.value && theme.value.fullscreen && isSupported);
        const enabled = computed(() => hasMultipleThemeColors || canToggle.value || enableFullScreen.value);
        onContentUpdated(() => {
            open.value = false;
        });
        return () => enabled.value
            ? h("div", { class: "vp-nav-item hide-in-mobile" }, 
            // Only ColorModeSwitch is enabled
            canToggle.value && !enableFullScreen.value && !hasMultipleThemeColors
                ? h(ColorModeSwitch)
                : // Only FullScreen is enabled
                    enableFullScreen.value && !canToggle.value && !hasMultipleThemeColors
                        ? h(ToggleFullScreenButton)
                        : h("button", {
                            type: "button",
                            class: ["vp-appearance-button", { open: open.value }],
                            tabindex: "-1",
                            "aria-hidden": true,
                        }, [
                            h(AppearanceIcon),
                            h("div", { class: "vp-appearance-dropdown" }, h(AppearanceSettings)),
                        ]))
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwZWFyYW5jZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9hcHBlYXJhbmNlL0FwcGVhcmFuY2VCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sY0FBYyxNQUFNLGtEQUFrRCxDQUFDO0FBQzlFLE9BQU8sa0JBQWtCLE1BQU0sc0RBQXNELENBQUM7QUFDdEYsT0FBTyxlQUFlLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxzQkFBc0IsTUFBTSwwREFBMEQsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RCxPQUFPLGdEQUFnRCxDQUFDO0FBRXhELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxrQkFBa0I7SUFFeEIsS0FBSztRQUNILE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDeEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFFekIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUMsQ0FBQztRQUVoRyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQ3RCLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUMxRSxDQUFDO1FBRUYsZ0JBQWdCLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFpQixFQUFFLENBQ3hCLE9BQU8sQ0FBQyxLQUFLO1lBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FDQyxLQUFLLEVBQ0wsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUU7WUFDdkMsa0NBQWtDO1lBQ2xDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxzQkFBc0I7Z0JBQ25FLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUNwQixDQUFDLENBQUMsNkJBQTZCO29CQUM3QixnQkFBZ0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsc0JBQXNCO3dCQUNyRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO3dCQUMzQixDQUFDLENBQUMsQ0FBQyxDQUNDLFFBQVEsRUFDUjs0QkFDRSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQ3JELFFBQVEsRUFBRSxJQUFJOzRCQUNkLGFBQWEsRUFBRSxJQUFJO3lCQUNwQixFQUNEOzRCQUNFLENBQUMsQ0FBQyxjQUFjLENBQUM7NEJBQ2pCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt5QkFDckUsQ0FDRixDQUNSO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDLENBQUMifQ==