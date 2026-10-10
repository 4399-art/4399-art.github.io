import { isLinkExternal } from "@vuepress/helper/client";
import { h, resolveComponent } from "vue";
import { RouteLink, withBase } from "vuepress/client";
import "../../styles/home/highlight-panel.scss";
const HighlightSection = (props, { slots }) => {
    const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, highlights = [], type = "un-order", } = props;
    return h("div", {
        class: "vp-highlight-wrapper",
        style: color ? { color } : {},
    }, [
        bgImage
            ? h("div", {
                class: ["vp-highlight-bg", { light: bgImageDark }],
                style: [{ "background-image": `url(${bgImage})` }, bgImageStyle],
            })
            : null,
        bgImageDark
            ? h("div", {
                class: "vp-highlight-bg dark",
                style: [{ "background-image": `url(${bgImageDark})` }, bgImageStyle],
            })
            : null,
        h("div", { class: "vp-highlight" }, [
            slots.image?.(props) ?? [
                image
                    ? h("img", {
                        class: ["vp-highlight-image", { light: imageDark }],
                        src: withBase(image),
                        alt: "",
                    })
                    : null,
                imageDark
                    ? h("img", {
                        class: "vp-highlight-image dark",
                        src: withBase(imageDark),
                        alt: "",
                    })
                    : null,
            ],
            slots.info?.(props) ?? [
                h("div", { class: "vp-highlight-info-wrapper" }, h("div", { class: "vp-highlight-info" }, [
                    header
                        ? h("h2", {
                            class: "vp-highlight-header",
                            innerHTML: header,
                        })
                        : null,
                    description
                        ? h("div", {
                            class: "vp-highlight-description",
                            innerHTML: description,
                        })
                        : null,
                    slots.highlights?.(highlights) ??
                        h(type === "order" ? "ol" : type === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, highlights.map(({ icon, title, details, link }) => {
                            const children = [
                                h(type === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [
                                    icon
                                        ? h(resolveComponent("VPIcon"), {
                                            class: "vp-highlight-icon",
                                            icon,
                                        })
                                        : null,
                                    h("span", { innerHTML: title }),
                                ]),
                                details
                                    ? h(type === "no-order" ? "dd" : "div", {
                                        class: "vp-highlight-details",
                                        innerHTML: details,
                                    })
                                    : null,
                            ];
                            return h(type === "no-order" ? "div" : "li", {
                                class: ["vp-highlight-item-wrapper", { link }],
                            }, link
                                ? isLinkExternal(link)
                                    ? h("a", {
                                        class: "vp-highlight-item link",
                                        href: link,
                                        "aria-label": title,
                                        target: "_blank",
                                    }, children)
                                    : h(RouteLink, {
                                        class: "vp-highlight-item link",
                                        to: link,
                                        "aria-label": title,
                                    }, () => children)
                                : h("div", { class: "vp-highlight-item" }, children));
                        })),
                ])),
            ],
        ]),
    ]);
};
HighlightSection.displayName = "HighlightSection";
export default HighlightSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlnaGxpZ2h0U2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ob21lL0hpZ2hsaWdodFNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU90RCxPQUFPLHdDQUF3QyxDQUFDO0FBRWhELE1BQU0sZ0JBQWdCLEdBUWxCLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQVMsRUFBRTtJQUM5QixNQUFNLEVBQ0osT0FBTyxFQUNQLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEdBQUcsRUFBRSxFQUNmLElBQUksR0FBRyxVQUFVLEdBQ2xCLEdBQUcsS0FBSyxDQUFDO0lBRVYsT0FBTyxDQUFDLENBQ04sS0FBSyxFQUNMO1FBQ0UsS0FBSyxFQUFFLHNCQUFzQjtRQUM3QixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQzlCLEVBQ0Q7UUFDRSxPQUFPO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQ2xELEtBQUssRUFBRSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxPQUFPLEdBQUcsRUFBRSxFQUFFLFlBQVksQ0FBQzthQUNqRSxDQUFDO1lBQ0osQ0FBQyxDQUFDLElBQUk7UUFDUixXQUFXO1lB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