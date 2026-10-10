import { defineComponent, h } from "vue";
import { AuthorIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { usePure } from "@theme-hope/composables/usePure";
import "../../styles/info/author-info.scss";
export default defineComponent({
    name: "AuthorInfo",
    inheritAttrs: false,
    props: {
        /**
         * Author information
         *
         * 作者信息
         */
        author: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const isPure = usePure();
        return () => props.author.length > 0
            ? h("span", {
                class: "page-author-info",
                "aria-label": `${metaLocale.value.author}${isPure.value ? "" : "🖊"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(AuthorIcon),
                h("span", props.author.map((item) => item.url
                    ? h("a", {
                        class: "page-author-item",
                        href: item.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }, item.name)
                    : h("span", { class: "page-author-item" }, item.name))),
                h("span", {
                    property: "author",
                    content: props.author.map((item) => item.name).join(", "),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9ySW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9pbmZvL0F1dGhvckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJMUQsT0FBTyxvQ0FBb0MsQ0FBQztBQUU1QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsWUFBWTtJQUVsQixZQUFZLEVBQUUsS0FBSztJQUVuQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLEtBQStCO1lBQ3JDLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFFekIsT0FBTyxHQUFpQixFQUFFLENBQ3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FDQyxNQUFNLEVBQ047Z0JBQ0UsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDdEQsRUFDRDtnQkFDRSxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNiLENBQUMsQ0FDQyxNQUFNLEVBQ04sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUN4QixJQUFJLENBQUMsR0FBRztvQkFDTixDQUFDLENBQUMsQ0FBQyxDQUNDLEdBQUcsRUFDSDt3QkFDRSxLQUFLLEVBQUUsa0JBQWtCO3dCQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2QsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLEdBQUcsRUFBRSxxQkFBcUI7cUJBQzNCLEVBQ0QsSUFBSSxDQUFDLElBQUksQ0FDVjtvQkFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDeEQsQ0FDRjtnQkFDRCxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNSLFFBQVEsRUFBRSxRQUFRO29CQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUMxRCxDQUFDO2FBQ0gsQ0FDRjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=