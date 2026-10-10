import { h } from "vue";
import BloggerInfo from "@theme-hope/components/blog/BloggerInfo";
import InfoList from "@theme-hope/components/blog/InfoList";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import "../../styles/blog/info-panel.scss";
const InfoPanel = (_props, { slots }) => h("aside", { class: "vp-blog-info-wrapper" }, [
    slots.infoBefore?.(),
    h(DropTransition, () => h(BloggerInfo, {}, slots)),
    h(DropTransition, { delay: 0.04 }, () => h(InfoList)),
    slots.infoAfter?.(),
]);
InfoPanel.displayName = "InfoPanel";
export default InfoPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb1BhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jsb2cvSW5mb1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFeEIsT0FBTyxXQUFXLE1BQU0seUNBQXlDLENBQUM7QUFDbEUsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFHL0UsT0FBTyxtQ0FBbUMsQ0FBQztBQUUzQyxNQUFNLFNBQVMsR0FRWCxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFTLEVBQUUsQ0FDL0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxFQUFFO0lBQzVDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRTtJQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRTtDQUNwQixDQUFDLENBQUM7QUFFTCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUVwQyxlQUFlLFNBQVMsQ0FBQyJ9