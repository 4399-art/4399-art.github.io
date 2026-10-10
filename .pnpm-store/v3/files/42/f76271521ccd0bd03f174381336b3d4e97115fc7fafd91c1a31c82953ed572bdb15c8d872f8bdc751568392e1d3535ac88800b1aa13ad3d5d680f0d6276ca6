import { hasGlobalComponent, isNumber } from "@vuepress/helper/client";
import { useElementHover, watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, ref, resolveComponent } from "vue";
import { Content } from "vuepress/client";
import { useMetaInfo } from "@theme-hope/composables/useMetaInfo";
import { useTheme } from "@theme-hope/composables/useTheme";
import "../../styles/base/markdown-content.scss";
export default defineComponent({
    name: "MarkdownContent",
    props: {
        /** whether use customized layout */
        custom: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const theme = useTheme();
        const { changelog, contributors } = useMetaInfo();
        const contentElement = ref();
        const isHovered = useElementHover(contentElement, {
            delayEnter: isNumber(theme.value.focus) ? theme.value.focus : 1500,
            delayLeave: 0,
        });
        const enableFocus = computed(() => Boolean(theme.value.focus ?? theme.value.pure) && isHovered.value);
        onMounted(() => {
            const html = document.documentElement;
            watchImmediate(enableFocus, (value) => {
                html.classList.toggle("is-focusing", value);
            });
        });
        return () => h("div", { class: { custom: props.custom }, "vp-content": "" }, [
            slots.contentBefore?.(),
            h(Content, {
                ref: contentElement,
                id: "markdown-content",
            }),
            slots.contentAfter?.(),
            changelog.value && hasGlobalComponent("GitChangelog")
                ? h(resolveComponent("GitChangelog"))
                : null,
            contributors.value === "content" && hasGlobalComponent("GitContributors")
                ? h(resolveComponent("GitContributors"))
                : null,
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFya2Rvd25Db250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jhc2UvTWFya2Rvd25Db250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RCxPQUFPLHlDQUF5QyxDQUFDO0FBRWpELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxpQkFBaUI7SUFFdkIsS0FBSyxFQUFFO1FBQ0wsb0NBQW9DO1FBQ3BDLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBRUQsS0FBSyxFQUFFLE1BR0w7SUFFRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFFbEQsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFlLENBQUM7UUFFMUMsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsRUFBRTtZQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2xFLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUMxQixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUN4RSxDQUFDO1FBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFFdEMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBVSxFQUFFLENBQ2pCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5RCxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDVCxHQUFHLEVBQUUsY0FBYztnQkFDbkIsRUFBRSxFQUFFLGtCQUFrQjthQUN2QixDQUFDO1lBQ0YsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3RCLFNBQVMsQ0FBQyxLQUFLLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsSUFBSTtZQUNSLFlBQVksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO2dCQUN2RSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9