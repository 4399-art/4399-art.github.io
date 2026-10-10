import { entries, isLinkHttp } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { icons } from "@temp/theme-hope/socialMedia.js";
import { useBlogOptions } from "@theme-hope/composables/blog/useBlogOptions";
import { usePure } from "@theme-hope/composables/usePure";
import "../../styles/blog/social-medias.scss";
export default defineComponent({
    name: "SocialMedias",
    setup() {
        const blogOptions = useBlogOptions();
        const isPure = usePure();
        const mediaLinks = computed(() => entries(blogOptions.value.medias ?? {}).map(([media, config]) => typeof config === "string"
            ? {
                name: media,
                icon: icons[media],
                link: config,
            }
            : Object.assign({ name: media }, config)));
        return () => mediaLinks.value.length > 0
            ? h("div", { class: "vp-social-medias" }, mediaLinks.value.map(({ name, icon, link }) => h("a", {
                class: "vp-social-media",
                href: link,
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": name || "",
                ...(isPure.value ? {} : { "data-balloon-pos": "up" }),
                innerHTML: isLinkHttp(icon)
                    ? `<img class="vp-social-media-icon ${name}-icon" src="${icon}">`
                    : icon,
            })))
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29jaWFsTWVkaWFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvU29jaWFsTWVkaWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sc0NBQXNDLENBQUM7QUFFOUMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGNBQWM7SUFFcEIsS0FBSztRQUNILE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXpCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FDL0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FDOUQsT0FBTyxNQUFNLEtBQUssUUFBUTtZQUN4QixDQUFDLENBQUM7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FDM0MsQ0FDRixDQUFDO1FBRUYsT0FBTyxHQUFpQixFQUFFLENBQ3hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FDQyxLQUFLLEVBQ0wsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFDN0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUM1QyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUNMLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxJQUFJO2dCQUNWLEdBQUcsRUFBRSxxQkFBcUI7Z0JBQzFCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3JELFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUN6QixDQUFDLENBQUMsb0NBQW9DLElBQUksZUFBZSxJQUFJLElBQUk7b0JBQ2pFLENBQUMsQ0FBQyxJQUFJO2FBQ1QsQ0FBQyxDQUNILENBQ0Y7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9