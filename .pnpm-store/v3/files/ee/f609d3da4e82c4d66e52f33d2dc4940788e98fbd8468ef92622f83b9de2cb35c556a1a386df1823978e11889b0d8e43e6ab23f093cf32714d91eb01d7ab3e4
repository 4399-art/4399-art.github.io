import { hasGlobalComponent, isString } from "@vuepress/helper/client";
import { watchImmediate } from "@vueuse/core";
import { computed, defineComponent, h, nextTick, onMounted, ref, resolveComponent } from "vue";
import { useFrontmatter, withBase } from "vuepress/client";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import { useAuthorInfo } from "@theme-hope/composables/useAuthorInfo";
import "../../styles/home/portfolio-hero.scss";
export default defineComponent({
    name: "PortfolioHero",
    slots: Object,
    setup(_props, { slots }) {
        const authorInfo = useAuthorInfo();
        const frontmatter = useFrontmatter();
        const index = ref(0);
        const currentTitle = computed(() => frontmatter.value.titles?.[index.value] ?? "");
        const title = ref("");
        const avatar = computed(() => {
            // oxlint-disable-next-line no-shadow
            const { name, avatar, avatarDark, avatarAlt, avatarStyle } = frontmatter.value;
            return {
                name: name ?? authorInfo.value.name,
                avatar: avatar ? withBase(avatar) : null,
                avatarDark: avatarDark ? withBase(avatarDark) : null,
                // oxlint-disable-next-line typescript/prefer-nullish-coalescing
                alt: (avatarAlt || name) ?? "",
                style: avatarStyle ?? null,
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
        const info = computed(() => {
            const { welcome, name, titles = [], medias } = frontmatter.value;
            return {
                name: name ?? authorInfo.value.name,
                welcome: welcome ?? "👋 Hi There, I'm",
                title: title.value,
                titles: titles,
                medias: medias ?? null,
            };
        });
        const startTyping = () => {
            title.value = "";
            let charIndex = 0;
            let shouldStop = false;
            const typeNext = async () => {
                if (!shouldStop) {
                    title.value += currentTitle.value[charIndex];
                    charIndex += 1;
                    await nextTick();
                    if (charIndex < currentTitle.value.length) {
                        setTimeout(() => {
                            void typeNext();
                        }, 150);
                    }
                    else {
                        const { length } = info.value.titles;
                        setTimeout(() => {
                            index.value =
                                length <= 1 || index.value === info.value.titles.length - 1 ? 0 : index.value + 1;
                        }, 1000);
                    }
                }
            };
            void typeNext();
            return () => {
                shouldStop = true;
            };
        };
        let stop;
        onMounted(() => {
            watchImmediate(currentTitle, () => {
                stop?.();
                stop = startTyping();
            });
        });
        return () => h("section", {
            id: "portfolio",
            class: ["vp-portfolio", { bg: bg.value.image }],
        }, [
            slots.portfolioBg?.(bg.value) ?? [
                bg.value.image
                    ? h("div", {
                        class: ["vp-portfolio-mask", { light: bg.value.imageDark }],
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
                        class: "vp-portfolio-mask dark",
                        style: [
                            {
                                background: `url(${bg.value.imageDark}) center/cover no-repeat`,
                            },
                            bg.value.style,
                        ],
                    })
                    : null,
            ],
            slots.portfolioAvatar?.(avatar.value) ??
                h("div", { class: "vp-portfolio-avatar" }, [
                    h(DropTransition, { delay: 0.04 }, () => {
                        const { avatar: avatarLight, avatarDark, name, alt, style } = avatar.value;
                        return [
                            avatarLight
                                ? h("img", {
                                    key: "light",
                                    class: { light: avatarDark },
                                    src: avatarLight,
                                    title: name,
                                    alt,
                                    style,
                                })
                                : null,
                            avatarDark
                                ? h("img", {
                                    key: "dark",
                                    class: "dark",
                                    src: avatarDark,
                                    title,
                                    alt,
                                    style,
                                })
                                : null,
                        ];
                    }),
                ]),
            h("div", { class: "vp-portfolio-container" }, slots.portfolioInfo?.(info.value) ??
                h("div", { class: "vp-portfolio-info" }, [
                    h(DropTransition, { appear: true, delay: 0.08 }, () => h("h6", { class: "vp-portfolio-welcome" }, info.value.welcome)),
                    h(DropTransition, { appear: true, delay: 0.12 }, () => h("h1", { class: "vp-portfolio-name", id: "main-title" }, info.value.name)),
                    h(DropTransition, { appear: true, delay: 0.16 }, () => h("h2", { class: "vp-portfolio-title" }, title.value)),
                    h(DropTransition, { appear: true, delay: 0.2 }, () => info.value.medias
                        ? h("div", { class: "vp-portfolio-medias" }, info.value.medias.map(({ name, url, icon }) => h("a", {
                            class: "vp-portfolio-media",
                            href: url,
                            rel: "noopener noreferrer",
                            target: "_blank",
                            title: name,
                        }, h(resolveComponent("VPIcon"), {
                            icon,
                            sizing: "both",
                        }))))
                        : hasGlobalComponent("SocialMedias")
                            ? h(resolveComponent("SocialMedias"))
                            : null),
                ])),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9ydGZvbGlvSGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ob21lL1BvcnRmb2xpb0hlcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0QsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBU3RFLE9BQU8sdUNBQXVDLENBQUM7QUFFL0MsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGVBQWU7SUFFckIsS0FBSyxFQUFFLE1BSUw7SUFFRixLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBNkIsQ0FBQztRQUVoRSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0QixNQUFNLE1B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