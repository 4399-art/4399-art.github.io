import { computed, defineComponent, h } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/navbar/navbar-brand.scss";
export default defineComponent({
    name: "NavbarBrand",
    setup() {
        const { routeLocale, siteLocale, themeLocale } = useData();
        const siteBrandLink = computed(() => themeLocale.value.home ?? routeLocale.value);
        const siteTitle = computed(() => siteLocale.value.title);
        const siteBrandTitle = computed(() => themeLocale.value.navbarTitle ?? siteTitle.value);
        const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
        const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
        return () => h(RouteLink, {
            to: siteBrandLink.value,
            class: "vp-brand",
            "aria-label": themeLocale.value.routerLocales.home,
        }, () => [
            siteBrandLogo.value
                ? h("img", {
                    class: ["vp-nav-logo", { light: Boolean(siteBrandLogoDark.value) }],
                    src: siteBrandLogo.value,
                    alt: "",
                })
                : null,
            siteBrandLogoDark.value
                ? h("img", {
                    class: ["vp-nav-logo dark"],
                    src: siteBrandLogoDark.value,
                    alt: "",
                })
                : null,
            siteBrandTitle.value
                ? h("span", {
                    class: [
                        "vp-site-name",
                        {
                            "hide-in-pad": siteBrandLogo.value && (themeLocale.value.hideSiteNameOnMobile ?? true),
                        },
                    ],
                }, siteBrandTitle.value)
                : null,
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyQnJhbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvbmF2YmFyL05hdmJhckJyYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUxRCxPQUFPLHVDQUF1QyxDQUFDO0FBRS9DLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxhQUFhO0lBRW5CLEtBQUs7UUFDSCxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUUzRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxGLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEYsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNsQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakUsQ0FBQztRQUVGLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUN0QyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekUsQ0FBQztRQUVGLE9BQU8sR0FBVSxFQUFFLENBQ2pCLENBQUMsQ0FDQyxTQUFTLEVBQ1Q7WUFDRSxFQUFFLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDdkIsS0FBSyxFQUFFLFVBQVU7WUFDakIsWUFBWSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUk7U0FDbkQsRUFDRCxHQUFHLEVBQUUsQ0FBQztZQUNKLGFBQWEsQ0FBQyxLQUFLO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDUCxLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ25FLEdBQUcsRUFBRSxhQUFhLENBQUMsS0FBSztvQkFDeEIsR0FBRyxFQUFFLEVBQUU7aUJBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsSUFBSTtZQUNSLGlCQUFpQixDQUFDLEtBQUs7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUNQLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUMzQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsS0FBSztvQkFDNUIsR0FBRyxFQUFFLEVBQUU7aUJBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsSUFBSTtZQUNSLGNBQWMsQ0FBQyxLQUFLO2dCQUNsQixDQUFDLENBQUMsQ0FBQyxDQUNDLE1BQU0sRUFDTjtvQkFDRSxLQUFLLEVBQUU7d0JBQ0wsY0FBYzt3QkFDZDs0QkFDRSxhQUFhLEVBQ1gsYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDO3lCQUMxRTtxQkFDRjtpQkFDRixFQUNELGNBQWMsQ0FBQyxLQUFLLENBQ3JCO2dCQUNILENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FDRixDQUFDO0lBQ04sQ0FBQztDQUNGLENBQUMsQ0FBQyJ9