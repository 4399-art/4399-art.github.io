import { defineComponent, h } from "vue";
import ColorModeSwitch from "@theme-hope/components/appearance/ColorModeSwitch";
import { useAppearanceLocale } from "@theme-hope/composables/appearance/useAppearanceLocale";
import { useDarkMode } from "@theme-hope/composables/useDarkMode";
import "../../styles/appearance/color-mode.scss";
export default defineComponent({
    name: "ColorMode",
    setup() {
        const appearanceLocale = useAppearanceLocale();
        const { canToggle } = useDarkMode();
        return () => canToggle.value
            ? h("div", { class: "vp-color-mode" }, [
                h("label", { class: "vp-color-mode-title", for: "color-mode-switch" }, appearanceLocale.value.darkmode),
                h(ColorModeSwitch),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JNb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2FwcGVhcmFuY2UvQ29sb3JNb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXpDLE9BQU8sZUFBZSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRSxPQUFPLHlDQUF5QyxDQUFDO0FBRWpELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxXQUFXO0lBRWpCLEtBQUs7UUFDSCxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixFQUFFLENBQUM7UUFDL0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBRXBDLE9BQU8sR0FBaUIsRUFBRSxDQUN4QixTQUFTLENBQUMsS0FBSztZQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFO2dCQUNuQyxDQUFDLENBQ0MsT0FBTyxFQUNQLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxFQUMxRCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNoQztnQkFDRCxDQUFDLENBQUMsZUFBZSxDQUFDO2FBQ25CLENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9