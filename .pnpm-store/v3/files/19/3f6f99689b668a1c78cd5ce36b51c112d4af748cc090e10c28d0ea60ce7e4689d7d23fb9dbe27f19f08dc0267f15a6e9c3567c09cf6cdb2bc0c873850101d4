import { isString } from "@vuepress/helper/client";
import { computed, defineComponent, h } from "vue";
import { withBase } from "vuepress/client";
import HeroSlideDownButton from "@theme-hope/components/home/HeroSlideDownButton";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/blog/blog-hero.scss";
const DEFAULT_HERO = "//theme-hope-assets.vuejs.press/hero/default.jpg";
export default defineComponent({
    name: "BlogHero",
    slots: Object,
    setup(_props, { slots }) {
        const { frontmatter, siteLocale } = useData();
        const info = computed(() => {
            const { heroText, heroStyle, tagline, heroFullScreen = false } = frontmatter.value;
            return {
                text: heroText ?? (siteLocale.value.title || "Hello"),
                tagline: tagline ?? "",
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
                image: isString(bgImage) ? withBase(bgImage) : bgImage === false ? null : DEFAULT_HERO,
                imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
                style: bgImageStyle ?? null,
            };
        });
        return () => frontmatter.value.hero === false
            ? null
            : h("div", {
                class: [
                    "vp-blog-hero",
                    {
                        "hero-fullscreen": frontmatter.value.heroFullScreen,
                        "no-bg": !bg.value.image,
                    },
                ],
            }, [
                slots.heroBg?.(bg.value) ?? [
                    bg.value.image
                        ? h("div", {
                            class: ["vp-blog-mask", { light: bg.value.imageDark }],
                            style: [
                                {
                                    background: `url(${bg.value.image}) center/cover no-repeat`,
                                },
                                bg.value.style,
                            ],
                        })
                        : null,
                    bg.value.imageDark
                        ? h("div", {
                            class: "vp-blog-mask dark",
                            style: [
                                {
                                    background: `url(${bg.value.imageDark}) center/cover no-repeat`,
                                },
                                bg.value.style,
                            ],
                        })
                        : null,
                ],
                slots.heroLogo?.(image.value) ??
                    h(DropTransition, { appear: true, group: true, delay: 0.04 }, () => {
                        const { image: imageLight, imageDark, style: imageStyle, alt } = image.value;
                        return [
                            imageLight
                                ? h("img", {
                                    key: "light",
                                    class: ["vp-blog-hero-image", { light: imageDark }],
                                    style: imageStyle,
                                    src: imageLight,
                                    alt: alt,
                                })
                                : null,
                            imageDark
                                ? h("img", {
                                    key: "dark",
                                    class: "vp-blog-hero-image dark",
                                    style: imageStyle,
                                    src: imageDark,
                                    alt: alt,
                                })
                                : null,
                        ];
                    }),
                slots.heroInfo?.(info.value) ??
                    h("div", { class: "vp-blog-hero-info" }, [
                        h(DropTransition, { appear: true, delay: 0.08 }, () => info.value.text
                            ? h("h1", { class: "vp-blog-hero-title" }, info.value.text)
                            : null),
                        h(DropTransition, { appear: true, delay: 0.12 }, () => info.value.tagline
                            ? h("div", {
                                class: "vp-blog-hero-description",
                                innerHTML: info.value.tagline,
                            })
                            : null),
                    ]),
                frontmatter.value.heroFullScreen
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ0hlcm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYmxvZy9CbG9nSGVyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLG1CQUFtQixNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVMxRCxPQUFPLGtDQUFrQyxDQUFDO0FBRTFDLE1BQU0sWUFBWSxHQUFHLGtEQUFrRCxDQUFDO0FBRXhFLGVBQWUsZUFBZSxDQUFDO0lBQzdCLElBQUksRUFBRSxVQUFVO0lBRWhCLEtBQUssRUFBRSxNQUlMO0lBRUYsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUNyQixNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU8sRUFBZ0MsQ0FBQztRQUU1RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxjQUFjLEdBQUcsS0FBSyxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUVuRixPQUFPO2dCQUNMLElBQUksRUFBRSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRTtnQkFDdEIsS0FBSyxFQUFFLFNBQVMsSUFBSSxJQUFJO2dCQUN4QixZQUFZ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