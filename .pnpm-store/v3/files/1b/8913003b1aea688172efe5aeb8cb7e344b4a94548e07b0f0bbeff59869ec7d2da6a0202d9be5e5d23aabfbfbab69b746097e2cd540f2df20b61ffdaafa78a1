import { useScrollLock } from "@vueuse/core";
import { Transition, defineComponent, h, onMounted, onUnmounted, shallowRef, watch } from "vue";
import { onContentUpdated } from "vuepress/client";
import AppearanceSettings from "@theme-hope/components/appearance/AppearanceSettings";
import NavScreenLinks from "@theme-hope/components/navbar/NavScreenLinks";
import { useWindowSize } from "@theme-hope/composables/useWindowSize";
import "@vuepress/helper/transition/fade-in-down.css";
import "../../styles/navbar/nav-screen.scss";
export default defineComponent({
    name: "NavScreen",
    props: {
        /**
         * Whether to show the screen
         *
         * 是否显示
         */
        show: Boolean,
    },
    slots: Object,
    setup(props, { slots }) {
        const { isMobile } = useWindowSize();
        const body = shallowRef();
        const isLocked = useScrollLock(body);
        onContentUpdated(() => {
            isLocked.value = false;
        });
        watch(isMobile, (value) => {
            if (!value && props.show)
                isLocked.value = false;
        });
        onMounted(() => {
            body.value = document.body;
        });
        onUnmounted(() => {
            isLocked.value = false;
        });
        return () => h(Transition, {
            name: "fade-in-down",
            onEnter: () => {
                isLocked.value = true;
            },
            onAfterLeave: () => {
                isLocked.value = false;
            },
        }, () => props.show
            ? h("div", { id: "nav-screen", class: "vp-nav-screen" }, h("div", { class: "vp-nav-screen-container" }, [
                slots.navScreenTop?.(),
                h(NavScreenLinks),
                h("div", { class: "vp-appearance-wrapper" }, h(AppearanceSettings)),
                slots.navScreenBottom?.(),
            ]))
            : null);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2U2NyZWVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL25hdmJhci9OYXZTY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sa0JBQWtCLE1BQU0sc0RBQXNELENBQUM7QUFDdEYsT0FBTyxjQUFjLE1BQU0sOENBQThDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXRFLE9BQU8sOENBQThDLENBQUM7QUFDdEQsT0FBTyxxQ0FBcUMsQ0FBQztBQUU3QyxlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsV0FBVztJQUVqQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUVELEtBQUssRUFBRSxNQUdMO0lBRUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNwQixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsVUFBVSxFQUFlLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtZQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJO2dCQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDZixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBVSxFQUFFLENBQ2pCLENBQUMsQ0FDQyxVQUFVLEVBQ1Y7WUFDRSxJQUFJLEVBQUUsY0FBYztZQUNwQixPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxZQUFZLEVBQUUsR0FBRyxFQUFFO2dCQUNqQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO1NBQ0YsRUFDRCxHQUFHLEVBQUUsQ0FDSCxLQUFLLENBQUMsSUFBSTtZQUNSLENBQUMsQ0FBQyxDQUFDLENBQ0MsS0FBSyxFQUNMLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQzVDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsRUFBRTtnQkFDN0MsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUN0QixDQUFDLENBQUMsY0FBYyxDQUFDO2dCQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ25FLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRTthQUMxQixDQUFDLENBQ0g7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUNYLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=