import { isString } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { useData } from "@theme-hope/composables/useData";
import { usePageAuthor } from "@theme-hope/composables/usePageInfo";
import "../../styles/base/page-footer.scss";
export default defineComponent({
    name: "PageFooter",
    setup() {
        const { frontmatter, theme, themeLocale } = useData();
        const author = usePageAuthor();
        const enabled = computed(() => {
            const { copyright, footer } = frontmatter.value;
            return (
            // footer is not disabled
            // oxlint-disable-next-line typescript/prefer-nullish-coalescing
            footer !== false && Boolean(copyright || footer || themeLocale.value.displayFooter));
        });
        const footer = computed(() => {
            // oxlint-disable-next-line no-shadow
            const { footer } = frontmatter.value;
            return isString(footer) ? footer : (themeLocale.value.footer ?? "");
        });
        const authorText = computed(() => author.value.map(({ name }) => name).join(", "));
        const getCopyrightText = (license) => `Copyright © ${new Date().getFullYear()} ${authorText.value} ${license ? `${license} Licensed` : ""}`;
        const copyright = computed(() => {
            // oxlint-disable-next-line no-shadow
            const { copyright, license = "" } = frontmatter.value;
            const { license: globalLicense } = theme.value;
            const { copyright: globalCopyright } = themeLocale.value;
            return (copyright ??
                (license
                    ? getCopyrightText(license)
                    : (globalCopyright ??
                        (authorText.value || globalLicense ? getCopyrightText(globalLicense) : false))));
        });
        return () => enabled.value
            ? h("footer", { class: "vp-footer-wrapper", "vp-footer": "" }, [
                footer.value ? h("div", { class: "vp-footer", innerHTML: footer.value }) : null,
                copyright.value
                    ? h("div", {
                        class: "vp-copyright",
                        innerHTML: copyright.value,
                    })
                    : null,
            ])
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9iYXNlL1BhZ2VGb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXBFLE9BQU8sb0NBQW9DLENBQUM7QUFFNUMsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLFlBQVk7SUFFbEIsS0FBSztRQUNILE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBRS9CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDNUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRWhELE9BQU87WUFDTCx5QkFBeUI7WUFDekIsZ0VBQWdFO1lBQ2hFLE1BQU0sS0FBSyxLQUFLLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxNQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FDcEYsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMzQixxQ0FBcUM7WUFDckMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFckMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxPQUFnQixFQUFVLEVBQUUsQ0FDcEQsZUFBZSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLElBQ3pELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFDcEMsRUFBRSxDQUFDO1FBRUwsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUM5QixxQ0FBcUM7WUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0RCxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRXpELE9BQU8sQ0FDTCxTQUFTO2dCQUNULENBQUMsT0FBTztvQkFDTixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQyxlQUFlO3dCQUNoQixDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNwRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQWlCLEVBQUUsQ0FDeEIsT0FBTyxDQUFDLEtBQUs7WUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQzNELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDL0UsU0FBUyxDQUFDLEtBQUs7b0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7d0JBQ1AsS0FBSyxFQUFFLGNBQWM7d0JBQ3JCLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSztxQkFDM0IsQ0FBQztvQkFDSixDQUFDLENBQUMsSUFBSTthQUNULENBQUM7WUFDSixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9