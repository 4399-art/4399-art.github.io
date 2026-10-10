import { l as useData$1, u as useTheme } from "../../PageInfo-DTBGvCmc.js";
import { n as MainFadeInUpTransition_default, t as PageTitle_default } from "../../PageTitle--p5MJTUs.js";
import { t as LockIcon } from "../../LockIcon-CC7XxocU.js";
import { useSessionStorage, useStorage } from "@vueuse/core";
import { computed, defineComponent, h, nextTick, onMounted, ref } from "vue";
import { usePage } from "vuepress/client";
import { isPlainObject, keys, startsWith } from "@vuepress/helper/client";
import "../../client/styles/encrypt/password-modal.scss";
import { compareSync } from "bcrypt-ts/browser";

//#region src/client/components/encrypt/PasswordModal.ts
var PasswordModal_default = defineComponent({
	name: "PasswordModal",
	props: {
		hint: String,
		full: Boolean,
		showTitle: Boolean
	},
	emits: ["verify"],
	setup(props, { emit }) {
		const { frontmatter, themeLocale } = useData$1();
		const password = ref("");
		const hasTried = ref(false);
		const remember = ref(false);
		const encryptLocale = computed(() => themeLocale.value.encryptLocales);
		let hintHandler = null;
		const verify = () => {
			if (hintHandler) clearTimeout(hintHandler);
			hasTried.value = false;
			emit("verify", password.value, remember.value);
			nextTick().then(() => {
				hasTried.value = true;
				hintHandler = setTimeout(() => {
					hasTried.value = false;
				}, 1e3);
			});
		};
		return () => h("div", { class: ["vp-decrypt-layer", { expand: props.full || frontmatter.value.home }] }, [props.showTitle ? h(PageTitle_default) : null, h("div", { class: "vp-decrypt-modal" }, [
			h("div", { class: ["vp-decrypt-hint", { tried: hasTried.value }] }, hasTried.value ? encryptLocale.value.errorHint : h(LockIcon, { "aria-label": encryptLocale.value.iconLabel })),
			props.hint ? h("div", { class: "vp-decrypt-hint" }, props.hint) : null,
			h("div", { class: "vp-decrypt-input" }, [h("input", {
				type: "password",
				value: password.value,
				placeholder: encryptLocale.value.placeholder,
				onInput: ({ target }) => {
					password.value = target.value;
				},
				onKeydown: ({ key }) => {
					if (key === "Enter") verify();
				}
			})]),
			h("div", { class: "vp-remember-password" }, [h("input", {
				id: "remember-password",
				type: "checkbox",
				value: remember.value,
				onChange: () => {
					remember.value = !remember.value;
				}
			}), h("label", { for: "remember-password" }, encryptLocale.value.remember)]),
			h("button", {
				type: "button",
				class: "vp-decrypt-submit",
				onClick: () => {
					verify();
				}
			}, "OK")
		])]);
	}
});

//#endregion
//#region src/client/composables/encrypt/useEncryptConfig.ts
const useEncryptConfig = () => {
	const theme = useTheme();
	return computed(() => theme.value.encrypt);
};

//#endregion
//#region src/client/composables/encrypt/useGlobalEncrypt.ts
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEncrypt = () => {
	const encryptData = useEncryptConfig();
	const storageToken = useStorage(STORAGE_KEY$1, "");
	const sessionToken = useSessionStorage(STORAGE_KEY$1, "");
	const status = computed(() => {
		const { global = false, admin } = encryptData.value;
		const isEncrypted = global && Boolean(admin?.tokens.length);
		return {
			isEncrypted,
			isLocked: isEncrypted ? storageToken.value ? encryptData.value.admin.tokens.every((hash) => !compareSync(storageToken.value, hash)) : encryptData.value.admin.tokens.every((hash) => !compareSync(sessionToken.value, hash)) : false,
			hint: admin?.hint ?? ""
		};
	});
	const validate = (inputToken, keep = false) => {
		(keep ? storageToken : sessionToken).value = inputToken;
	};
	return {
		status,
		validate
	};
};

//#endregion
//#region src/client/components/encrypt/GlobalEncrypt.ts
var GlobalEncrypt_default = defineComponent({
	name: "GlobalEncrypt",
	slots: Object,
	setup(_props, { slots }) {
		const { status, validate } = useGlobalEncrypt();
		const isMounted = ref(false);
		onMounted(() => {
			isMounted.value = true;
		});
		return () => {
			const { isEncrypted, isLocked, hint } = status.value;
			return h(MainFadeInUpTransition_default, () => isEncrypted ? isMounted.value ? isLocked ? h(PasswordModal_default, {
				full: true,
				hint,
				onVerify: validate
			}) : slots.default() : null : slots.default());
		};
	}
});

//#endregion
//#region src/client/utils/encrypt/isTokenMatched.ts
const isTokenMatched = (hash, token) => Boolean(token) && compareSync(token, hash);

//#endregion
//#region src/client/composables/encrypt/usePathEncrypt.ts
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
	const page = usePage();
	const encryptData = useEncryptConfig();
	const localTokenConfig = useStorage(STORAGE_KEY, {});
	const sessionTokenConfig = useSessionStorage(STORAGE_KEY, {});
	const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config) ? keys(encryptData.value.config).filter((key) => startsWith(decodeURI(path), key)).sort((a, b) => b.length - a.length) : [];
	const getStatus = (path) => {
		const { config = {} } = encryptData.value;
		const matchedKeys = getPathMatchedKeys(path);
		if (matchedKeys.length > 0) {
			const firstKeyWithHint = matchedKeys.find((key) => config[key].hint);
			return {
				isEncrypted: true,
				isLocked: matchedKeys.some((key) => (localTokenConfig.value[key] ? config[key].tokens.every((token) => !isTokenMatched(token, localTokenConfig.value[key])) : true) && (sessionTokenConfig.value[key] ? config[key].tokens.every((token) => !isTokenMatched(token, sessionTokenConfig.value[key])) : true)),
				hint: firstKeyWithHint ? config[firstKeyWithHint].hint : ""
			};
		}
		return {
			isEncrypted: false,
			isLocked: false,
			hint: ""
		};
	};
	const status = computed(() => getStatus(page.value.path));
	const validate = (inputToken, keep = false) => {
		const { config = {} } = encryptData.value;
		const matchedKeys = getPathMatchedKeys(page.value.path);
		for (const hitKey of matchedKeys) if (config[hitKey].tokens.some((token) => isTokenMatched(token, inputToken))) {
			(keep ? localTokenConfig : sessionTokenConfig).value[hitKey] = inputToken;
			break;
		}
	};
	return {
		status,
		getStatus,
		validate
	};
};

//#endregion
//#region src/client/components/encrypt/LocalEncrypt.ts
var LocalEncrypt_default = defineComponent({
	name: "LocalEncrypt",
	slots: Object,
	setup(_props, { slots }) {
		const { status, validate } = usePathEncrypt();
		const isMounted = ref(false);
		onMounted(() => {
			isMounted.value = true;
		});
		return () => {
			const { isEncrypted, isLocked, hint } = status.value;
			return isEncrypted ? isMounted.value ? isLocked ? h(PasswordModal_default, {
				showTitle: true,
				full: true,
				hint,
				onVerify: validate
			}) : slots.default() : null : slots.default();
		};
	}
});

//#endregion
export { GlobalEncrypt_default as GlobalEncrypt, LocalEncrypt_default as LocalEncrypt };
//# sourceMappingURL=encrypt.js.map