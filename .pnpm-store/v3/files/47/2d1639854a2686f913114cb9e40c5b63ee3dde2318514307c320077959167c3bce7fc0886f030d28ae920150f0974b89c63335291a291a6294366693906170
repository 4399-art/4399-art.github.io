import { h, resolveComponent } from "vue";
import { AutoLink as _AutoLink } from "vuepress/client";
const AutoLink = ({ config, iconSizing = "both" }, { emit, slots }) => {
    const { icon } = config;
    return h(_AutoLink, {
        config,
        onFocusout: () => {
            emit("focusout");
        },
    }, {
        ...slots,
        before: slots.before ??
            (icon
                ? () => h(resolveComponent("VPIcon"), {
                    icon,
                    sizing: iconSizing,
                })
                : null),
    });
};
AutoLink.displayName = "AutoLink";
export default AutoLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b0xpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmFzZS9BdXRvTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLElBQUksU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFrQnhELE1BQU0sUUFBUSxHQVFWLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxHQUFHLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7SUFDdkQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUV4QixPQUFPLENBQUMsQ0FDTixTQUFTLEVBQ1Q7UUFDRSxNQUFNO1FBQ04sVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQixDQUFDO0tBQ0YsRUFDRDtRQUNFLEdBQUcsS0FBSztRQUNSLE1BQU0sRUFDSixLQUFLLENBQUMsTUFBTTtZQUNaLENBQUMsSUFBSTtnQkFDSCxDQUFDLENBQUMsR0FBVSxFQUFFLENBQ1YsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM1QixJQUFJO29CQUNKLE1BQU0sRUFBRSxVQUFVO2lCQUNuQixDQUFDO2dCQUNOLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDWixDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztBQUVsQyxlQUFlLFFBQVEsQ0FBQyJ9