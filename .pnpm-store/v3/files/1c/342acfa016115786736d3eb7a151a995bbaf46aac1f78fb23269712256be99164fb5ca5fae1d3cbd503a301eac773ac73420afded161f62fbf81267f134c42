import { computed, defineComponent, h } from "vue";
import { ClientOnly } from "vuepress/client";
import ColorMode from "@theme-hope/components/appearance/ColorMode";
import ThemeColor, { hasMultipleThemeColors } from "@theme-hope/components/appearance/ThemeColor";
import ToggleFullScreen from "@theme-hope/components/appearance/ToggleFullScreen";
import { usePure } from "@theme-hope/composables/usePure";
import { useTheme } from "@theme-hope/composables/useTheme";
export default defineComponent({
    name: "AppearanceSettings",
    setup() {
        const theme = useTheme();
        const isPure = usePure();
        const enableFullScreen = computed(() => !isPure.value && theme.value.fullscreen);
        return () => h(ClientOnly, () => [
            hasMultipleThemeColors ? h(ThemeColor) : null,
            h(ColorMode),
            enableFullScreen.value ? h(ToggleFullScreen) : null,
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwZWFyYW5jZVNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2FwcGVhcmFuY2UvQXBwZWFyYW5jZVNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxTQUFTLE1BQU0sNkNBQTZDLENBQUM7QUFDcEUsT0FBTyxVQUFVLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xHLE9BQU8sZ0JBQWdCLE1BQU0sb0RBQW9ELENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RCxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsb0JBQW9CO0lBRTFCLEtBQUs7UUFDSCxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN6QixNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqRixPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDN0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNaLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDcEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9