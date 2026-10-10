import { computed, defineComponent, h, onMounted } from "vue";
import { useDarkMode } from "@theme-hope/composables/useDarkMode";
import "../../styles/appearance/theme-color-picker.scss";
const THEME_COLOR_KEY = "VUEPRESS_THEME_COLOR";
export default defineComponent({
    name: "ThemeColorPicker",
    props: {
        /**
         * Theme color picker config
         *
         * 主题色选择器配置
         */
        themeColors: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { isDarkMode } = useDarkMode();
        const activeThemeColors = computed(() => {
            const themeColors = new Map(Object.entries(props.themeColors));
            for (const [name, color] of themeColors.entries()) {
                if (name.includes("light")) {
                    if (isDarkMode.value) {
                        themeColors.delete(name);
                    }
                    else {
                        themeColors.set(name.replace("light-", ""), color);
                        themeColors.delete(name);
                    }
                }
                if (name.includes("dark")) {
                    if (isDarkMode.value) {
                        themeColors.set(name.replace("dark-", ""), color);
                        themeColors.delete(name);
                    }
                    else {
                        themeColors.delete(name);
                    }
                }
            }
            return [...themeColors.entries()].map(([name, color]) => ({
                name,
                color,
            }));
        });
        const setThemeColor = (name = "") => {
            const classes = document.documentElement.classList;
            // oxlint-disable-next-line no-shadow
            const colorNames = activeThemeColors.value.map(({ name }) => name);
            if (!name) {
                localStorage.removeItem(THEME_COLOR_KEY);
                classes.remove(...colorNames);
                return;
            }
            classes.remove(...colorNames.filter((themeColorClass) => themeColorClass !== name));
            classes.add(name);
            localStorage.setItem(THEME_COLOR_KEY, name);
        };
        onMounted(() => {
            const theme = localStorage.getItem(THEME_COLOR_KEY);
            if (theme)
                setThemeColor(theme);
        });
        return () => h("ul", { class: "vp-theme-color-picker", id: "theme-color-picker" }, [
            h("li", h("span", {
                class: "theme-color",
                onClick: () => {
                    setThemeColor();
                },
            })),
            activeThemeColors.value.map(({ name, color }) => h("li", h("span", {
                style: { background: color },
                onClick: () => {
                    setThemeColor(name);
                },
            }))),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVDb2xvclBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9hcHBlYXJhbmNlL1RoZW1lQ29sb3JQaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUU5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEUsT0FBTyxpREFBaUQsQ0FBQztBQUV6RCxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztBQUUvQyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsa0JBQWtCO0lBRXhCLEtBQUssRUFBRTtRQUNMOzs7O1dBSUc7UUFDSCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsTUFBMEM7WUFDaEQsUUFBUSxFQUFFLElBQUk7U0FDZjtLQUNGO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFckMsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3RDLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFpQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRS9FLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQzNCLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNyQixXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixDQUFDO3lCQUFNLENBQUM7d0JBQ04s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