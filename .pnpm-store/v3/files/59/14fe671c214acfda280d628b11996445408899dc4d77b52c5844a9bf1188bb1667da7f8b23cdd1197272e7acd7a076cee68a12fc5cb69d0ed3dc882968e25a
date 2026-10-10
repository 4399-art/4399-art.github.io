import { computed, defineComponent, h, nextTick, ref } from "vue";
import PageTitle from "@theme-hope/components/base/PageTitle";
import LockIcon from "@theme-hope/components/encrypt/LockIcon";
import { useData } from "@theme-hope/composables/useData";
import "../../styles/encrypt/password-modal.scss";
export default defineComponent({
    name: "PasswordModal",
    props: {
        /**
         * Password hint
         */
        hint: String,
        /**
         * Whether is fullscreen
         *
         * 是否是全屏
         */
        full: Boolean,
        /**
         * Whether to show title
         *
         * 是否显示标题
         */
        showTitle: Boolean,
    },
    emits: ["verify"],
    setup(props, { emit }) {
        const { frontmatter, themeLocale } = useData();
        const password = ref("");
        const hasTried = ref(false);
        const remember = ref(false);
        const encryptLocale = computed(() => themeLocale.value.encryptLocales);
        let hintHandler = null;
        const verify = () => {
            // Clear previous handler
            if (hintHandler)
                clearTimeout(hintHandler);
            hasTried.value = false;
            emit("verify", password.value, remember.value);
            void nextTick().then(() => {
                hasTried.value = true;
                hintHandler = setTimeout(() => {
                    hasTried.value = false;
                }, 1000);
            });
        };
        return () => h("div", {
            class: ["vp-decrypt-layer", { expand: props.full || frontmatter.value.home }],
        }, [
            props.showTitle ? h(PageTitle) : null,
            h("div", { class: "vp-decrypt-modal" }, [
                h("div", { class: ["vp-decrypt-hint", { tried: hasTried.value }] }, hasTried.value
                    ? encryptLocale.value.errorHint
                    : h(LockIcon, { "aria-label": encryptLocale.value.iconLabel })),
                props.hint ? h("div", { class: "vp-decrypt-hint" }, props.hint) : null,
                h("div", { class: "vp-decrypt-input" }, [
                    h("input", {
                        type: "password",
                        value: password.value,
                        placeholder: encryptLocale.value.placeholder,
                        onInput: ({ target }) => {
                            password.value = target.value;
                        },
                        onKeydown: ({ key }) => {
                            if (key === "Enter")
                                verify();
                        },
                    }),
                ]),
                h("div", { class: "vp-remember-password" }, [
                    h("input", {
                        id: "remember-password",
                        type: "checkbox",
                        value: remember.value,
                        onChange: () => {
                            remember.value = !remember.value;
                        },
                    }),
                    h("label", { for: "remember-password" }, encryptLocale.value.remember),
                ]),
                h("button", {
                    type: "button",
                    class: "vp-decrypt-submit",
                    onClick: () => {
                        verify();
                    },
                }, "OK"),
            ]),
        ]);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFzc3dvcmRNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9lbmNyeXB0L1Bhc3N3b3JkTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFbEUsT0FBTyxTQUFTLE1BQU0sdUNBQXVDLENBQUM7QUFDOUQsT0FBTyxRQUFRLE1BQU0seUNBQXlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTFELE9BQU8sMENBQTBDLENBQUM7QUFFbEQsZUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGVBQWU7SUFFckIsS0FBSyxFQUFFO1FBQ0w7O1dBRUc7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUVaOzs7O1dBSUc7UUFDSCxJQUFJLEVBQUUsT0FBTztRQUViOzs7O1dBSUc7UUFDSCxTQUFTLEVBQUUsT0FBTztLQUNuQjtJQUVELEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUVqQixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFO1FBQ25CLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdkUsSUFBSSxXQUFXLEdBQWtCLElBQUksQ0FB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