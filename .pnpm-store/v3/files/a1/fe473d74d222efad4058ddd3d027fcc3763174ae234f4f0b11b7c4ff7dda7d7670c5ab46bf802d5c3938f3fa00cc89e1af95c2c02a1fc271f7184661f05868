import { n as JSFIDDLE_SVG, t as CODEPEN_SVG } from "../../icons-01ouCRxl.js";
import { LoadingIcon, decodeData, isDef, isPlainObject, keys } from "@vuepress/helper/client";
import { useEventListener, useResizeObserver, useToggle } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, ref, shallowRef } from "vue";
import "balloon-css/balloon.css";
import "../styles/code-demo.scss";

//#region src/client/utils/code-demo/utils.ts
const options = CODE_DEMO_OPTIONS;
const preProcessorConfig = {
	html: {
		types: [
			"html",
			"slim",
			"haml",
			"md",
			"markdown",
			"vue"
		],
		map: {
			html: "none",
			vue: "none",
			md: "markdown"
		}
	},
	js: {
		types: [
			"js",
			"javascript",
			"coffee",
			"coffeescript",
			"ts",
			"typescript",
			"ls",
			"livescript"
		],
		map: {
			js: "none",
			javascript: "none",
			coffee: "coffeescript",
			ls: "livescript",
			ts: "typescript"
		}
	},
	css: {
		types: [
			"css",
			"less",
			"sass",
			"scss",
			"stylus",
			"styl"
		],
		map: {
			css: "none",
			styl: "stylus"
		}
	}
};
const h$1 = (tag, attrs, children) => {
	const node = document.createElement(tag);
	if (isPlainObject(attrs)) keys(attrs).forEach((key) => {
		if (key.indexOf("data")) node[key] = attrs[key];
		else {
			const trippedKey = key.replace("data", "");
			node.dataset[trippedKey] = attrs[key];
		}
	});
	if (children) children.forEach((child) => {
		node.append(child);
	});
	return node;
};
const getConfig = (config) => ({
	...options,
	...config,
	jsLib: [...new Set([options.jsLib, config.jsLib ?? []].flat())],
	cssLib: [...new Set([options.cssLib, config.cssLib ?? []].flat())]
});
const loadScript = (state, link) => {
	if (isDef(state[link])) return state[link];
	const loadEvent = new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = link;
		document.querySelector("body")?.append(script);
		script.addEventListener("load", () => {
			resolve();
		});
	});
	state[link] = loadEvent;
	return loadEvent;
};
const injectCSS = (shadowRoot, code) => {
	if (code.css && [...shadowRoot.childNodes].every((element) => element.nodeName !== "STYLE")) {
		const style = h$1("style", { innerHTML: code.css });
		shadowRoot.append(style);
	}
};
const injectScript = (id, shadowRoot, code) => {
	const scriptText = code.getScript();
	if (scriptText && [...shadowRoot.childNodes].every((element) => element.nodeName !== "SCRIPT")) {
		const script = document.createElement("script");
		script.append(document.createTextNode(`{const document=window.document.querySelector('#${id} .vp-code-demo-display').shadowRoot;\n${scriptText}}`));
		shadowRoot.append(script);
	}
};

