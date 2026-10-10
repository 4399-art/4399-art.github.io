import { defineComponent, h, resolveComponent } from "vue";
import PageInfo from "@theme-hope/components/info/PageInfo";
import { useData } from "@theme-hope/composables/useData";
import { usePageInfo } from "@theme-hope/composables/usePageInfo";
import "../../styles/base/page-title.scss";
export default defineComponent({
    name: "PageTitle",
    setup() {
        const { frontmatter, page, themeLocale } = useData();
        const { info, items } = usePageInfo();
        return () => h("div", { class: "vp-page-title" }, [
            h("h1", [
                themeLocale.value.titleIcon === false
                    ? null
                    : h(resolveComponent("VPIcon"), { icon: frontmatter.value.icon }),
                page.value.title,
            ]),
            h(PageInfo, {
                info: info.value,
                items: items.value,
            }),
            h("hr"),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZVRpdGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jhc2UvUGFnZVRpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTNELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEUsT0FBTyxtQ0FBbUMsQ0FBQztBQUUzQyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsV0FBVztJQUVqQixLQUFLO1FBQ0gsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDckQsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztRQUV0QyxPQUFPLEdBQVUsRUFBRSxDQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFO1lBQ25DLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ04sV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSztvQkFDbkMsQ0FBQyxDQUFDLElBQUk7b0JBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7YUFDakIsQ0FBQztZQUNGLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDbkIsQ0FBQztZQUNGLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDUixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=