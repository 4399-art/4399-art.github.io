import { isPlainObject, isSlotContentEmpty, useHeaders } from "@vuepress/helper/client";
import { useToggle, watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, ref, shallowRef } from "vue";
import { ClientOnly, RouteLink, useRoute } from "vuepress/client";
import PrintButton from "@theme-hope/components/base/PrintButton";
import { useMetaLocale } from "@theme-hope/composables/info/useMetaLocale";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/info/toc.scss";
const DEFAULT_TOC_OPTIONS = {
    selector: [
        ...Array.from({ length: 6 }).map((_, i) => `#markdown-content > h${i + 1}`),
        "[vp-content] > h2",
    ].join(", "),
    levels: "deep",
    ignore: [".vp-badge", ".vp-icon"],
};
export default defineComponent({
    name: "TOC",
    props: {
        /**
         * TOC items config
         *
         * TOC 项目配置
         */
        items: Array,
    },
    slots: Object,
    setup(props, { slots }) {
        const { frontmatter, themeLocale } = useData();
        const tocOptions = computed(() => {
            const config = frontmatter.value.toc ?? themeLocale.value.toc;
            return isPlainObject(config)
                ? { ...DEFAULT_TOC_OPTIONS, ...config }
                : (config ?? true)
                    ? DEFAULT_TOC_OPTIONS
                    : // oxlint-disable-next-line no-undefined
                        undefined;
        });
        const headers = useHeaders(tocOptions);
        const route = useRoute();
        const metaLocale = useMetaLocale();
        const [isExpanded, toggleExpanded] = useToggle();
        const toc = shallowRef();
        const tocMarkerTop = ref("-2rem");
        const scrollTo = (top) => {
            toc.value?.scrollTo({ top, behavior: "smooth" });
        };
        const updateTocMarker = () => {
            if (toc.value) {
                const activeTocItem = document.querySelector(".vp-toc-item.active");
                if (activeTocItem) {
                    tocMarkerTop.value = `${
                    // Active toc item top
                    activeTocItem.getBoundingClientRect().top -
                        // Toc top
                        toc.value.getBoundingClientRect().top +
                        // Toc scroll top
                        toc.value.scrollTop}px`;
                }
                else {
                    tocMarkerTop.value = "-2rem";
                }
            }
            else {
                tocMarkerTop.value = "-2rem";
            }
        };
        onMounted(() => {
            // Scroll to active toc item
            watchImmediate(() => route.hash, (hash) => {
                if (toc.value) {
                    // Get the active toc item DOM, whose href equals to the current route
                    const activeTocItem = document.querySelector(`#toc a.vp-toc-link[href$="${hash}"]`);
                    if (!activeTocItem)
                        return;
                    // Get the top and height of the toc
                    const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
                    // Get the top and height of the active toc item
                    const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
                    // When the active toc item overflows the top edge of toc
                    if (activeTocItemTop < tocTop) {
                        // Scroll to the top edge of toc
                        scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
                    }
                    // When the active toc item overflows the bottom edge of toc
                    else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight) {
                        // Scroll to the bottom edge of toc
                        scrollTo(toc.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
                    }
                }
            }, { flush: "post" });
            watchImmediate(() => route.fullPath, updateTocMarker, {
                flush: "post",
            });
        });
        const renderHeader = ({ title, level, slug }) => h(RouteLink, {
            to: `#${slug}`,
            class: ["vp-toc-link", `level${level}`],
            onClick: () => {
                toggleExpanded();
            },
        }, () => title);
        const renderChildren = (pageHeaders) => pageHeaders.length > 0
            ? h("ul", { class: "vp-toc-list" }, pageHeaders.map((header) => {
                const children = renderChildren(header.children);
                return [
                    h("li", {
                        class: ["vp-toc-item", { active: route.hash === `#${header.slug}` }],
                    }, renderHeader(header)),
                    children ? h("li", children) : null,
                ];
            }))
            : null;
        return () => tocOptions.value || props.items?.length
            ? h(ClientOnly, () => {
                const tocHeaders = props.items?.length
                    ? renderChildren(props.items)
                    : renderChildren(headers.value);
                const defaultContent = slots.toc?.(headers.value) ??
                    (tocHeaders
                        ? [
                            h("div", {
                                class: "vp-toc-header",
                                onClick: () => {
                                    toggleExpanded();
                                },
                            }, [
                                metaLocale.value.toc,
                                h(PrintButton),
                                h("div", {
                                    class: ["arrow", isExpanded.value ? "down" : "end"],
                                }),
                            ]),
                            h("div", {
                                class: ["vp-toc-wrapper", isExpanded.value ? "open" : ""],
                                ref: toc,
                            }, [
                                tocHeaders,
                                h("div", {
                                    class: "vp-toc-marker",
                                    style: {
                                        top: tocMarkerTop.value,
                                    },
                                }),
                            ]),
                        ]
                        : null);
                const beforeContent = slots.tocBefore?.();
                const afterContent = slots.tocAfter?.();
                const isTOCEmpty = isSlotContentEmpty(defaultContent) &&
                    isSlotContentEmpty(beforeContent) &&
                    isSlotContentEmpty(afterContent);
                return isTOCEmpty
                    ? null
                    : h("div", { class: "vp-toc-placeholder" }, [
                        h("aside", { id: "toc", "vp-toc": "" }, [
                            beforeContent,
                            defaultContent,
                            afterContent,
                        ]),
                    ]);
            })
            : null;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVE9DLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jhc2UvVE9DLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE9BQU8sV0FBVyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHMUQsT0FBTyw0QkFBNEIsQ0FBQztBQUVwQyxNQUFNLG1CQUFtQixHQUFzQjtJQUM3QyxRQUFRLEVBQUU7UUFDUixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQzNFLG1CQUFtQjtLQUNwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDWixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7Q0FDbEMsQ0FBQztBQUVGLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxLQUFLO0lBRVgsS0FBSyxFQUFFO1FBQ0w7Ozs7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