import { isArray } from "@vuepress/helper/client";
import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import FeatureSection from "@theme-hope/components/home/FeatureSection";
import HeroInfo from "@theme-hope/components/home/HeroInfo";
import HighlightPanel from "@theme-hope/components/home/HighlightSection";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import "../../styles/home/home-page.scss";
export default defineComponent({
    name: "HomePage",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = useFrontmatter();
        return () => {
            const { features, highlights } = frontmatter.value;
            return h("main", {
                id: "main-content",
                class: "vp-page vp-project-home",
                "aria-labelledby": frontmatter.value.heroText === "" ? "" : "main-title",
            }, [
                slots.heroBefore?.(),
                h(HeroInfo, null, slots),
                slots.heroAfter?.(),
                isArray(highlights)
                    ? highlights.map((highlight) => "features" in highlight
                        ? h(FeatureSection, highlight)
                        : h(HighlightPanel, highlight))
                    : isArray(features)
                        ? h(DropTransition, { appear: true, delay: 0.24 }, () => h(FeatureSection, { features }))
                        : null,
                slots.content?.() ??
                    h(DropTransition, { appear: true, delay: 0.32 }, () => h(MarkdownContent, null, slots)),
            ]);
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaG9tZS9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sZUFBZSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sY0FBYyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hFLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sY0FBYyxNQUFNLDhDQUE4QyxDQUFDO0FBQzFFLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBUy9FLE9BQU8sa0NBQWtDLENBQUM7QUFFMUMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFFaEIsS0FBSyxFQUFFLE1BV0w7SUFFRixLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBbUMsQ0FBQztRQUV0RSxPQUFPLEdBQVUsRUFBRTtZQUNqQixNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFbkQsT0FBTyxDQUFDLENBQ04sTUFBTSxFQUNOO2dCQUNFLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWTthQUN6RSxFQUNEO2dCQUNFLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDcEIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO2dCQUN4QixLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FDM0IsVUFBVSxJQUFJLFNBQVM7d0JBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQzt3QkFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQ2pDO29CQUNILENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3dCQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUNwRCxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FDaEM7d0JBQ0gsQ0FBQyxDQUFDLElBQUk7Z0JBQ1YsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNmLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMxRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=