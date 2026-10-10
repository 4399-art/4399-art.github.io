import { isLinkExternal } from "@vuepress/helper/client";
import { h, resolveComponent } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import "../../styles/home/feature-panel.scss";
const FeatureSection = (props, { slots }) => {
    const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, features, } = props;
    return h("div", {
        class: "vp-feature-wrapper",
    }, [
        bgImage
            ? h("div", {
                class: ["vp-feature-bg", { light: bgImageDark }],
                style: [{ "background-image": `url(${bgImage})` }, bgImageStyle],
            })
            : null,
        bgImageDark
            ? h("div", {
                class: "vp-feature-bg dark",
                style: [{ "background-image": `url(${bgImageDark})` }, bgImageStyle],
            })
            : null,
        h("div", {
            class: "vp-feature",
            style: color ? { color } : {},
        }, [
            slots.image?.(props) ?? [
                image
                    ? h("img", {
                        class: ["vp-feature-image", { light: imageDark }],
                        src: withBase(image),
                        alt: "",
                    })
                    : null,
                imageDark
                    ? h("img", {
                        class: "vp-feature-image dark",
                        src: withBase(imageDark),
                        alt: "",
                    })
                    : null,
            ],
            slots.info?.(props) ?? [
                header ? h("h2", { class: "vp-feature-header" }, header) : null,
                description
                    ? h("div", {
                        class: "vp-feature-description",
                        innerHTML: description,
                    })
                    : null,
            ],
            features.length > 0
                ? h("div", { class: "vp-features" }, features.map(({ icon, title, details, link }) => {
                    const children = [
                        h("h3", { class: "vp-feature-title" }, [
                            h(resolveComponent("VPIcon"), { icon }),
                            h("span", { innerHTML: title }),
                        ]),
                        h("div", {
                            class: "vp-feature-details",
                            innerHTML: details,
                        }),
                    ];
                    return link
                        ? isLinkExternal(link)
                            ? h("a", {
                                class: "vp-feature-item link",
                                href: link,
                                "aria-label": title,
                                target: "_blank",
                            }, children)
                            : h(RouteLink, {
                                class: "vp-feature-item link",
                                to: link,
                                "aria-label": title,
                            }, () => children)
                        : h("div", { class: "vp-feature-item" }, children);
                }))
                : null,
        ]),
    ]);
};
FeatureSection.displayName = "FeaturePanel";
export default FeatureSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZVNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaG9tZS9GZWF0dXJlU2VjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3RELE9BQU8sc0NBQXNDLENBQUM7QUFFOUMsTUFBTSxjQUFjLEdBUWhCLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtJQUN2QixNQUFNLEVBQ0osT0FBTyxFQUNQLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEdBQ1QsR0FBRyxLQUFLLENBQUM7SUFFVixPQUFPLENBQUMsQ0FDTixLQUFLLEVBQ0w7UUFDRSxLQUFLLEVBQUUsb0JBQW9CO0tBQzVCLEVBQ0Q7UUFDRSxPQUFPO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO2dCQUNoRCxLQUFLLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sT0FBTyxHQUFHLEVBQUUsRUFBRSxZQUFZLENBQUM7YUFDakUsQ0FBQztZQUNKLENBQUMsQ0FBQyxJQUFJO1FBQ1IsV0FBVztZQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNQLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLEtBQUssRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxXQUFXLEdBQUcs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