import { hasGlobalComponent } from "@vuepress/helper/client";
import noopComponent from "@vuepress/helper/noopComponent";
import { computed, defineComponent, h, ref, resolveComponent, watch } from "vue";
import { onContentUpdated } from "vuepress/client";
import AppearanceButton from "@theme-hope/components/appearance/AppearanceButton";
import LanguageDropdown from "@theme-hope/components/navbar/LanguageDropdown";
import NavbarBrand from "@theme-hope/components/navbar/NavbarBrand";
import NavbarLinks from "@theme-hope/components/navbar/NavbarLinks";
import NavScreen from "@theme-hope/components/navbar/NavScreen";
import RepoLink from "@theme-hope/components/navbar/RepoLink";
import ToggleNavbarButton from "@theme-hope/components/navbar/ToggleNavbarButton";
import ToggleSidebarButton from "@theme-hope/components/navbar/ToggleSidebarButton";
import { useNavbarAutoHide } from "@theme-hope/composables/navbar/useNavbarAutoHide";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
import "../../styles/navbar/navbar.scss";
export default defineComponent({
    name: "NavBar",
    emits: ["toggleSidebar"],
    slots: Object,
    setup(_props, { emit, slots }) {
        const themeLocale = useThemeLocale();
        const { isMobile } = useWindowSize();
        const showScreen = ref(false);
        const autoHide = useNavbarAutoHide();
        const navbarLayout = computed(() => themeLocale.value.navbarLayout ??
            {
                start: ["Brand"],
                center: ["Links"],
                end: ["Language", "Repo", "Outlook", "Search"],
            });
        const navbarComponentMap = {
            Brand: NavbarBrand,
            Language: __VP_I18N__ ? LanguageDropdown : noopComponent,
            Links: NavbarLinks,
            Repo: RepoLink,
            Outlook: AppearanceButton,
            Search: hasGlobalComponent("SearchBox") ? resolveComponent("SearchBox") : noopComponent,
        };
        const getNavbarComponent = (component) => navbarComponentMap[component] ??
            (hasGlobalComponent(component) ? resolveComponent(component) : noopComponent);
        onContentUpdated(() => {
            showScreen.value = false;
        });
        watch(isMobile, (value) => {
            if (!value)
                showScreen.value = false;
        });
        return () => [
            h("header", {
                key: "navbar",
                id: "navbar",
                class: ["vp-navbar", { "auto-hide": autoHide.value }],
                "vp-navbar": "",
            }, [
                h("div", { class: "vp-navbar-start" }, [
                    h(ToggleSidebarButton, {
                        onToggle: () => {
                            if (showScreen.value)
                                showScreen.value = false;
                            emit("toggleSidebar");
                        },
                    }),
                    navbarLayout.value.start?.map((item) => h(getNavbarComponent(item))),
                ]),
                h("div", { class: "vp-navbar-center" }, [
                    navbarLayout.value.center?.map((item) => h(getNavbarComponent(item))),
                ]),
                h("div", { class: "vp-navbar-end" }, [
                    navbarLayout.value.end?.map((item) => h(getNavbarComponent(item))),
                    h(ToggleNavbarButton, {
                        active: showScreen.value,
                        onToggle: () => {
                            showScreen.value = !showScreen.value;
                        },
                    }),
                ]),
            ]),
            h(NavScreen, { show: showScreen.value }, slots),
        ];
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxhQUFhLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxnQkFBZ0IsTUFBTSxvREFBb0QsQ0FBQztBQUNsRixPQUFPLGdCQUFnQixNQUFNLGdEQUFnRCxDQUFDO0FBQzlFLE9BQU8sV0FBVyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BFLE9BQU8sV0FBVyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BFLE9BQU8sU0FBUyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hFLE9BQU8sUUFBUSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlELE9BQU8sa0JBQWtCLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxtQkFBbUIsTUFBTSxtREFBbUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXRFLE9BQU8saUNBQWlDLENBQUM7QUFJekMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFFBQVE7SUFFZCxLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFFeEIsS0FBSyxFQUFFLE1BSUw7SUFFRixLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUs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