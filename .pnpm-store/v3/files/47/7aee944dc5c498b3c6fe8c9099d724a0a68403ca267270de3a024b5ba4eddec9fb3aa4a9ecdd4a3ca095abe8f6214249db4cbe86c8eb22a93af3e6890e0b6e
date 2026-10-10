import { entries, fromEntries } from "@vuepress/helper/client";
import { defineComponent, h } from "vue";
import ThemeColorPicker from "@theme-hope/components/appearance/ThemeColorPicker";
import { useAppearanceLocale } from "@theme-hope/composables/appearance/useAppearanceLocale";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/appearance/theme-color.scss";
export const hasMultipleThemeColors = cssVariables.hasMultipleThemeColors === "true";
const themeColors = hasMultipleThemeColors
    ? fromEntries(entries(cssVariables).filter(([key]) => key.startsWith("theme-")))
    : {};
export default defineComponent({
    name: "ThemeColor",
    setup() {
        const appearanceLocale = useAppearanceLocale();
        return () => hasMultipleThemeColors
            ? h("div", { class: "vp-theme-color" }, [
                h("label", { class: "vp-theme-color-title", for: "theme-color-picker" }, appearanceLocale.value.themeColor),
                h(ThemeColorPicker, { themeColors }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVDb2xvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9hcHBlYXJhbmNlL1RoZW1lQ29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6QyxPQUFPLGdCQUFnQixNQUFNLG9EQUFvRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTdGLE9BQU8sWUFBWSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sMENBQTBDLENBQUM7QUFFbEQsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixLQUFLLE1BQU0sQ0FBQztBQUVyRixNQUFNLFdBQVcsR0FBRyxzQkFBc0I7SUFDeEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFUCxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsWUFBWTtJQUVsQixLQUFLO1FBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO1FBRS9DLE9BQU8sR0FBaUIsRUFBRSxDQUN4QixzQkFBc0I7WUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEMsQ0FBQyxDQUNDLE9BQU8sRUFDUCxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsRUFDNUQsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDbEM7Z0JBQ0QsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUM7YUFDckMsQ0FBQztZQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=