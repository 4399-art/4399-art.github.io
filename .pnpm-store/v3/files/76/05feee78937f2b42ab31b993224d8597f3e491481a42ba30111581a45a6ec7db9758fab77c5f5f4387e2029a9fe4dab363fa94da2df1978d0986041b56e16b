import { defineComponent, h } from "vue";
import { generateIndexFromHash } from "vuepress-shared/client";
import { CategoryIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { usePure } from "@theme-hope/composables/usePure";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/info/category-info.scss";
export default defineComponent({
    name: "CategoryInfo",
    inheritAttrs: false,
    props: {
        /**
         * Category information
         *
         * 分类信息
         */
        category: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const navigate = useNavigate();
        const isPure = usePure();
        return () => props.category.length > 0
            ? h("span", {
                class: "page-category-info",
                "aria-label": `${metaLocale.value.category}${isPure.value ? "" : "🌈"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(CategoryIcon),
                props.category.map(({ name, path }) => h("span", {
                    class: [
                        "page-category-item",
                        {
                            [`color${generateIndexFromHash(name, Number(cssVariables.colorNumber))}`]: !isPure.value,
                            clickable: path,
                        },
                    ],
                    role: path ? "navigation" : "",
                    onClick: () => {
                        if (path)
                            navigate(path);
                    },
                }, name)),
                h("meta", {
                    property: "articleSection",
                    content: props.category.map(({ name }) => name).join(","),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2luZm8vQ2F0ZWdvcnlJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUcxRCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLHNDQUFzQyxDQUFDO0FBRTlDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxjQUFjO0lBRXBCLFlBQVksRUFBRSxLQUFLO0lBRW5CLEtBQUssRUFBRTtRQUNMOzs7O1dBSUc7UUFDSCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsS0FBaUM7WUFDdkMsUUFBUSxFQUFFLElBQUk7U0FDZjtLQUNGO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxDQUNDLE1BQU0sRUFDTjtnQkFDRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixZQUFZLEVBQUUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN0RCxFQUNEO2dCQUNFLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBRWYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQ3BDLENBQUMsQ0FDQyxNQUFNLEVBQ047b0JBQ0UsS0FBSyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEI7NEJBQ0UsQ0FBQyxRQUFRLHFCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN2RSxDQUFDLE1BQU0sQ0FBQyxLQUFLOzRCQUNmLFNBQVMsRUFBRSxJQUFJO3lCQUNoQjtxQkFDRjtvQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ1osSUFBSSxJQUFJOzRCQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztpQkFDRixFQUNELElBQUksQ0FDTCxDQUNGO2dCQUNELENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDMUQsQ0FBQzthQUNILENBQ0Y7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9