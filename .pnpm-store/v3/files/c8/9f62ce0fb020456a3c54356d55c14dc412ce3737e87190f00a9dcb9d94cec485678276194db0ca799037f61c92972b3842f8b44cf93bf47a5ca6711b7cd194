import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import PortfolioHero from "@theme-hope/components/home/PortfolioHero";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import "../../styles/home/portfolio-home.scss";
export default defineComponent({
    name: "PortfolioHome",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = useFrontmatter();
        return () => {
            const content = frontmatter.value.content ?? "portfolio";
            return h("main", {
                id: "main-content",
                class: "vp-page vp-portfolio-home",
                "aria-labelledby": "main-title",
            }, [
                h(PortfolioHero, null, slots),
                content === "none"
                    ? null
                    : (slots.content?.() ??
                        h("div", h(DropTransition, { appear: true, delay: 0.24 }, () => h(MarkdownContent, {
                            class: {
                                "vp-portfolio-content": content === "portfolio",
                            },
                        }, slots)))),
            ]);
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9ydGZvbGlvSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ob21lL1BvcnRmb2xpb0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sZUFBZSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sYUFBYSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBUy9FLE9BQU8sdUNBQXVDLENBQUM7QUFFL0MsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGVBQWU7SUFFckIsS0FBSyxFQUFFLE1BU0w7SUFFRixLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBNkIsQ0FBQztRQUVoRSxPQUFPLEdBQVUsRUFBRTtZQUNqQixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUM7WUFFekQsT0FBTyxDQUFDLENBQ04sTUFBTSxFQUNOO2dCQUNFLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQyxpQkFBaUIsRUFBRSxZQUFZO2FBQ2hDLEVBQ0Q7Z0JBQ0UsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2dCQUM3QixPQUFPLEtBQUssTUFBTTtvQkFDaEIsQ0FBQyxDQUFDLElBQUk7b0JBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUNsQixDQUFDLENBQ0MsS0FBSyxFQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FDcEQsQ0FBQyxDQUNDLGVBQWUsRUFDZjs0QkFDRSxLQUFLLEVBQUU7Z0NBQ0wsc0JBQXNCLEVBQUUsT0FBTyxLQUFLLFdBQVc7NkJBQ2hEO3lCQUNGLEVBQ0QsS0FBSyxDQUNOLENBQ0YsQ0FDRixDQUFDO2FBQ1AsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQyJ9