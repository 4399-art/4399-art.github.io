import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";
import BlogHome from "@theme-hope/components/blog/BlogHome";
import BlogMainLayout from "@theme-hope/components/blog/BlogMainLayout";
import CategoryPage from "@theme-hope/components/blog/CategoryPage";
import TimelinePage from "@theme-hope/components/blog/TimelinePage";
import TypePage from "@theme-hope/components/blog/TypePage";
export default defineComponent({
    name: "Blog",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = useFrontmatter();
        return () => {
            const { type, key } = frontmatter.value.blog ?? {};
            return h(BlogMainLayout, null, {
                ...slots,
                default: () => slots.default?.() ??
                    (type === "category"
                        ? h(CategoryPage, null, slots)
                        : type === "type"
                            ? key === "timeline"
                                ? h(TimelinePage, null, slots)
                                : h(TypePage, null, slots)
                            : h(BlogHome, null, slots)),
            });
        };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvbGF5b3V0cy9ibG9nL0Jsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sY0FBYyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hFLE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sWUFBWSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBYTVELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxNQUFNO0lBRVosS0FBSyxFQUFFLE1Bb0NMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQXlCLENBQUM7UUFFNUQsT0FBTyxHQUFVLEVBQUU7WUFDakIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFFbkQsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRTtnQkFDN0IsR0FBRyxLQUFLO2dCQUNSLE9BQU8sRUFBRSxHQUF3QixFQUFFLENBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDakIsQ0FBQyxJQUFJLEtBQUssVUFBVTt3QkFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDOUIsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNOzRCQUNmLENBQUMsQ0FBQyxHQUFHLEtBQUssVUFBVTtnQ0FDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztnQ0FDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzs0QkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMifQ==