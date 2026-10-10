import { h } from "vue";
import "../../styles/navbar/toggle-navbar-button.scss";
const ToggleNavbarButton = ({ active = false }, { emit }) => h("button", {
    type: "button",
    class: ["vp-toggle-navbar-button", { "is-active": active }],
    "aria-label": "Toggle Navbar",
    "aria-expanded": active,
    "aria-controls": "nav-screen",
    onClick: () => {
        emit("toggle");
    },
}, h("span", [
    h("span", { class: "vp-top" }),
    h("span", { class: "vp-middle" }),
    h("span", { class: "vp-bottom" }),
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
export default ToggleNavbarButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlTmF2YmFyQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL25hdmJhci9Ub2dnbGVOYXZiYXJCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV4QixPQUFPLCtDQUErQyxDQUFDO0FBTXZELE1BQU0sa0JBQWtCLEdBQXlFLENBQy9GLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxFQUNsQixFQUFFLElBQUksRUFBRSxFQUNELEVBQUUsQ0FDVCxDQUFDLENBQ0MsUUFBUSxFQUNSO0lBQ0UsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUMzRCxZQUFZLEVBQUUsZUFBZTtJQUM3QixlQUFlLEVBQUUsTUFBTTtJQUN2QixlQUFlLEVBQUUsWUFBWTtJQUM3QixPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixFQUNELENBQUMsQ0FBQyxNQUFNLEVBQUU7SUFDUixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQztDQUNsQyxDQUFDLENBQ0gsQ0FBQztBQUVKLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztBQUV0RCxlQUFlLGtCQUFrQixDQUFDIn0=