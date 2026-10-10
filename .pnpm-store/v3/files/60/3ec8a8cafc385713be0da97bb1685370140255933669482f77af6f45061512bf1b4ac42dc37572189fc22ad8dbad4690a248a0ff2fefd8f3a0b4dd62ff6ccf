import { defineComponent, h } from "vue";
import { generateIndexFromHash } from "vuepress-shared/client";
import { TagIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useNavigate } from "@theme-hope/composables/useNavigate";
import { usePure } from "@theme-hope/composables/usePure";
import cssVariables from "../../styles/variables.module.scss";
import "../../styles/info/tag-info.scss";
export default defineComponent({
    name: "TagInfo",
    inheritAttrs: false,
    props: {
        /**
         * Tag information
         *
         * 标签信息
         */
        tag: Array,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        const navigate = useNavigate();
        const isPure = usePure();
        return () => props.tag?.length
            ? h("span", {
                class: "page-tag-info",
                "aria-label": `${metaLocale.value.tag}${isPure.value ? "" : "🏷"}`,
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
            }, [
                h(TagIcon),
                props.tag.map(({ name, path }) => h("span", {
                    class: [
                        "page-tag-item",
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
                    property: "keywords",
                    content: props.tag.map(({ name }) => name).join(","),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnSW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9pbmZvL1RhZ0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzFELE9BQU8sWUFBWSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8saUNBQWlDLENBQUM7QUFFekMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFNBQVM7SUFFZixZQUFZLEVBQUUsS0FBSztJQUVuQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsR0FBRyxFQUFFLEtBQTRCO0tBQ2xDO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FDQyxNQUFNLEVBQ047Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNsRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3RELEVBQ0Q7Z0JBQ0UsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFFVixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FDL0IsQ0FBQyxDQUNDLE1BQU0sRUFDTjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0wsZUFBZTt3QkFDZjs0QkFDRSxDQUFDLFFBQVEscUJBQXFCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3ZFLENBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ2YsU0FBUyxFQUFFLElBQUk7eUJBQ2hCO3FCQUNGO29CQUNELElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRTt3QkFDWixJQUFJLElBQUk7NEJBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixDQUFDO2lCQUNGLEVBQ0QsSUFBSSxDQUNMLENBQ0Y7Z0JBQ0QsQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDUixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDckQsQ0FBQzthQUNILENBQ0Y7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9