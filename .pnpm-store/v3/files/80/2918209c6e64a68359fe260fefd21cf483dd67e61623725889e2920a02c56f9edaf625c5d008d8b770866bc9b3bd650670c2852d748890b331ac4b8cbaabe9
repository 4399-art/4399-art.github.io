import { useFullscreen } from "@vueuse/core";
import { defineComponent, h } from "vue";
import ToggleFullScreenButton from "@theme-hope/components/appearance/ToggleFullScreenButton";
import { useAppearanceLocale } from "@theme-hope/composables/appearance/useAppearanceLocale";
import "../../styles/appearance/toggle-full-screen.scss";
export default defineComponent({
    name: "ToggleFullScreenButton",
    setup() {
        const appearanceLocale = useAppearanceLocale();
        const { isSupported } = useFullscreen();
        return () => isSupported.value
            ? h("div", { class: "full-screen-wrapper" }, [
                h("label", { class: "full-screen-title", for: "full-screen-switch" }, appearanceLocale.value.fullscreen),
                h(ToggleFullScreenButton),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlRnVsbFNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9hcHBlYXJhbmNlL1RvZ2dsZUZ1bGxTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6QyxPQUFPLHNCQUFzQixNQUFNLDBEQUEwRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTdGLE9BQU8saURBQWlELENBQUM7QUFFekQsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLHdCQUF3QjtJQUU5QixLQUFLO1FBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUV4QyxPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsV0FBVyxDQUFDLEtBQUs7WUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxFQUFFO2dCQUN6QyxDQUFDLENBQ0MsT0FBTyxFQUNQLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxFQUN6RCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUNsQztnQkFDRCxDQUFDLENBQUMsc0JBQXNCLENBQUM7YUFDMUIsQ0FBQztZQUNKLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=