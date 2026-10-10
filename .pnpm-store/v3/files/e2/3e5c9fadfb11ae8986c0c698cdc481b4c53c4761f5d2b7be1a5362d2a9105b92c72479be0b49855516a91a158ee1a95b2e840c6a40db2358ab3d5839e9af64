import { defineComponent, h } from "vue";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import "../../styles/info/original-info.scss";
export default defineComponent({
    name: "OriginalInfo",
    inheritAttrs: false,
    props: {
        /**
         * Whether the article is original
         *
         * 文章是否是原创
         */
        isOriginal: Boolean,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        return () => props.isOriginal ? h("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JpZ2luYWxJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2luZm8vT3JpZ2luYWxJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUzRSxPQUFPLHNDQUFzQyxDQUFDO0FBRTlDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxjQUFjO0lBRXBCLFlBQVksRUFBRSxLQUFLO0lBRW5CLEtBQUssRUFBRTtRQUNMOzs7O1dBSUc7UUFDSCxVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFFbkMsT0FBTyxHQUFpQixFQUFFLENBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEcsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9