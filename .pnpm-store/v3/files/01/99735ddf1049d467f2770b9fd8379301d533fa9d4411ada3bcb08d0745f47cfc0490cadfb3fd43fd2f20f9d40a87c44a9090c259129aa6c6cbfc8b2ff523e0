import { computed } from "vue";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
export const useNavbarAutoHide = () => {
    const themeLocale = useThemeLocale();
    const { isMobile } = useWindowSize();
    return computed(() => {
        const { navbarAutoHide = "mobile" } = themeLocale.value;
        return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTmF2YmFyQXV0b0hpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL25hdmJhci91c2VOYXZiYXJBdXRvSGlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRS9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFdEUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsR0FBeUIsRUFBRTtJQUMxRCxNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUNyQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFFckMsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQ25CLE1BQU0sRUFBRSxjQUFjLEdBQUcsUUFBUSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUV4RCxPQUFPLGNBQWMsS0FBSyxNQUFNLElBQUksQ0FBQyxjQUFjLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9