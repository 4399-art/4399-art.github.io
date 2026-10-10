import { defineComponent, h } from "vue";
import AutoLink from "@theme-hope/components/base/AutoLink";
import NavbarDropdown from "@theme-hope/components/navbar/NavbarDropdown";
import { useNavbarItems } from "@theme-hope/composables/navbar/useNavbarItems";
import "../../styles/navbar/navbar-links.scss";
export default defineComponent({
    name: "NavbarLinks",
    setup() {
        const navbarConfig = useNavbarItems();
        return () => navbarConfig.value.length > 0
            ? h("nav", { class: "vp-nav-links" }, navbarConfig.value.map((config) => h("div", { class: "vp-nav-item hide-in-mobile" }, "children" in config
                ? h(NavbarDropdown, { config })
                : h(AutoLink, { config, iconSizing: "height" }))))
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyTGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2YmFyL05hdmJhckxpbmtzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXpDLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sY0FBYyxNQUFNLDhDQUE4QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUUvRSxPQUFPLHVDQUF1QyxDQUFDO0FBRS9DLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxhQUFhO0lBRW5CLEtBQUs7UUFDSCxNQUFNLFlBQVksR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUV0QyxPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFDekIsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNoQyxDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEVBQ3ZDLFVBQVUsSUFBSSxNQUFNO2dCQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FDbEQsQ0FDRixDQUNGO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFDLENBQUMifQ==