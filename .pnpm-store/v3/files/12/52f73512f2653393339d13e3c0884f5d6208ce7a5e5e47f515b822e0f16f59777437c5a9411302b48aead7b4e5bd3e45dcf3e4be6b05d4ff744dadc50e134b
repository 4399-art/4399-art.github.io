import { isString } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { withBase } from "vuepress/client";
import AutoLink from "@theme-hope/components/base/AutoLink";
import HeroSlideDownButton from "@theme-hope/components/home/HeroSlideDownButton";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/home/hero-info.scss";
export default defineComponent({
    name: "HeroInfo",
    slots: Object,
    setup(_props, { slots }) {
        const { frontmatter, siteLocale } = useData();
        const info = computed(() => {
            const { heroText, tagline, heroStyle, heroFullScreen = false } = frontmatter.value;
            return {
                text: heroText ?? (siteLocale.value.title || "Hello"),
                tagline: tagline ?? siteLocale.value.description,
                style: heroStyle ?? null,
                isFullScreen: heroFullScreen,
            };
        });
        const image = computed(() => {
            const { heroImage, heroImageDark, heroAlt, heroImageStyle } = frontmatter.value;
            return {
                image: heroImage ? withBase(heroImage) : null,
                imageDark: heroImageDark ? withBase(heroImageDark) : null,
                style: heroImageStyle ?? null,
                alt: heroAlt ?? "",
            };
        });
        const bg = computed(() => {
            const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
            return {
                image: isString(bgImage) ? withBase(bgImage) : null,
                imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
                style: bgImageStyle ?? null,
            };
        });
        const actions = computed(() => frontmatter.value.actions ?? []);
        return () => h("header", {
            class: ["vp-hero-info-wrapper", { "hero-fullscreen": info.value.isFullScreen }],
            style: info.value.style,
        }, [
            slots.heroBg?.(bg.value) ?? [
                bg.value.image
                    ? h("div", {
                        class: ["vp-hero-mask", { light: bg.value.imageDark }],
                        style: [{ "background-image": `url(${bg.value.image})` }, bg.value.style],
                    })
                    : null,
                bg.value.imageDark
                    ? h("div", {
                        class: "vp-hero-mask dark",
                        style: [
                            {
                                "background-image": `url(${bg.value.imageDark})`,
                            },
                            bg.value.style,
                        ],
                    })
                    : null,
            ],
            h("div", { class: "vp-hero-info" }, [
                slots.heroLogo?.(image.value) ??
                    h(DropTransition, { appear: true, group: true }, () => {
                        const { image: imageLight, imageDark, style: imageStyle, alt } = image.value;
                        return [
                            imageLight
                                ? h("img", {
                                    key: "light",
                                    class: ["vp-hero-image", { light: imageDark }],
                                    style: imageStyle,
                                    src: imageLight,
                                    alt: alt,
                                })
                                : null,
                            imageDark
                                ? h("img", {
                                    key: "dark",
                                    class: "vp-hero-image dark",
                                    style: imageStyle,
                                    src: imageDark,
                                    alt: alt,
                                })
                                : null,
                        ];
                    }),
                slots.heroInfo?.(info.value) ??
                    h("div", { class: "vp-hero-infos" }, [
                        info.value.text
                            ? h(DropTransition, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title", class: "vp-hero-title" }, info.value.text))
                            : null,
                        info.value.tagline
                            ? h(DropTransition, { appear: true, delay: 0.08 }, () => h("div", {
                                id: "main-description",
                                innerHTML: info.value.tagline,
                            }))
                            : null,
                        actions.value.length > 0
                            ? h(DropTransition, { appear: true, delay: 0.12 }, () => h("p", { class: "vp-hero-actions" }, actions.value.map((action) => h(AutoLink, {
                                class: [
                                    "vp-hero-action",
                                    action.type ?? "default",
                                    "no-external-link-icon",
                                ],
                                config: action,
                            }))))
                            : null,
                    ]),
            ]),
            info.value.isFullScreen
                ? h(HeroSlideDownButton, {
                    onClick: () => {
                        window.scrollTo({
                            top: window.innerHeight -
                                (document.querySelector("[vp-navbar]")?.clientHeight ?? 0),
                            behavior: "smooth",
                        });
                    },
                })
                : null,
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyb0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvaG9tZS9IZXJvSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLFFBQVEsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RCxPQUFPLG1CQUFtQixNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVMxRCxPQUFPLGtDQUFrQyxDQUFDO0FBSTFDLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxVQUFVO0lBRWhCLEtBQUssRUFBRSxNQUlMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU8sRUFBbUMsQ0FBQztRQUUvRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEdBQUcsS0FBSyxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUVuRixPQUFPO2dCQUNMLElBQUksRUFBRSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxPQUFPLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXO2dCQUNoRCxLQUFLLEVBQUUsU0FBUyxJ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