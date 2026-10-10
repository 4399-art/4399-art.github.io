import { hasGlobalComponent } from "@vuepress/helper/client";
import { useContributors, useLastUpdated } from "@vuepress/plugin-git/client";
import { defineComponent, h } from "vue";
import AutoLink from "@theme-hope/components/base/AutoLink";
import EditIcon from "@theme-hope/components/base/EditIcon";
import { useEditLink } from "@theme-hope/composables/info/useEditLink";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useMetaInfo } from "@theme-hope/composables/useMetaInfo";
import "../../styles/info/page-meta.scss";
export default defineComponent({
    name: "PageMeta",
    setup() {
        const metaInfo = useMetaInfo();
        const contributors = useContributors();
        const editLink = useEditLink();
        const lastUpdated = useLastUpdated(metaInfo.lastUpdated);
        const metaLocale = useMetaLocale();
        return () => h("footer", { class: "vp-page-meta" }, [
            editLink.value
                ? h("div", { class: "vp-meta-item edit-link" }, h(AutoLink, { class: "vp-meta-label", config: editLink.value }, { before: () => h(EditIcon) }))
                : null,
            h("div", { class: "vp-meta-item git-info" }, [
                (!metaInfo.changelog.value || !hasGlobalComponent("GitChangelog")) && lastUpdated.value
                    ? h("div", { class: "update-time" }, [
                        h("span", { class: "vp-meta-label" }, `${lastUpdated.value.locale}: `),
                        h("time", {
                            class: "vp-meta-info",
                            datetime: lastUpdated.value.iso,
                            "data-allow-mismatch": "",
                        }, lastUpdated.value.text),
                    ])
                    : null,
                metaInfo.contributors.value &&
                    metaInfo.contributors.value !== "content" &&
                    contributors.value.length > 0
                    ? h("div", { class: "contributors" }, [
                        h("span", { class: "vp-meta-label" }, `${metaLocale.value.contributors}: `),
                        contributors.value.map(({ email, name }, index, items) => [
                            h("span", { class: "vp-meta-info", title: `email: ${email}` }, name),
                            index === items.length - 1 ? "" : ",",
                        ]),
                    ])
                    : null,
            ]),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZU1ldGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaW5mby9QYWdlTWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRXpDLE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sUUFBUSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRWxFLE9BQU8sa0NBQWtDLENBQUM7QUFFMUMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVU7SUFFaEIsS0FBSztRQUNILE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQy9CLE1BQU0sWUFBWSxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQy9CLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFFbkMsT0FBTyxHQUFVLEVBQUUsQ0FDakIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUNyQyxRQUFRLENBQUMsS0FBSztnQkFDWixDQUFDLENBQUMsQ0FBQyxDQUNDLEtBQUssRUFDTCxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxFQUNuQyxDQUFDLENBQ0MsUUFBUSxFQUNSLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUNsRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDOUIsQ0FDRjtnQkFDSCxDQUFDLENBQUMsSUFBSTtZQUNSLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFBRTtnQkFDM0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSztvQkFDckYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUU7d0JBQ2pDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUN0RSxDQUFDLENBQ0MsTUFBTSxFQUNOOzRCQUNFLEtBQUssRUFBRSxjQUFjOzRCQUNyQixRQUFRLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHOzRCQUMvQixxQkFBcUIsRUFBRSxFQUFFO3lCQUMxQixFQUNELFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN2QjtxQkFDRixDQUFDO29CQUNKLENBQUMsQ0FBQyxJQUFJO2dCQUNSLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSztvQkFDM0IsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssU0FBUztvQkFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUU7d0JBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDO3dCQUMzRSxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOzRCQUN4RCxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQzs0QkFDcEUsS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUc7eUJBQ3RDLENBQUM7cUJBQ0gsQ0FBQztvQkFDSixDQUFDLENBQUMsSUFBSTthQUNULENBQUM7U0FDSCxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=