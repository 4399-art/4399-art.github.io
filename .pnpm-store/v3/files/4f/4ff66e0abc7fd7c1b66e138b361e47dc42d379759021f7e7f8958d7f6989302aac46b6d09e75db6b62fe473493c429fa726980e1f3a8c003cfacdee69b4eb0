import { defineComponent, h } from "vue";
import { PrintIcon } from "@theme-hope/components/info/icons";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useTheme } from "@theme-hope/composables/useTheme";
import "../../styles/info/print-button.scss";
export default defineComponent({
    name: "PrintButton",
    setup() {
        const metaLocale = useMetaLocale();
        const theme = useTheme();
        return () => theme.value.print === false
            ? null
            : h("button", {
                type: "button",
                class: "print-button",
                title: metaLocale.value.print,
                onClick: () => {
                    globalThis.print();
                },
            }, h(PrintIcon));
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmFzZS9QcmludEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RCxPQUFPLHFDQUFxQyxDQUFDO0FBRTdDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxhQUFhO0lBRW5CLEtBQUs7UUFDSCxNQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUV6QixPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSztZQUN6QixDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxDQUFDLENBQ0MsUUFBUSxFQUNSO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxjQUFjO2dCQUNyQixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUM3QixPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUNaLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsQ0FBQzthQUNGLEVBQ0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNiLENBQUM7SUFDVixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=