import { computed, defineComponent, h, onMounted, ref } from "vue";
import { useRouter } from "vuepress/client";
import MainLayout from "@theme-hope/components/base/MainLayout";
import SkipLink from "@theme-hope/components/base/SkipLink";
import { useData } from "@theme-hope/composables/useData";
export default defineComponent({
    name: "NotFound",
    slots: Object,
    setup(_props, { slots }) {
        const { routeLocale, theme, themeLocale } = useData();
        const router = useRouter();
        const isMounted = ref(false);
        const expectedRouterLocale = computed(() => theme.value.locales[isMounted.value ? routeLocale.value : "/"].routerLocales);
        const getMsg = () => {
            if (!isMounted.value)
                return expectedRouterLocale.value.notFoundMsg[0];
            const messages = expectedRouterLocale.value.notFoundMsg;
            return messages[Math.floor(Math.random() * messages.length)];
        };
        onMounted(() => {
            isMounted.value = true;
        });
        return () => [
            h(SkipLink),
            h(MainLayout, { noSidebar: true }, {
                ...slots,
                default: () => h("main", { id: "main-content", class: "vp-page not-found" }, slots.default?.() ?? [
                    h("div", { class: "not-found-hint" }, [
                        h("p", { class: "error-code" }, "404"),
                        h("h1", { class: "error-title" }, expectedRouterLocale.value.notFoundTitle),
                        h("p", { class: "error-hint" }, getMsg()),
                    ]),
                    h("div", { class: "actions" }, [
                        h("button", {
                            type: "button",
                            class: "action-button",
                            onClick: () => {
                                globalThis.history.go(-1);
                            },
                        }, expectedRouterLocale.value.back),
                        h("button", {
                            type: "button",
                            class: "action-button",
                            onClick: () => {
                                void router.push(themeLocale.value.home ?? routeLocale.value);
                            },
                        }, expectedRouterLocale.value.home),
                    ]),
                ]),
            }),
        ];
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90Rm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2xheW91dHMvYmFzZS9Ob3RGb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxVQUFVLE1BQU0sd0NBQXdDLENBQUM7QUFDaEUsT0FBTyxRQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxVQUFVO0lBRWhCLEtBQUssRUFBRSxNQU1MO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQ25DLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FDbkYsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLEdBQVcsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZFLE1BQU0sUUFBUSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFFeEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDO1FBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFZLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ1gsQ0FBQyxDQUNDLFVBQVUsRUFDVixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFDbkI7Z0JBQ0UsR0FBRyxLQUFLO2dCQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixDQUFDLENBQ0MsTUFBTSxFQUNOLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFDbEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUk7b0JBQ25CLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTt3QkFDcEMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLENBQUM7d0JBQ3RDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0UsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztxQkFDMUMsQ0FBQztvQkFDRixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFO3dCQUM3QixDQUFDLENBQ0MsUUFBUSxFQUNSOzRCQUNFLElBQUksRUFBRSxRQUFROzRCQUNkLEtBQUssRUFBRSxlQUFlOzRCQUN0QixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLENBQUM7eUJBQ0YsRUFDRCxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQzt3QkFDRCxDQUFDLENBQ0MsUUFBUSxFQUNSOzRCQUNFLElBQUksRUFBRSxRQUFROzRCQUNkLEtBQUssRUFBRSxlQUFlOzRCQUN0QixPQUFPLEVBQUUsR0FBRyxFQUFFO2dDQUNaLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2hFLENBQUM7eUJBQ0YsRUFDRCxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQztxQkFDRixDQUFDO2lCQUNILENBQ0Y7YUFDSixDQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFDLENBQUMifQ==