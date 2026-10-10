import { defineComponent, h } from "vue";
import AutoLink from "@theme-hope/components/base/AutoLink";
import NavScreenMenu from "@theme-hope/components/navbar/NavScreenMenu";
import { useNavbarItems } from "@theme-hope/composables/navbar/useNavbarItems";
import "../../styles/navbar/nav-screen-links.scss";
export default defineComponent({
    name: "NavScreenLinks",
    setup() {
        const navbarConfig = useNavbarItems();
        return () => navbarConfig.value.length > 0
            ? h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config) => h("div", { class: "navbar-links-item" }, "children" in config ? h(NavScreenMenu, { config }) : h(AutoLink, { config }))))
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2U2NyZWVuTGlua3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2YmFyL05hdlNjcmVlbkxpbmtzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXpDLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sYUFBYSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUUvRSxPQUFPLDJDQUEyQyxDQUFDO0FBRW5ELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxnQkFBZ0I7SUFFdEIsS0FBSztRQUNILE1BQU0sWUFBWSxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBRXRDLE9BQU8sR0FBaUIsRUFBRSxDQUN4QixZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEVBQzdCLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDaEMsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUM5QixVQUFVLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQzlFLENBQ0YsQ0FDRjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=