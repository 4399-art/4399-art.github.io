import { useEventListener, usePreferredDark, useStorage, watchImmediate } from "@vueuse/core";
import { computed, inject, onMounted, watchEffect } from "vue";
import { useTheme } from "@theme-hope/composables/useTheme";
export const darkModeSymbol = Symbol(__VUEPRESS_DEV__ ? "darkMode" : "");
/**
 * Inject dark mode global computed
 *
 * @returns Dark mode global computed
 */
export const useDarkMode = () => {
    const darkMode = inject(darkModeSymbol);
    if (!darkMode)
        throw new Error("useDarkMode() is called without provider.");
    return darkMode;
};
export const injectDarkMode = (app) => {
    const isDarkPreferred = usePreferredDark();
    const theme = useTheme();
    const config = computed(() => theme.value.darkmode ?? "switch");
    const status = useStorage("vuepress-theme-hope-scheme", "auto");
    const isDarkMode = computed(() => {
        const darkModeConfig = config.value;
        switch (darkModeConfig) {
            case "disable": {
                return false;
            }
            case "enable": {
                return true;
            }
            case "auto": {
                return isDarkPreferred.value;
            }
            case "switch": {
                return status.value === "dark" || (status.value === "auto" && isDarkPreferred.value);
            }
            case "toggle": {
                return status.value === "dark";
            }
            default: {
                return status.value === "dark" || (status.value === "auto" && isDarkPreferred.value);
            }
        }
    });
    const canToggle = computed(() => {
        const darkmode = config.value;
        return darkmode === "switch" || darkmode === "toggle";
    });
    app.provide(darkModeSymbol, {
        canToggle,
        config,
        isDarkMode,
        status,
    });
    // Provide global helpers
    Object.defineProperties(app.config.globalProperties, {
        $isDarkMode: { get: () => isDarkMode.value },
    });
};
export const setupDarkMode = () => {
    const { config, isDarkMode, status } = useDarkMode();
    watchEffect(() => {
        if (config.value === "disable")
            status.value = "light";
        else if (config.value === "enable")
            status.value = "dark";
        else if (config.value === "toggle" && status.value === "auto")
            status.value = "light";
    });
    useEventListener("beforeprint", () => {
        if (isDarkMode.value)
            document.documentElement.dataset.theme = "light";
    });
    useEventListener("afterprint", () => {
        if (isDarkMode.value)
            document.documentElement.dataset.theme = "dark";
    });
    onMounted(() => {
        watchImmediate(isDarkMode, (value) => {
            document.documentElement.dataset.theme = value ? "dark" : "light";
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGFya01vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL3VzZURhcmtNb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBaUI1RCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQTJCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVqRzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQWEsRUFBRTtJQUN4QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLFFBQVE7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFFNUUsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBUSxFQUFRLEVBQUU7SUFDL0MsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUM7SUFFaEUsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFpQiw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJ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