//#endregion
//#region src/client/utils/code-demo/getCode.ts
const AVAILABLE_LANGUAGES = [
	"html",
	"js",
	"css"
];
const getCode = (code) => {
	const languages = keys(code);
	const result = {
		html: [],
		js: [],
		css: [],
		isLegal: false
	};
	AVAILABLE_LANGUAGES.forEach((type) => {
		const match = languages.filter((language) => preProcessorConfig[type].types.includes(language));
		if (match.length > 0) {
			const [language] = match;
			result[type] = [code[language].trim(), preProcessorConfig[type].map[language] ?? language];
		}
	});
	result.isLegal = (result.html.length === 0 || result.html[1] === "none") && (result.js.length === 0 || result.js[1] === "none") && (result.css.length === 0 || result.css[1] === "none");
	return result;
};
const handleHTML = (html) => html.replaceAll(String.raw`<br \/>`, "<br>").replaceAll(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>");
const getHtmlTemplate = (html) => `<div id="app">\n${handleHTML(html)}\n</div>`;
const getReactTemplate = (code) => `${code.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};\nReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`;
const getVueJsTemplate = (js) => js.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim();
const wrapper = (scriptStr) => `(function(exports){var module={};module.exports=exports;${scriptStr};return module.exports.__esModule?exports.default:module.exports;})({})`;
const getNormalCode = (code, config) => {
	const codeConfig = getConfig(config);
	const js = code.js[0] ?? "";
	return {
		...codeConfig,
		html: handleHTML(code.html[0] ?? ""),
		js,
		css: code.css[0] ?? "",
		isLegal: code.isLegal,
		getScript: () => codeConfig.useBabel ? globalThis.Babel?.transform(js, { presets: ["es2015"] })?.code ?? "" : js
	};
};
const VUE_TEMPLATE_REG = /<template>([\s\S]+)<\/template>/u;
const VUE_SCRIPT_REG = /<script(?:\s*lang=(['"])(.*?)\1)?>([\s\S]+)<\/script>/u;
const VUE_STYLE_REG = /<style(?:\s*lang=(['"])(.*?)\1)?\s*(?:scoped)?>([\s\S]+)<\/style>/u;
const getVueCode = (code, config) => {
	const codeConfig = getConfig(config);
	const vueTemplate = code.html[0] ?? "";
	const jsBlock = VUE_SCRIPT_REG.exec(vueTemplate);
	const cssBlock = VUE_STYLE_REG.exec(vueTemplate);
	const html = VUE_TEMPLATE_REG.exec(vueTemplate)?.[1].trim() ?? "";
	const js = jsBlock?.[3].trim() ?? "";
	const jsLang = jsBlock?.[2] ?? "";
	const css = cssBlock?.[3].trim() ?? "";
	const cssLang = cssBlock?.[2] ?? "";
	const isLegal = jsLang === "" && (cssLang === "" || cssLang === "css");
	return {
		...codeConfig,
		html: getHtmlTemplate(html),
		js: getVueJsTemplate(js),
		css,
		isLegal,
		jsLib: [codeConfig.vue, ...codeConfig.jsLib],
		getScript: () => {
			return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${wrapper(config.useBabel ? globalThis.Babel?.transform(js, { presets: ["es2015"] })?.code ?? "" : js.replace(/export\s+default/u, "return"))};appOptions.template=\`${html.replace("`", "\\`\"")}\`;window.Vue.createApp(appOptions).mount(app);`;
		}
	};
};
const getReactCode = (code, config) => {
	const codeConfig = getConfig(config);
	const js = code.js[0] ?? "";
	return {
		...codeConfig,
		html: getHtmlTemplate(""),
		js: getReactTemplate(js),
		css: code.css[0] ?? code.js[0]?.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() ?? "",
		isLegal: code.isLegal,
		jsLib: [
			codeConfig.react,
			codeConfig.reactDOM,
			...codeConfig.jsLib
		],
		jsx: true,
		getScript: () => {
			return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${wrapper(globalThis.Babel?.transform(js, { presets: ["es2015", "react"] })?.code ?? "")}))`;
		}
	};
};

//#endregion
//#region src/client/composables/loadScript.ts
const state = {};
const loadReact = async (code) => {
	await Promise.all([
		loadScript(state, code.babel),
		loadScript(state, code.react),
		loadScript(state, code.reactDOM)
	]);
};
const loadVue = async (code) => {
	const promises = [loadScript(state, code.vue)];
	if (code.useBabel) promises.push(loadScript(state, code.babel));
	await Promise.all(promises);
};
const loadNormal = (code) => code.useBabel ? loadScript(state, code.babel) : Promise.resolve();

//#endregion
//#region src/client/components/CodeDemo.ts
var CodeDemo_default = defineComponent({
	name: "CodeDemo",
	props: {
		id: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: "normal"
		},
		title: String,
		config: String,
		code: {
			type: String,
			required: true
		}
	},
	slots: Object,
	setup(props, { slots }) {
		const [isExpanded, toggleIsExpand] = useToggle(false);
		const demoWrapper = shallowRef();
		const codeContainer = shallowRef();
		const height = ref("0");
		const loaded = ref(false);
		const config = computed(() => JSON.parse(props.config ? decodeData(props.config) : "{}"));
		const codeType = computed(() => {
			return getCode(JSON.parse(decodeData(props.code)));
		});
		const code = computed(() => props.type === "react" ? getReactCode(codeType.value, config.value) : props.type === "vue" ? getVueCode(codeType.value, config.value) : getNormalCode(codeType.value, config.value));
		const isLegal = computed(() => code.value.isLegal);
		const initDom = (innerHTML = false) => {
			const shadowRoot = demoWrapper.value.attachShadow({ mode: "open" });
			const appElement = document.createElement("div");
			appElement.classList.add("code-demo-app");
			shadowRoot.append(appElement);
			if (isLegal.value) {
				if (innerHTML) appElement.innerHTML = code.value.html;
				injectCSS(shadowRoot, code.value);
				injectScript(props.id, shadowRoot, code.value);
				height.value = "0";
			} else height.value = "auto";
			loaded.value = true;
		};
		const loadDemo = async () => {
			switch (props.type) {
				case "react":
					await loadReact(code.value);
					initDom();
					break;
				case "vue":
					await loadVue(code.value);
					initDom();
					break;
				default:
					await loadNormal(code.value);
					initDom(true);
			}
		};
		let previousState = null;
		useEventListener("beforeprint", () => {
			previousState = isExpanded.value;
			if (!isExpanded.value) toggleIsExpand(true);
		});
		useEventListener("afterprint", () => {
			if (previousState === false) toggleIsExpand(false);
			previousState = null;
		});
		useResizeObserver(codeContainer, () => {
			if (isExpanded.value) height.value = `${codeContainer.value.clientHeight + 14}px`;
		});
		onMounted(async () => {
			await loadDemo();
		});
		return () => h("div", {
			class: "vp-container vp-code-demo",
			id: props.id
		}, [
			h("div", { class: "vp-container-header" }, [
				code.value.isLegal ? h("button", {
					type: "button",
					title: "toggle",
					class: ["vp-code-demo-toggle-button", isExpanded.value ? "down" : "end"],
					onClick: () => {
						height.value = isExpanded.value ? "0" : `${codeContainer.value.clientHeight + 14}px`;
						toggleIsExpand();
					}
				}) : null,
				props.title ? h("span", { class: "vp-container-title" }, decodeURIComponent(props.title)) : null,
				code.value.isLegal && (code.value.jsfiddle ?? true) ? h("form", {
					class: "code-demo-jsfiddle",
					target: "_blank",
					action: "https://jsfiddle.net/api/post/library/pure/",
					method: "post"
				}, [
					h("input", {
						type: "hidden",
						name: "html",
						value: code.value.html
					}),
					h("input", {
						type: "hidden",
						name: "js",
						value: code.value.js
					}),
					h("input", {
						type: "hidden",
						name: "css",
						value: code.value.css
					}),
					h("input", {
						type: "hidden",
						name: "wrap",
						value: "1"
					}),
					h("input", {
						type: "hidden",
						name: "panel_js",
						value: "3"
					}),
					h("input", {
						type: "hidden",
						name: "resources",
						value: [...code.value.cssLib, ...code.value.jsLib].join(",")
					}),
					h("button", {
						type: "submit",
						class: "jsfiddle-button",
						innerHTML: JSFIDDLE_SVG,
						"aria-label": "JSFiddle",
						"data-balloon-pos": "down"
					})
				]) : null,
				!code.value.isLegal || (code.value.codepen ?? true) ? h("form", {
					class: "code-demo-codepen",
					target: "_blank",
					action: "https://codepen.io/pen/define",
					method: "post"
				}, [h("input", {
					type: "hidden",
					name: "data",
					value: JSON.stringify({
						html: code.value.html,
						js: code.value.js,
						css: code.value.css,
						js_external: code.value.jsLib.join(";"),
						css_external: code.value.cssLib.join(";"),
						layout: code.value.codepenLayout,
						html_pre_processor: codeType.value.html[1] ?? "none",
						js_pre_processor: codeType.value.js[1] ?? (code.value.jsx ? "babel" : "none"),
						css_pre_processor: codeType.value.css[1] ?? "none",
						editors: code.value.codepenEditors
					})
				}), h("button", {
					type: "submit",
					innerHTML: CODEPEN_SVG,
					class: "codepen-button",
					"aria-label": "Codepen",
					"data-balloon-pos": "down"
				})]) : null
			]),
			loaded.value ? null : h(LoadingIcon, { class: "vp-code-demo-loading" }),
			h("div", {
				ref: demoWrapper,
				class: "vp-code-demo-display",
				style: { display: isLegal.value && loaded.value ? "block" : "none" }
			}),
			h("div", {
				class: "vp-code-demo-code-wrapper",
				style: { height: height.value }
			}, h("div", {
				ref: codeContainer,
				class: "vp-code-demo-codes"
			}, slots.default()))
		]);
	}
});

//#endregion
export { CodeDemo_default as default };
//# sourceMappingURL=CodeDemo.js.map