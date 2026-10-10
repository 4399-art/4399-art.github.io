import { RenderDefault, hasGlobalComponent, isSlotContentEmpty } from "@vuepress/helper/client";
import { useEventListener, useScrollLock, useThrottleFn, useToggle } from "@vueuse/core";
import { Transition, computed, defineComponent, h, onMounted, onUnmounted, ref, resolveComponent, shallowRef, watch, } from "vue";
import { onContentUpdated } from "vuepress/client";
import PageFooter from "@theme-hope/components/base/PageFooter";
import Navbar from "@theme-hope/components/navbar/Navbar";
import Sidebar from "@theme-hope/components/sidebar/Sidebar";
import { useNavbarAutoHide } from "@theme-hope/composables/navbar/useNavbarAutoHide";
import { useSidebarItems } from "@theme-hope/composables/sidebar/useSidebarItems";
import { useData } from "@theme-hope/composables/useData";
import { usePure } from "@theme-hope/composables/usePure";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
import "@vuepress/helper/transition/fade-in.css";
import "../../styles/base/main-layout.scss";
export default defineComponent({
    name: "MainLayout",
    props: {
        /**
         * Extra class of container
         *
         * 容器额外类名
         */
        containerClass: String,
        /**
         * Whether disable navbar
         *
         * 是否禁用导航栏
         */
        noNavbar: Boolean,
        /**
         * Whether disable sidebar
         *
         * 是否禁用侧边栏
         */
        noSidebar: Boolean,
        /**
         * Whether disable toc
         */
        noToc: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const { frontmatter, theme, themeLocale } = useData();
        const { isMobile, isPC } = useWindowSize();
        const isPure = usePure();
        const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
        const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
        const sidebarItems = useSidebarItems();
        const body = shallowRef();
        const isLocked = useScrollLock(body);
        // Navbar
        const hideNavbar = ref(false);
        const autoHide = useNavbarAutoHide();
        watch(autoHide, (value) => {
            if (!value)
                hideNavbar.value = false;
        });
        const enableNavbar = computed(() => {
            if (props.noNavbar)
                return false;
            if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
                return false;
            return Boolean(themeLocale.value.logo ?? themeLocale.value.repo ?? themeLocale.value.navbar);
        });
        // external-link-icon
        const enableExternalLinkIcon = computed(() => frontmatter.value.externalLinkIcon ?? theme.value.externalLinkIcon ?? true);
        const enableToc = computed(() => !props.noToc &&
            !frontmatter.value.home &&
            Boolean(frontmatter.value.toc ?? themeLocale.value.toc ?? true));
        const touchStart = { x: 0, y: 0 };
        const onTouchStart = (event) => {
            touchStart.x = event.changedTouches[0].clientX;
            touchStart.y = event.changedTouches[0].clientY;
        };
        const onTouchEnd = (event) => {
            const dx = event.changedTouches[0].clientX - touchStart.x;
            const dy = event.changedTouches[0].clientY - touchStart.y;
            if (
            // Horizontal swipe
            Math.abs(dx) > Math.abs(dy) * 1.5 &&
                Math.abs(dx) > 40) {
                if (dx > 0 && touchStart.x <= 80)
                    toggleMobileSidebar(true);
                else
                    toggleMobileSidebar(false);
            }
        };
        // Close sidebar after navigation
        let lastDistance = 0;
        useEventListener("scroll", useThrottleFn(() => {
            const distance = window.scrollY;
            // At top or scroll up
            if (distance <= 58 || distance < lastDistance)
                hideNavbar.value = false;
            // Scroll down > 200px, sidebar is not opened, and navbar auto-hide is enabled
            else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value && autoHide.value)
                hideNavbar.value = true;
            lastDistance = distance;
        }, 300, true));
        watch(isMobile, (value) => {
            if (!value)
                toggleMobileSidebar(false);
        });
        watch(isMobileSidebarOpen, (value) => {
            isLocked.value = value;
        });
        onContentUpdated(() => {
            toggleMobileSidebar(false);
        });
        onMounted(() => {
            body.value = document.body;
        });
        onUnmounted(() => {
            isLocked.value = false;
        });
        return () => {
            const sidebarTopContent = slots.sidebarTop?.();
            const sidebarItemsContent = slots.sidebarItems?.(sidebarItems.value);
            const sidebarBottomContent = slots.sidebarBottom?.();
            const isSidebarEmpty = isSlotContentEmpty(sidebarTopContent) &&
                isSlotContentEmpty(sidebarItemsContent) &&
                isSlotContentEmpty(sidebarBottomContent);
            const noSidebar = 
            // sidebar is disabled via props
            props.noSidebar ||
                // sidebar is disabled via frontmatter
                frontmatter.value.sidebar === false ||
                // (is home page / no sidebar items) && no contents in sidebar slots
                // oxlint-disable-next-line typescript/prefer-nullish-coalescing
                ((frontmatter.value.home || sidebarItems.value.length === 0) && isSidebarEmpty);
            return h(hasGlobalComponent("GlobalEncrypt")
                ? resolveComponent("GlobalEncrypt")
                : RenderDefault, () => h("div", {
                class: [
                    "theme-container",
                    // Classes
                    {
                        // navbar
                        "hide-navbar": hideNavbar.value,
                        "no-navbar": !enableNavbar.value,
                        // sidebar
                        "sidebar-collapsed": !isMobile.value && !isPC.value && isDesktopSidebarCollapsed.value,
                        "sidebar-open": isMobile.value && isMobileSidebarOpen.value,
                        "no-sidebar": noSidebar,
                        // external-link-icon
                        "external-link-icon": enableExternalLinkIcon.value,
                        // pure
                        pure: isPure.value,
                        // toc
                        "has-toc": enableToc.value,
                    },
                    props.containerClass ?? "",
                    frontmatter.value.containerClass ?? "",
                ],
                "vp-container": "",
                onTouchStart,
                onTouchEnd,
            }, [
                // Navbar
                enableNavbar.value
                    ? h(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, slots)
                    : null,
                // Sidebar mask
                h(Transition, { name: "fade-in" }, () => isMobileSidebarOpen.value
                    ? h("div", {
                        class: "vp-sidebar-mask",
                        onClick: () => toggleMobileSidebar(false),
                    })
                    : null),
                // Toggle sidebar button
                h(Transition, { name: "fade-in" }, () => isMobile.value
                    ? null
                    : h("div", {
                        class: "toggle-sidebar-wrapper",
                        onClick: () => toggleDesktopSidebar(),
                    }, h("span", {
                        class: ["arrow", isDesktopSidebarCollapsed.value ? "end" : "start"],
                    }))),
                // Sidebar
                noSidebar ? null : h(Sidebar, null, slots),
                slots.default(),
                h(PageFooter),
            ]));
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9iYXNlL01haW5MYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6RixPQUFPLEVBQ0wsVUFBVSxFQUNWLFFBQVEsRUFDUixlQUFlLEVBQ2YsQ0FBQyxFQUNELFNBQVMsRUFDVCxXQUFXLEVBQ1gsR0FBRyxFQUNILGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsS0FBSyxHQUNOLE1BQU0sS0FBSyxDQUFDO0FBQ2IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxNQUFNLE1BQU0sc0NBQXNDLENBQUM7QUFDMUQsT0FBTyxPQUFPLE1BQU0sd0NBQXdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBUXRFLE9BQU8seUNBQXlDLENBQUM7QUFDakQsT0FBTyxvQ0FBb0MsQ0FBQztBQUU1QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsWUFBWTtJQUVsQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsY0FB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