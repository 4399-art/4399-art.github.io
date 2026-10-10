import { defineComponent, h, shallowRef } from "vue";
import { onContentUpdated } from "vuepress/client";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import "../../styles/base/skip-link.scss";
const focusMainContent = ({ target }) => {
    const el = document.querySelector(target.hash);
    if (el) {
        const removeTabIndex = () => {
            el.removeAttribute("tabindex");
            el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
    }
};
export default defineComponent({
    name: "SkipLink",
    props: {
        /** @description Content ID */
        content: {
            type: String,
            default: "main-content",
        },
    },
    setup(props) {
        const themeLocale = useThemeLocale();
        const skipToMainContent = shallowRef();
        onContentUpdated(() => {
            skipToMainContent.value?.focus();
        });
        return () => [
            h("span", {
                ref: skipToMainContent,
                tabindex: "-1",
            }),
            h("a", {
                href: `#${props.content}`,
                class: "vp-skip-link sr-only",
                onClick: focusMainContent,
            }, themeLocale.value.routerLocales.skipToContent),
        ];
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpcExpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmFzZS9Ta2lwTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFLE9BQU8sa0NBQWtDLENBQUM7QUFFMUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFTLEVBQVEsRUFBRTtJQUNuRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFlLE1BQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbkYsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNQLE1BQU0sY0FBYyxHQUFHLEdBQVMsRUFBRTtZQUNoQyxFQUFFLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFFaEIsS0FBSyxFQUFFO1FBQ0wsOEJBQThCO1FBQzlCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FDRjtJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFFckMsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLEVBQW1CLENBQUM7UUFFeEQsZ0JBQWdCLENBQUMsR0FBRyxFQUFFO1lBQ3BCLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBWSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDUixHQUFHLEVBQUUsaUJBQWlCO2dCQUN0QixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUM7WUFDRixDQUFDLENBQ0MsR0FBRyxFQUNIO2dCQUNFLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUIsRUFDRCxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzlDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMifQ==