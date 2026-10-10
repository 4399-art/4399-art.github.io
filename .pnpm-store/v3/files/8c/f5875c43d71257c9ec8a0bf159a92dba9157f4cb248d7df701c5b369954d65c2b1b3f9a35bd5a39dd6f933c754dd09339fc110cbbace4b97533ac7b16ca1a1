import { Message } from "@vuepress/helper/client";
import { computed, defineComponent, h, ref } from "vue";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import "@vuepress/helper/message.css";
import "../../styles/blog/pagination.scss";
const ERROR_SVG = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>`;
export default defineComponent({
    name: "Pagination",
    props: {
        /**
         * Number of total items
         *
         * 项目总数
         */
        total: {
            type: Number,
            default: 10,
        },
        /**
         * Items per page
         *
         * 每页项目数
         */
        perPage: {
            type: Number,
            default: 10,
        },
        /**
         * Current page number
         *
         * 当前页面
         */
        current: {
            type: Number,
            default: 1,
        },
    },
    emits: ["updateCurrentPage"],
    setup(props, { emit }) {
        const message = new Message();
        const themeLocale = useThemeLocale();
        const input = ref("");
        const paginationLocale = computed(() => themeLocale.value.paginationLocales);
        const totalPages = computed(() => Math.ceil(props.total / props.perPage));
        const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
        const displayLeftEllipsis = computed(() => {
            if (totalPages.value < 7)
                return false;
            return props.current > 4;
        });
        const displayRightEllipsis = computed(() => {
            if (totalPages.value < 7)
                return false;
            return props.current < totalPages.value - 3;
        });
        /** Page indexes */
        const indexes = computed(() => {
            const { current: currentPage } = props;
            let min = 1;
            let max = totalPages.value;
            const arr = [];
            if (totalPages.value >= 7) {
                if (currentPage <= 4 && currentPage < totalPages.value - 3) {
                    min = 1;
                    max = 5;
                }
                else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
                    max = totalPages.value;
                    min = totalPages.value - 4;
                }
                else if (totalPages.value > 7) {
                    min = currentPage - 2;
                    max = currentPage + 2;
                }
            }
            // Generate page index
            for (let i = min; i <= max; i++)
                arr.push(i);
            return arr;
        });
        /**
         * Navigate to certain page
         *
         * @param index - Page index
         */
        const navigate = (index) => {
            emit("updateCurrentPage", index);
        };
        /**
         * Check and navigate to certain page
         *
         * @param index - Page index
         */
        const jumpPage = (index) => {
            const pageNum = Number.parseInt(index, 10);
            if (pageNum <= totalPages.value && pageNum > 0) {
                navigate(pageNum);
            }
            else {
                message.pop(`${ERROR_SVG}${paginationLocale.value.errorText.replaceAll(String.raw `\$page`, totalPages.value.toString())}`);
            }
        };
        return () => h("div", { class: "vp-pagination" }, enable.value
            ? h("nav", { class: "vp-pagination-list" }, [
                h("div", { class: "vp-pagination-number " }, [
                    // Prev button
                    props.current > 1
                        ? h("div", {
                            class: "prev",
                            role: "navigation",
                            unselectable: "on",
                            onClick: () => {
                                navigate(props.current - 1);
                            },
                        }, paginationLocale.value.prev)
                        : null,
                    // Left ellipsis
                    displayLeftEllipsis.value
                        ? [
                            h("div", {
                                role: "navigation",
                                onClick: () => {
                                    navigate(1);
                                },
                            }, 1),
                            h("div", { class: "ellipsis" }, "..."),
                        ]
                        : null,
                    // Numbers
                    indexes.value.map((num) => h("div", {
                        key: num,
                        class: { active: props.current === num },
                        role: "navigation",
                        onClick: () => {
                            navigate(num);
                        },
                    }, num)),
                    // Right ellipsis
                    displayRightEllipsis.value
                        ? [
                            h("div", { class: "ellipsis" }, "..."),
                            h("div", {
                                role: "navigation",
                                onClick: () => {
                                    navigate(totalPages.value);
                                },
                            }, totalPages.value),
                        ]
                        : null,
                    // Next button
                    props.current < totalPages.value
                        ? h("div", {
                            class: "next",
                            role: "navigation",
                            unselectable: "on",
                            onClick: () => {
                                navigate(props.current + 1);
                            },
                        }, paginationLocale.value.next)
                        : null,
                ]),
                h("div", { class: "vp-pagination-nav" }, [
                    h("label", { for: "navigation-text" }, `${paginationLocale.value.navigate}: `),
                    h("input", {
                        id: "navigation-text",
                        value: input.value,
                        onInput: ({ target }) => {
                            input.value = target.value;
                        },
                        onKeydown: (event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                jumpPage(input.value);
                            }
                        },
                    }),
                    h("button", {
                        class: "vp-pagination-button",
                        type: "button",
                        role: "navigation",
                        title: paginationLocale.value.action,
                        onClick: () => {
                            jumpPage(input.value);
                        },
                    }, paginationLocale.value.action),
                ]),
            ])
            : []);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ibG9nL1BhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWxELE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFLE9BQU8sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxtQ0FBbUMsQ0FBQztBQUUzQyxNQUFNLFNBQVMsR0FBRywrZ0JBQStnQixDQUFDO0FBRWxpQixlQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsWUFBWTtJQUVsQixLQUFLLEVBQUU7UUFDTDs7OztXQUlHO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBRUQ7Ozs7V0FJRztRQUNILE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWjtRQUVEOzs7O1dBSUc7UUFDSCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRjtJQUVELEtBQUssRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBRTVCLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUU7UUFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUVyQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFF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