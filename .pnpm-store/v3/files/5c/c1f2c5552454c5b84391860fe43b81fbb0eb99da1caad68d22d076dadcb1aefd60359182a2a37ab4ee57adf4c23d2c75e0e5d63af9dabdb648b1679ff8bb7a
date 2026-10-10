import { defineComponent, h } from "vue";
import { RepoIcon } from "vuepress-shared/client";
import { useNavbarRepo } from "@theme-hope/composables/navbar/useNavbarRepo";
import "../../styles/navbar/repo-link.scss";
export default defineComponent({
    name: "RepoLink",
    setup() {
        const repo = useNavbarRepo();
        return () => repo.value
            ? h("div", { class: "vp-nav-item vp-action" }, h("a", {
                class: "vp-action-link",
                href: repo.value.link,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": repo.value.label,
            }, h(RepoIcon, {
                type: repo.value.type,
                style: {
                    width: "1.25rem",
                    height: "1.25rem",
                    verticalAlign: "middle",
                },
            })))
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2YmFyL1JlcG9MaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxvQ0FBb0MsQ0FBQztBQUU1QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsVUFBVTtJQUVoQixLQUFLO1FBQ0gsTUFBTSxJQUFJLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFFN0IsT0FBTyxHQUFpQixFQUFFLENBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FDQyxLQUFLLEVBQ0wsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFDbEMsQ0FBQyxDQUNDLEdBQUcsRUFDSDtnQkFDRSxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsR0FBRyxFQUFFLHFCQUFxQjtnQkFDMUIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzthQUMvQixFQUNELENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxTQUFTO29CQUNoQixNQUFNLEVBQUUsU0FBUztvQkFDakIsYUFBYSxFQUFFLFFBQVE7aUJBQ3hCO2FBQ0YsQ0FBQyxDQUNILENBQ0Y7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9