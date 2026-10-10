import { defineComponent, h } from "vue";
import I18nIcon from "@theme-hope/components/navbar/I18nIcon";
import NavbarDropdown from "@theme-hope/components/navbar/NavbarDropdown";
import { useNavbarLanguageDropdown } from "@theme-hope/composables/navbar/useNavbarLanguageDropdown";
export default defineComponent({
    name: "LanguageDropdown",
    setup() {
        const dropdown = useNavbarLanguageDropdown();
        return () => dropdown.value
            ? h("div", { class: "vp-nav-item" }, h(NavbarDropdown, { config: dropdown.value }, {
                title: () => h(I18nIcon, {
                    "aria-label": dropdown.value?.ariaLabel,
                    style: {
                        width: "1rem",
                        height: "1rem",
                        verticalAlign: "middle",
                    },
                }),
            }))
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9uYXZiYXIvTGFuZ3VhZ2VEcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6QyxPQUFPLFFBQVEsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RCxPQUFPLGNBQWMsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUVyRyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsa0JBQWtCO0lBRXhCLEtBQUs7UUFDSCxNQUFNLFFBQVEsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO1FBRTdDLE9BQU8sR0FBaUIsRUFBRSxDQUN4QixRQUFRLENBQUMsS0FBSztZQUNaLENBQUMsQ0FBQyxDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUN4QixDQUFDLENBQ0MsY0FBYyxFQUNkLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFDMUI7Z0JBQ0UsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUNWLENBQUMsQ0FBQyxRQUFRLEVBQUU7b0JBQ1YsWUFBWSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUztvQkFDdkMsS0FBSyxFQUFFO3dCQUNMLEtBQUssRUFBRSxNQUFNO3dCQUNiLE1BQU0sRUFBRSxNQUFNO3dCQUNkLGFBQWEsRUFBRSxRQUFRO3FCQUN4QjtpQkFDRixDQUFDO2FBQ0wsQ0FDRixDQUNGO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDLENBQUMifQ==