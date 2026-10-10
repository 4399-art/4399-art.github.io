import { container } from "@mdit/plugin-container";
import { Logger, addViteOptimizeDepsInclude, addViteOptimizeDepsNeedsInterop, addViteSsrExternal, addViteSsrNoExternal, chainWebpack, deepAssign, encodeData, endsWith, ensureEndingSlash, entries, fromEntries, getModulePath, isModuleAvailable, isPlainObject, keys } from "@vuepress/helper";
import { colors, getDirname, hash, path } from "vuepress/utils";
import { useSassPalettePlugin } from "@vuepress/plugin-sass-palette";
import { createConverter } from "vuepress-shared";
import { demo } from "@mdit/plugin-demo";

//#region src/node/markdown-it/codeDemo.ts
const CODE_DEMO_DEFAULT_SETTING = {
	useBabel: false,
	jsLib: [],
	cssLib: [],
	codepenLayout: "left",
	codepenEditors: "101",
	babel: "https://unpkg.com/@babel/standalone/babel.min.js",
	vue: "https://unpkg.com/vue/dist/vue.global.prod.js",
	react: "https://unpkg.com/react/umd/react.production.min.js",
	reactDOM: "https://unpkg.com/react-dom/umd/react-dom.production.min.js"
};
const getPlugin = (name) => (md) => {
	container(md, {
		name,
		openRender: (tokens, index) => {
			const title = tokens[index].info.trimStart().slice(name.length).trim();
			let config = "";
			const code = {};
			for (let i = index; i < tokens.length; i++) {
				const { type, content, info } = tokens[i];
				const language = info ? /^([^ :[{]+)/.exec(md.utils.unescapeAll(info).trim())?.[1] ?? "text" : "";
				if (type === `container_${name}_close`) break;
				if (!content) continue;
				if (type === "fence") if (language === "json") config = encodeData(content);
				else code[language] = content;
			}
			return `<CodeDemo id="code-demo-${index}" type="${name.split("-")[0]}"${title ? ` title="${encodeURIComponent(title)}"` : ""}${config ? ` config="${config}"` : ""} code="${encodeData(JSON.stringify(code))}">\n`;
		},
		closeRender: () => `</CodeDemo>\n`
	});
};
const normalDemo = getPlugin("normal-demo");
const vueDemo = getPlugin("vue-demo");
const reactDemo = getPlugin("react-demo");

//#endregion
//#region src/node/markdown-it/utils.ts
const escapeHtml = (unsafeHTML) => unsafeHTML.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");

//#endregion
//#region src/node/markdown-it/playground/plugin.ts
const AT_MARKER$1 = `@`;
const VALID_MARKERS$1 = [
	"file",
	"import",
	"setting"
];
const getPlaygroundRule = (name) => (state, startLine, endLine, silent) => {
	let start = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	if (state.src[start] !== ":") return false;
	let pos = start + 1;
	while (pos <= max) {
		if (state.src[pos] !== ":") break;
		pos += 1;
	}
	const markerCount = pos - start;
	if (markerCount < 3) return false;
	const markup = state.src.slice(start, pos);
	const params = state.src.slice(pos, max);
	const [containerName] = params.trimStart().split(" ", 2);
	const title = params.trimStart().slice(name.length).trim();
	if (containerName.trim() !== name) return false;
	if (silent) return true;
	let nextLine = startLine;
	let autoClosed = false;
	while (nextLine < endLine) {
		nextLine += 1;
		start = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		if (start < max && state.sCount[nextLine] < state.blkIndent) break;
		if (state.src[start] === ":" && state.sCount[nextLine] - state.blkIndent < 4) {
			for (pos = start + 1; pos <= max; pos++) if (state.src[pos] !== ":") break;
			if (pos - start >= markerCount) {
				pos = state.skipSpaces(pos);
				if (pos >= max) {
					autoClosed = true;
					break;
				}
			}
		}
	}
	const oldParent = state.parentType;
	const oldLineMax = state.lineMax;
	state.parentType = name;
	state.lineMax = nextLine - (autoClosed ? 1 : 0);
	const openToken = state.push(`${name}_open`, "template", 1);
	openToken.markup = markup;
	openToken.block = true;
	openToken.info = title;
	openToken.map = [startLine, nextLine - (autoClosed ? 1 : 0)];
	state.md.block.tokenize(state, startLine + 1, nextLine - (autoClosed ? 1 : 0));
	const closeToken = state.push(`${name}_close`, "template", -1);
	closeToken.markup = state.src.slice(start, pos);
	closeToken.block = true;
	state.parentType = oldParent;
	state.lineMax = oldLineMax;
	state.line = nextLine + (autoClosed ? 1 : 0);
	return true;
};
const atMarkerRule$1 = (markerName) => (state, startLine, endLine, silent) => {
	let start = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	const atMarker = `${AT_MARKER$1}${markerName}`;
	if (state.src.charAt(start) !== "@") return false;
	let index = 0;
	while (index < atMarker.length) {
		if (atMarker[index] !== state.src[start + index]) return false;
		index += 1;
	}
	const markup = state.src.slice(start, start + index);
	const info = state.src.slice(start + index, max);
	if (silent) return true;
	let nextLine = startLine;
	let autoClosed = false;
	while (nextLine < endLine) {
		nextLine += 1;
		start = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		if (start < max && state.sCount[nextLine] < state.blkIndent) break;
		if (state.src[start] === AT_MARKER$1 && state.sCount[nextLine] <= state.sCount[startLine]) {
			let openMakerMatched = true;
			for (index = 0; index < atMarker.length; index++) if (atMarker[index] !== state.src[start + index]) {
				openMakerMatched = false;
				break;
			}
			if (openMakerMatched) {
				autoClosed = true;
				nextLine -= 1;
				break;
			}
		}
	}
	const oldParent = state.parentType;
	const oldLineMax = state.lineMax;
	state.parentType = markerName;
	state.lineMax = nextLine;
	const openToken = state.push(`${markerName}_open`, "template", 1);
	openToken.block = true;
	openToken.markup = markup;
	openToken.info = info.trim();
	openToken.map = [startLine, nextLine];
	state.md.block.tokenize(state, startLine + 1, nextLine);
	const closeToken = state.push(`${markerName}_close`, "template", -1);
	closeToken.block = true;
	closeToken.markup = "";
	state.parentType = oldParent;
	state.lineMax = oldLineMax;
	state.line = nextLine + (autoClosed ? 1 : 0);
	return true;
};
const defaultPropsGetter = (playgroundData) => ({
	key: playgroundData.key,
	title: playgroundData.title ?? "",
	files: encodeURIComponent(JSON.stringify(playgroundData.files)),
	settings: encodeURIComponent(JSON.stringify(playgroundData.settings))
});
const playground = (md, options) => {
	const { name = "playground", component = "Playground", propsGetter = defaultPropsGetter } = options ?? {};
	md.block.ruler.before("fence", name, getPlaygroundRule(name), { alt: [
		"paragraph",
		"reference",
		"blockquote",
		"list"
	] });
	VALID_MARKERS$1.forEach((marker) => {
		if (!md.block.ruler.__rules__.some(({ name }) => name === `at-${marker}`)) md.block.ruler.before("fence", `at-${marker}`, atMarkerRule$1(marker), { alt: [
			"paragraph",
			"reference",
			"blockquote",
			"list"
		] });
	});
	md.renderer.rules[`${name}_open`] = (tokens, index) => {
		const { info } = tokens[index];
		const playgroundData = {
			key: hash(`playground${index}-${info}`),
			title: encodeURIComponent(info),
			settings: {},
			files: {}
		};
		let currentKey = null;
		let foundSettings = false;
		for (let i = index; i < tokens.length; i++) {
			const { block, type, info, content } = tokens[i];
			if (block) {
				if (type === `${name}_close`) break;
				if (type === `${name}_open`) continue;
				if (type === "file_open") {
					if (!info) continue;
					currentKey = info;
				} else if (type === "import_open") {
					currentKey = info || "import-map.json";
					playgroundData.importMap = currentKey;
				} else if (type === "setting_open") foundSettings = true;
				else if (type === "file_close" || type === "import_close" || type === "setting_close" || !content) {
					tokens[i].type = `${name}_empty`;
					tokens[i].hidden = true;
					if (type === "setting_close") foundSettings = false;
					continue;
				}
				if (foundSettings) {
					if (type === "fence" && info === "json") playgroundData.settings = JSON.parse(content.trim());
				} else if (type === "fence" && currentKey) playgroundData.files[currentKey] = {
					ext: info,
					content
				};
				tokens[i].type = `${name}_empty`;
				tokens[i].hidden = true;
			}
		}
		return `<${component} ${entries(propsGetter(playgroundData)).map(([attr, value]) => `${attr}="${escapeHtml(value)}"`).join(" ")}>\n`;
	};
	md.renderer.rules[`${name}_close`] = () => `</${component}>\n`;
};

//#endregion
//#region src/node/utils.ts
const __dirname = getDirname(import.meta.url);
const PLUGIN_NAME = "vuepress-plugin-md-enhance";
const logger = new Logger(PLUGIN_NAME);
const CLIENT_FOLDER = ensureEndingSlash(path.resolve(__dirname, "../client"));
const isInstalled = (pkg, hint = true) => {
	const isAvailable = isModuleAvailable(pkg, import.meta);
	if (hint && !isAvailable) logger.error(`Package ${colors.cyan(pkg)} is not installed, please install it manually!`);
	return isAvailable;
};

//#endregion
//#region src/node/markdown-it/playground/vendors/lzstring.ts
/**
* Shimmed from https://github.com/pieroxy/lz-string
*/
const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
const compress = (o, r, n) => {
	if (null == r) return "";
	let e, t, i, s = {}, p = {}, u = "", c = "", a = "", l = 2, f = 3, h = 2, d = [], m = 0, v = 0;
	for (i = 0; i < o.length; i += 1) if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) a = c;
	else {
		if (Object.prototype.hasOwnProperty.call(p, a)) {
			if (a.charCodeAt(0) < 256) {
				for (e = 0; e < h; e++) m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
				for (t = a.charCodeAt(0), e = 0; e < 8; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
			} else {
				for (t = 1, e = 0; e < h; e++) m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
				for (t = c.charCodeAt(0), e = 0; e < 16; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
			}
			0 == --l && (l = Math.pow(2, h), h++), delete p[a];
		} else for (t = s[a], e = 0; e < h; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
		0 == --l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u);
	}
	if ("" !== a) {
		if (Object.prototype.hasOwnProperty.call(p, a)) {
			if (a.charCodeAt(0) < 256) {
				for (e = 0; e < h; e++) m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
				for (t = a.charCodeAt(0), e = 0; e < 8; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
			} else {
				for (t = 1, e = 0; e < h; e++) m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
				for (t = a.charCodeAt(0), e = 0; e < 16; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
			}
			0 == --l && (l = Math.pow(2, h), h++), delete p[a];
		} else for (t = s[a], e = 0; e < h; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
		0 == --l && (l = Math.pow(2, h), h++);
	}
	for (t = 2, e = 0; e < h; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
	for (;;) {
		if (m <<= 1, v == r - 1) {
			d.push(n(m));
			break;
		}
		v++;
	}
	return d.join("");
};
const compressToEncodedURIComponent = (content) => compress(content, 6, (pos) => e.charAt(pos));

//#endregion
//#region src/node/markdown-it/playground/vendors/optionDeclarations.ts
/**
* Note: This file needs to be updated with typescript major and minor updates
*
* https://www.typescriptlang.org/play
*
* Generated from the following code:
*
JSON.stringify(
ts.optionDeclarations.map(({ name, type }) => ({
name,
type: type instanceof Map ? Object.fromEntries(type) : type,
}))
)
*
*/
const optionDeclarations = [
	{
		name: "help",
		type: "boolean"
	},
	{
		name: "help",
		type: "boolean"
	},
	{
		name: "watch",
		type: "boolean"
	},
	{
		name: "preserveWatchOutput",
		type: "boolean"
	},
	{
		name: "listFiles",
		type: "boolean"
	},
	{
		name: "explainFiles",
		type: "boolean"
	},
	{
		name: "listEmittedFiles",
		type: "boolean"
	},
	{
		name: "pretty",
		type: "boolean"
	},
	{
		name: "traceResolution",
		type: "boolean"
	},
	{
		name: "diagnostics",
		type: "boolean"
	},
	{
		name: "extendedDiagnostics",
		type: "boolean"
	},
	{
		name: "generateCpuProfile",
		type: "string"
	},
	{
		name: "generateTrace",
		type: "string"
	},
	{
		name: "incremental",
		type: "boolean"
	},
	{
		name: "declaration",
		type: "boolean"
	},
	{
		name: "declarationMap",
		type: "boolean"
	},
	{
		name: "emitDeclarationOnly",
		type: "boolean"
	},
	{
		name: "sourceMap",
		type: "boolean"
	},
	{
		name: "inlineSourceMap",
		type: "boolean"
	},
	{
		name: "noCheck",
		type: "boolean"
	},
	{
		name: "noEmit",
		type: "boolean"
	},
	{
		name: "assumeChangesOnlyAffectDirectDependencies",
		type: "boolean"
	},
	{
		name: "locale",
		type: "string"
	},
	{
		name: "all",
		type: "boolean"
	},
	{
		name: "version",
		type: "boolean"
	},
	{
		name: "init",
		type: "boolean"
	},
	{
		name: "project",
		type: "string"
	},
	{
		name: "showConfig",
		type: "boolean"
	},
	{
		name: "listFilesOnly",
		type: "boolean"
	},
	{
		name: "ignoreConfig",
		type: "boolean"
	},
	{
		name: "target",
		type: {
			es3: 0,
			es5: 1,
			es6: 2,
			es2015: 2,
			es2016: 3,
			es2017: 4,
			es2018: 5,
			es2019: 6,
			es2020: 7,
			es2021: 8,
			es2022: 9,
			es2023: 10,
			es2024: 11,
			es2025: 12,
			esnext: 99
		}
	},
	{
		name: "module",
		type: {
			none: 0,
			commonjs: 1,
			amd: 2,
			system: 4,
			umd: 3,
			es6: 5,
			es2015: 5,
			es2020: 6,
			es2022: 7,
			esnext: 99,
			node16: 100,
			node18: 101,
			node20: 102,
			nodenext: 199,
			preserve: 200
		}
	},
	{
		name: "lib",
		type: "list"
	},
	{
		name: "allowJs",
		type: "boolean"
	},
	{
		name: "checkJs",
		type: "boolean"
	},
	{
		name: "jsx",
		type: {
			preserve: 1,
			"react-native": 3,
			"react-jsx": 4,
			"react-jsxdev": 5,
			react: 2
		}
	},
	{
		name: "outFile",
		type: "string"
	},
	{
		name: "outDir",
		type: "string"
	},
	{
		name: "rootDir",
		type: "string"
	},
	{
		name: "composite",
		type: "boolean"
	},
	{
		name: "tsBuildInfoFile",
		type: "string"
	},
	{
		name: "removeComments",
		type: "boolean"
	},
	{
		name: "importHelpers",
		type: "boolean"
	},
	{
		name: "importsNotUsedAsValues",
		type: {
			remove: 0,
			preserve: 1,
			error: 2
		}
	},
	{
		name: "downlevelIteration",
		type: "boolean"
	},
	{
		name: "isolatedModules",
		type: "boolean"
	},
	{
		name: "verbatimModuleSyntax",
		type: "boolean"
	},
	{
		name: "isolatedDeclarations",
		type: "boolean"
	},
	{
		name: "erasableSyntaxOnly",
		type: "boolean"
	},
	{
		name: "libReplacement",
		type: "boolean"
	},
	{
		name: "strict",
		type: "boolean"
	},
	{
		name: "noImplicitAny",
		type: "boolean"
	},
	{
		name: "strictNullChecks",
		type: "boolean"
	},
	{
		name: "strictFunctionTypes",
		type: "boolean"
	},
	{
		name: "strictBindCallApply",
		type: "boolean"
	},
	{
		name: "strictPropertyInitialization",
		type: "boolean"
	},
	{
		name: "strictBuiltinIteratorReturn",
		type: "boolean"
	},
	{
		name: "stableTypeOrdering",
		type: "boolean"
	},
	{
		name: "noImplicitThis",
		type: "boolean"
	},
	{
		name: "useUnknownInCatchVariables",
		type: "boolean"
	},
	{
		name: "alwaysStrict",
		type: "boolean"
	},
	{
		name: "noUnusedLocals",
		type: "boolean"
	},
	{
		name: "noUnusedParameters",
		type: "boolean"
	},
	{
		name: "exactOptionalPropertyTypes",
		type: "boolean"
	},
	{
		name: "noImplicitReturns",
		type: "boolean"
	},
	{
		name: "noFallthroughCasesInSwitch",
		type: "boolean"
	},
	{
		name: "noUncheckedIndexedAccess",
		type: "boolean"
	},
	{
		name: "noImplicitOverride",
		type: "boolean"
	},
	{
		name: "noPropertyAccessFromIndexSignature",
		type: "boolean"
	},
	{
		name: "moduleResolution",
		type: {
			node10: 2,
			node: 2,
			classic: 1,
			node16: 3,
			nodenext: 99,
			bundler: 100
		}
	},
	{
		name: "baseUrl",
		type: "string"
	},
	{
		name: "paths",
		type: "object"
	},
	{
		name: "rootDirs",
		type: "list"
	},
	{
		name: "typeRoots",
		type: "list"
	},
	{
		name: "types",
		type: "list"
	},
	{
		name: "allowSyntheticDefaultImports",
		type: "boolean"
	},
	{
		name: "esModuleInterop",
		type: "boolean"
	},
	{
		name: "preserveSymlinks",
		type: "boolean"
	},
	{
		name: "allowUmdGlobalAccess",
		type: "boolean"
	},
	{
		name: "moduleSuffixes",
		type: "list"
	},
	{
		name: "allowImportingTsExtensions",
		type: "boolean"
	},
	{
		name: "rewriteRelativeImportExtensions",
		type: "boolean"
	},
	{
		name: "resolvePackageJsonExports",
		type: "boolean"
	},
	{
		name: "resolvePackageJsonImports",
		type: "boolean"
	},
	{
		name: "customConditions",
		type: "list"
	},
	{
		name: "noUncheckedSideEffectImports",
		type: "boolean"
	},
	{
		name: "sourceRoot",
		type: "string"
	},
	{
		name: "mapRoot",
		type: "string"
	},
	{
		name: "inlineSources",
		type: "boolean"
	},
	{
		name: "experimentalDecorators",
		type: "boolean"
	},
	{
		name: "emitDecoratorMetadata",
		type: "boolean"
	},
	{
		name: "jsxFactory",
		type: "string"
	},
	{
		name: "jsxFragmentFactory",
		type: "string"
	},
	{
		name: "jsxImportSource",
		type: "string"
	},
	{
		name: "resolveJsonModule",
		type: "boolean"
	},
	{
		name: "allowArbitraryExtensions",
		type: "boolean"
	},
	{
		name: "out",
		type: "string"
	},
	{
		name: "reactNamespace",
		type: "string"
	},
	{
		name: "skipDefaultLibCheck",
		type: "boolean"
	},
	{
		name: "charset",
		type: "string"
	},
	{
		name: "emitBOM",
		type: "boolean"
	},
	{
		name: "newLine",
		type: {
			crlf: 0,
			lf: 1
		}
	},
	{
		name: "noErrorTruncation",
		type: "boolean"
	},
	{
		name: "noLib",
		type: "boolean"
	},
	{
		name: "noResolve",
		type: "boolean"
	},
	{
		name: "stripInternal",
		type: "boolean"
	},
	{
		name: "disableSizeLimit",
		type: "boolean"
	},
	{
		name: "disableSourceOfProjectReferenceRedirect",
		type: "boolean"
	},
	{
		name: "disableSolutionSearching",
		type: "boolean"
	},
	{
		name: "disableReferencedProjectLoad",
		type: "boolean"
	},
	{
		name: "noImplicitUseStrict",
		type: "boolean"
	},
	{
		name: "noEmitHelpers",
		type: "boolean"
	},
	{
		name: "noEmitOnError",
		type: "boolean"
	},
	{
		name: "preserveConstEnums",
		type: "boolean"
	},
	{
		name: "declarationDir",
		type: "string"
	},
	{
		name: "skipLibCheck",
		type: "boolean"
	},
	{
		name: "allowUnusedLabels",
		type: "boolean"
	},
	{
		name: "allowUnreachableCode",
		type: "boolean"
	},
	{
		name: "suppressExcessPropertyErrors",
		type: "boolean"
	},
	{
		name: "suppressImplicitAnyIndexErrors",
		type: "boolean"
	},
	{
		name: "forceConsistentCasingInFileNames",
		type: "boolean"
	},
	{
		name: "maxNodeModuleJsDepth",
		type: "number"
	},
	{
		name: "noStrictGenericChecks",
		type: "boolean"
	},
	{
		name: "useDefineForClassFields",
		type: "boolean"
	},
	{
		name: "preserveValueImports",
		type: "boolean"
	},
	{
		name: "keyofStringsOnly",
		type: "boolean"
	},
	{
		name: "plugins",
		type: "list"
	},
	{
		name: "moduleDetection",
		type: {
			auto: 2,
			legacy: 1,
			force: 3
		}
	},
	{
		name: "ignoreDeprecations",
		type: "string"
	}
];

//#endregion
//#region src/node/markdown-it/playground/ts.ts
/**
* Gets a query string representation (hash + queries)
*
* @param code - TS code
* @param compilerOptions - TS compiler options
*
* @returns URL string
*/
const getTypescriptPlaygroundHash = (code, compilerOptions = {}) => {
	const hash = `#code/${compressToEncodedURIComponent(code)}`;
	const queryString = entries(compilerOptions).map(([key, value]) => {
		const item = optionDeclarations.find((option) => option.name === key);
		if (!item || value == null) return "";
		const { type } = item;
		if (isPlainObject(type)) return type[value]?.toString() ?? "";
		return `${key}=${encodeURIComponent(value)}`;
	}).filter((value) => value.length).join("&");
	return `${queryString ? `?${queryString}` : ""}${hash}`;
};
const getTSPlaygroundPreset = ({ service = "https://www.typescriptlang.org/play", ...compilerOptions } = {}) => ({
	name: "playground#ts",
	propsGetter: ({ title = "", files, settings }) => {
		const tsFiles = keys(files).filter((key) => endsWith(key, ".ts"));
		if (tsFiles.length !== 1) logger.error("TS playground only support 1 ts file");
		const link = `${service}${getTypescriptPlaygroundHash(files[tsFiles[0]].content, deepAssign({}, settings, compilerOptions))}`;
		return {
			title,
			link: encodeURIComponent(link)
		};
	}
});

//#endregion
//#region src/node/markdown-it/playground/vue.ts
const VUE_SUPPORTED_EXTENSIONS$1 = new Set([
	"html",
	"js",
	"ts",
	"vue",
	"jsx",
	"tsx",
	"json"
]);
const DEFAULT_VUE_CDN = "https://sfc.vuejs.org/vue.runtime.esm-browser.js";
const DEFAULT_VUE_SERVER_RENDERER_CDN = "https://sfc.vuejs.org/server-renderer.esm-browser.js";
const getVuePlaygroundPreset = (options = {}) => ({
	name: "playground#vue",
	propsGetter: (playgroundData) => {
		const { title = "", files, settings: localSettings } = playgroundData;
		const settings = {
			service: "https://sfc.vuejs.org/",
			dev: false,
			ssr: false,
			...options,
			...localSettings
		};
		const fileInfo = fromEntries(entries(files).filter(([, { ext }]) => VUE_SUPPORTED_EXTENSIONS$1.has(ext)).map(([key, { content }]) => {
			if (key === "import-map.json") {
				const importMap = JSON.parse(content);
				return [key, JSON.stringify(deepAssign({ imports: {
					vue: DEFAULT_VUE_CDN,
					...settings.ssr ? { "vue/server-renderer": DEFAULT_VUE_SERVER_RENDERER_CDN } : {}
				} }, importMap), null, 2)];
			}
			return [key, content];
		}));
		if (settings.ssr && !fileInfo["import-map.json"]) fileInfo["import-map.json"] = JSON.stringify({ imports: {
			vue: DEFAULT_VUE_CDN,
			"vue/server-renderer": DEFAULT_VUE_SERVER_RENDERER_CDN
		} }, null, 2);
		return {
			title,
			link: encodeURIComponent(`${settings.service}#${settings.dev ? "__DEV__" : ""}${settings.ssr ? "__SSR__" : ""}${Buffer.from(JSON.stringify(fileInfo)).toString("base64")}`)
		};
	}
});

//#endregion
//#region src/node/markdown-it/playground/uno.ts
/**
* Gets a query string representation (hash + queries)
*
* @param key - query key
* @param value - query value
* @param sign - join sign
* @returns query string
*/
const getUrlJoinParam = (key, value, sign = "&") => {
	if (value) return `${sign}${key}=${compressToEncodedURIComponent(value)}`;
	return "";
};
const generateUnoURL = (service, inputHTML, customCSS, customConfigRaw) => {
	return `${service}${`/${getUrlJoinParam("html", inputHTML, "?")}${getUrlJoinParam("config", customConfigRaw)}${getUrlJoinParam("css", customCSS)}`}`;
};
const getUnoPlaygroundPreset = ({ service = "https://unocss.dev/play" } = {}) => ({
	name: "playground#unocss",
	propsGetter: ({ title = "", files }) => {
		const htmlFiles = keys(files).filter((key) => endsWith(key, ".html"));
		const cssFiles = keys(files).filter((key) => endsWith(key, ".css"));
		const configFiles = keys(files).filter((key) => endsWith(key, ".js") || endsWith(key, ".ts"));
		if (htmlFiles.length > 1 || cssFiles.length > 1 || configFiles.length > 1) logger.error("UnoCSS playground only support 1 html/css/config file");
		const simplifyParam = (inputFiles) => inputFiles.length === 1 ? files[inputFiles[0]].content : "";
		const link = generateUnoURL(service, simplifyParam(htmlFiles), simplifyParam(cssFiles), simplifyParam(configFiles));
		return {
			title,
			link: encodeURIComponent(link)
		};
	}
});

//#endregion
//#region src/node/markdown-it/kotlinPlayground.ts
const kotlinPlayground = (md) => {
	md.use(playground, {
		name: "kotlin-playground",
		component: "KotlinPlayground",
		propsGetter: ({ title = "", key, files, settings }) => ({
			title,
			key,
			settings: encodeURIComponent(JSON.stringify(settings)),
			files: encodeData(JSON.stringify(entries(files).map(([, { content }]) => content)))
		})
	});
};

//#endregion
//#region src/node/markdown-it/vuePlayground.ts
const VUE_SUPPORTED_EXTENSIONS = new Set([
	"html",
	"js",
	"ts",
	"vue",
	"jsx",
	"tsx",
	"json"
]);
const encodeFiles$1 = (files) => Buffer.from(JSON.stringify(fromEntries(entries(files).filter(([, { ext }]) => VUE_SUPPORTED_EXTENSIONS.has(ext)).map(([key, { content }]) => [key, content])))).toString("base64");
const vuePlayground = (md) => {
	md.use(playground, {
		name: "vue-playground",
		component: "VuePlayground",
		propsGetter: ({ title = "", key, files, settings }) => ({
			title,
			key,
			settings: encodeURIComponent(JSON.stringify(settings)),
			files: encodeURIComponent(encodeFiles$1(files))
		})
	});
};

//#endregion
//#region src/node/markdown-it/sandpack/utils.ts
const encodeFiles = (files) => JSON.stringify(fromEntries(entries(files).map(([key, file]) => [key, typeof file === "string" ? file : file.active || file.hidden || file.readOnly ? file : file.code])));
const getAttrs = (str) => {
	const matches = (/* @__PURE__ */ new RegExp(".*(?<!\\\\)\\[([^}]*)\\].*", "")).exec(str);
	if (matches?.[1]) return fromEntries(matches[1].split(" ").filter((attr) => attr.trim().length > 0).map((attr) => {
		const [key, value] = attr.trim().split("=", 2);
		return [key, value];
	}));
	return {};
};

//#endregion
//#region src/node/markdown-it/sandpack/plugin.ts
const AT_MARKER = `@`;
const VALID_MARKERS = [
	"file",
	"options",
	"setup"
];
const propsGetter = (sandpackData) => ({
	title: sandpackData.title ?? "",
	template: sandpackData.template ?? "",
	files: encodeData(encodeFiles(sandpackData.files)),
	options: encodeData(JSON.stringify(sandpackData.options ?? {})),
	customSetup: encodeData(JSON.stringify(sandpackData.customSetup ?? {}))
});
const jsRunner = (jsCode) => new Function(`return ${jsCode};`)();
const sandpackRule = (state, startLine, endLine, silent) => {
	let start = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	if (state.src[start] !== ":") return false;
	let pos = start + 1;
	while (pos <= max) {
		if (state.src[pos] !== ":") break;
		pos += 1;
	}
	const markerCount = pos - start;
	if (markerCount < 3) return false;
	const markup = state.src.slice(start, pos);
	const content = state.src.slice(pos, max).trim();
	const firstSpace = content.indexOf(" ");
	let containerName = "";
	let title = "";
	if (firstSpace > 0) {
		containerName = content.slice(0, firstSpace);
		title = content.slice(firstSpace + 1).replaceAll(/* @__PURE__ */ new RegExp("(?<!\\\\)\\[([^}]*)\\]", "g"), "");
	} else containerName = content;
	if (!containerName.startsWith("sandpack")) return false;
	if (silent) return true;
	let nextLine = startLine;
	let autoClosed = false;
	while (nextLine < endLine) {
		nextLine += 1;
		start = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		if (start < max && state.sCount[nextLine] < state.blkIndent) break;
		if (state.src[start] === ":" && state.sCount[nextLine] - state.blkIndent < 4) {
			for (pos = start + 1; pos <= max; pos++) if (state.src[pos] !== ":") break;
			if (pos - start >= markerCount) {
				pos = state.skipSpaces(pos);
				if (pos >= max) {
					autoClosed = true;
					break;
				}
			}
		}
	}
	const oldParent = state.parentType;
	const oldLineMax = state.lineMax;
	state.parentType = "sandpack";
	state.lineMax = nextLine - (autoClosed ? 1 : 0);
	const openToken = state.push("sandpack_open", "template", 1);
	openToken.markup = markup;
	openToken.content = content;
	openToken.block = true;
	openToken.info = title;
	openToken.map = [startLine, nextLine - (autoClosed ? 1 : 0)];
	state.md.block.tokenize(state, startLine + 1, nextLine - (autoClosed ? 1 : 0));
	const closeToken = state.push("sandpack_close", "template", -1);
	closeToken.markup = state.src.slice(start, pos);
	closeToken.block = true;
	state.parentType = oldParent;
	state.lineMax = oldLineMax;
	state.line = nextLine + (autoClosed ? 1 : 0);
	return true;
};
const atMarkerRule = (markerName) => (state, startLine, endLine, silent) => {
	let start = state.bMarks[startLine] + state.tShift[startLine];
	let max = state.eMarks[startLine];
	const atMarker = `${AT_MARKER}${markerName}`;
	if (state.src.charAt(start) !== "@") return false;
	let index = 0;
	while (index < atMarker.length) {
		if (atMarker[index] !== state.src[start + index]) return false;
		index += 1;
	}
	const markup = state.src.slice(start, start + index);
	const info = state.src.slice(start + index, max);
	if (silent) return true;
	let nextLine = startLine;
	let autoClosed = false;
	while (nextLine < endLine) {
		nextLine += 1;
		start = state.bMarks[nextLine] + state.tShift[nextLine];
		max = state.eMarks[nextLine];
		if (start < max && state.sCount[nextLine] < state.blkIndent) break;
		if (state.src[start] === AT_MARKER && state.sCount[nextLine] <= state.sCount[startLine]) {
			let openMakerMatched = true;
			for (index = 0; index < atMarker.length; index++) if (atMarker[index] !== state.src[start + index]) {
				openMakerMatched = false;
				break;
			}
			if (openMakerMatched) {
				autoClosed = true;
				nextLine -= 1;
				break;
			}
		}
	}
	const oldParent = state.parentType;
	const oldLineMax = state.lineMax;
	state.parentType = markerName;
	state.lineMax = nextLine;
	const openToken = state.push(`${markerName}_open`, "template", 1);
	openToken.block = true;
	openToken.markup = markup;
	openToken.info = info.trim();
	openToken.map = [startLine, nextLine];
	state.md.block.tokenize(state, startLine + 1, nextLine);
	const closeToken = state.push(`${markerName}_close`, "template", -1);
	closeToken.block = true;
	closeToken.markup = "";
	state.parentType = oldParent;
	state.lineMax = oldLineMax;
	state.line = nextLine + (autoClosed ? 1 : 0);
	return true;
};
const sandpack = (md) => {
	md.block.ruler.before("fence", "sandpack", sandpackRule, { alt: [
		"paragraph",
		"reference",
		"blockquote",
		"list"
	] });
	VALID_MARKERS.forEach((marker) => {
		if (!md.block.ruler.__rules__.some(({ name }) => name === `at-${marker}`)) md.block.ruler.before("fence", `at-${marker}`, atMarkerRule(marker), { alt: [
			"paragraph",
			"reference",
			"blockquote",
			"list"
		] });
	});
	md.renderer.rules.sandpack_open = (tokens, index) => {
		const { content, info } = tokens[index];
		const attrs = getAttrs(content);
		const sandpackData = {
			title: encodeURIComponent(info),
			files: {},
			options: {},
			customSetup: {}
		};
		const arr = content.split(" ", 2)[0].trim().split("#");
		if (arr.length > 1) sandpackData.template = arr[1];
		let currentKey = null;
		let foundOptions = false;
		let foundSetup = false;
		for (let i = index; i < tokens.length; i++) {
			const { block, type, info, content } = tokens[i];
			if (block) {
				if (type === "sandpack_close") break;
				if (type === "sandpack_open") continue;
				if (type === "file_open") {
					if (!info) continue;
					[currentKey] = info.trim().split(" ");
					const fileAttrs = getAttrs(info);
					sandpackData.files[currentKey] = {
						code: "",
						active: "active" in fileAttrs,
						hidden: "hidden" in fileAttrs,
						readOnly: "readOnly" in fileAttrs
					};
				} else if (type === "file_close" || type === "setup_open" || type === "options_open") currentKey = null;
				if (type === "setup_open") foundSetup = true;
				else if (type === "setup_close") foundSetup = false;
				else if (type === "options_open") foundOptions = true;
				else if (type === "options_close") foundOptions = false;
				if (type === "file_close" || type === "setup_close" || type === "options_close" || !content) {
					tokens[i].type = "sandpack_empty";
					tokens[i].hidden = true;
					continue;
				}
				if (foundOptions) {
					if (type === "fence" && (info === "js" || info === "javascript")) sandpackData.options = jsRunner(content.trim());
					foundOptions = false;
				}
				if (foundSetup) {
					if (type === "fence" && (info === "js" || info === "javascript")) sandpackData.customSetup = jsRunner(content.trim());
					foundSetup = false;
				}
				if (type === "fence" && currentKey) sandpackData.files[currentKey].code = content;
				tokens[i].type = "sandpack_empty";
				tokens[i].hidden = true;
			}
		}
		const props = propsGetter(sandpackData);
		return `<SandPack ${keys(attrs).length > 0 ? `${entries(attrs).map(([attr, value]) => value ? `${attr}="${escapeHtml(value)}"` : attr).join(" ")} ` : ""}${entries(props).map(([attr, value]) => value ? `${attr}="${escapeHtml(value)}"` : null).filter(Boolean).join(" ")}>\n`;
	};
	md.renderer.rules.sandpack_close = () => `</SandPack>\n`;
};

//#endregion
//#region src/node/compact/convert.ts
/**
* @param options - old markdown enhance plugin options
* @deprecated
*/
const convertOptions = (options) => {
	const { droppedLogger } = createConverter("md-enhance");
	droppedLogger({
		options,
		old: "enableAll",
		msg: "Please manually enable the features you need."
	});
	droppedLogger({
		options,
		old: "imageFix",
		msg: "This option is no longer needed."
	});
	droppedLogger({
		options,
		old: "lineNumbers",
		msg: "Please use lineNumbers option in @vuepress/plugin-prismjs or @vuepress/plugin-shiki !"
	});
	droppedLogger({
		options,
		old: "alert",
		msg: "Please use alert option in @vuepress/plugin-markdown-hint instead."
	});
	droppedLogger({
		options,
		old: "container",
		msg: "Please use hint option in @vuepress/plugin-markdown-hint instead."
	});
	droppedLogger({
		options,
		old: "hint",
		msg: "Please use hint option in @vuepress/plugin-markdown-hint instead."
	});
	droppedLogger({
		options,
		old: "mdImport",
		msg: "Please use @vuepress/plugin-markdown-include instead."
	});
	droppedLogger({
		options,
		old: "include",
		msg: "Please use @vuepress/plugin-markdown-include instead."
	});
	droppedLogger({
		options,
		old: "imageTitle",
		msg: "Please use figure option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "figure",
		msg: "Please use figure option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "imageMark",
		msg: "Please use mark option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "imgMark",
		msg: "Please use mark option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "imgSize",
		msg: "Please use size option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "imageSize",
		msg: "Please use size option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "lazyload",
		msg: "Please use lazyload option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "imageLazyload",
		msg: "Please use lazyload option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "imgLazyload",
		msg: "Please use lazyload option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "obsidianImgSize",
		msg: "Please use obsidianSize option in @vuepress/plugin-markdown-image instead."
	});
	droppedLogger({
		options,
		old: "linkCheck",
		msg: "Please use @vuepress/plugin-links-check instead."
	});
	droppedLogger({
		options,
		old: "checkLinks",
		msg: "Please use @vuepress/plugin-links-check instead."
	});
	droppedLogger({
		options,
		old: "tex",
		msg: "Please use @vuepress/plugin-markdown-math instead."
	});
	droppedLogger({
		options,
		old: "katex",
		msg: "Please use @vuepress/plugin-markdown-math instead."
	});
	droppedLogger({
		options,
		old: "mathjax",
		msg: "Please use @vuepress/plugin-markdown-math instead."
	});
	droppedLogger({
		options,
		old: "revealjs",
		msg: "Please use @vuepress/plugin-revealjs instead."
	});
	droppedLogger({
		options,
		old: "revealJs",
		msg: "Please use @vuepress/plugin-revealjs instead."
	});
	droppedLogger({
		options,
		old: "presentation",
		msg: "Please use @vuepress/plugin-revealjs instead."
	});
	droppedLogger({
		options,
		old: "codegroup",
		msg: "Please use codeTabs option in @vuepress/plugin-markdown-tab instead."
	});
	droppedLogger({
		options,
		old: "codetabs",
		msg: "Please use codeTabs option in @vuepress/plugin-markdown-tab instead."
	});
	droppedLogger({
		options,
		old: "tabs",
		msg: "Please use tabs option in @vuepress/plugin-markdown-tab instead."
	});
	droppedLogger({
		options,
		old: "vpre",
		msg: "Please use vPre option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "vPre",
		msg: "Please use vPre option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "breaks",
		msg: "Please use breaks option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "linkify",
		msg: "Please use linkify option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "gfm",
		msg: "Please use gfm option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "footnote",
		msg: "Please use footnote option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "tasklist",
		msg: "Please use tasklist option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "component",
		msg: "Please use component option in @vuepress/plugin-markdown-ext instead."
	});
	droppedLogger({
		options,
		old: "align",
		msg: "Please use align option in @vuepress/plugin-markdown-stylize instead."
	});
	droppedLogger({
		options,
		old: "attrs",
		msg: "Please use attrs option in @vuepress/plugin-markdown-stylize instead."
	});
	droppedLogger({
		options,
		old: "mark",
		msg: "Please use mark option in @vuepress/plugin-markdown-stylize instead."
	});
	droppedLogger({
		options,
		old: "spoiler",
		msg: "Please use spoiler option in @vuepress/plugin-markdown-stylize instead."
	});
	droppedLogger({
		options,
		old: "sub",
		msg: "Please use sub option in @vuepress/plugin-markdown-stylize instead."
	});
	droppedLogger({
		options,
		old: "sup",
		msg: "Please use sup option in @vuepress/plugin-markdown-stylize instead."
	});
	droppedLogger({
		options,
		old: "stylize",
		msg: "Please use custom option in @vuepress/plugin-markdown-stylize instead."
	});
	if (options.card) logger.error(`${colors.magenta("card")} is deprecated, please import  ${colors.magenta("VPCard")} from "vuepress-plugin-components" and use it instead.`);
	droppedLogger({
		options,
		old: "chart",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	droppedLogger({
		options,
		old: "chartjs",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	droppedLogger({
		options,
		old: "echarts",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	droppedLogger({
		options,
		old: "flowchart",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	droppedLogger({
		options,
		old: "markmap",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	droppedLogger({
		options,
		old: "mermaid",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	droppedLogger({
		options,
		old: "plantuml",
		msg: "Please use @vuepress/plugin-markdown-chart instead."
	});
	if (isPlainObject(options.vuePlayground)) {
		logger.error(`Customizing @vue/repl with option ${colors.magenta("vuePlayground")} is no longer supported, please import and use ${colors.magenta("defineVuePlaygroundConfig")} from ${colors.magenta("vuepress-plugin-md-enhance/client")} instead.`);
		options.vuePlayground = true;
	}
};

//#endregion
//#region src/node/compact/codeDemo.ts
/**
* @param md - Markdown-it instance
* @deprecated
*/
const legacyCodeDemo = (md) => {
	md.use(container, {
		name: "demo",
		openRender: (tokens, index) => {
			logger.warn("demo container is deprecated, you should use normal-demo, react-demo and vue-demo container instead.");
			const { info } = tokens[index];
			const type = /\[(.*)\]/u.exec(info);
			const title = /^ demo\s*(?:\[.*?\])?\s*(.*)\s*$/u.exec(info);
			let config = "";
			const code = {};
			for (let i = index; i < tokens.length; i++) {
				const { type, content, info } = tokens[i];
				const language = info ? /^([^ :[{]+)/.exec(md.utils.unescapeAll(info).trim())?.[1] ?? "text" : "";
				if (type === `container_demo_close`) break;
				if (!content) continue;
				if (type === "fence") if (language === "json") config = encodeData(content);
				else code[language] = content;
			}
			return `
<CodeDemo id="code-demo-${index}" type="${type?.[1] ?? "normal"}"${title ? ` title="${encodeURIComponent(title[1])}"` : ""}${config ? ` config="${config}"` : ""} code="${encodeData(JSON.stringify(code))}">
`;
		},
		closeRender: () => `</CodeDemo>`
	});
};
/**
* @param md - Markdown-it instance
* @deprecated
*/
const mdDemo = (md) => {
	md.use(demo, {
		name: "md-demo",
		openRender: (tokens, index) => {
			logger.warn("md-demo container is deprecated, you should use preview container instead.");
			return `<MdDemo title="${escapeHtml(tokens[index].info)}" id="md-demo-${index}">\n`;
		},
		codeRender: (tokens, index, options, _env, self) => `<template #code>\n${self.rules.fence(tokens, index, options, _env, self)}</template>\n`,
		contentOpenRender: () => `<template #default>\n`,
		contentCloseRender: () => `</template>\n`,
		closeRender: () => "</MdDemo>\n"
	});
};

//#endregion
//#region src/node/prepare/prepareConfigFile.ts
const prepareConfigFile = (app, options, status, legacy = false) => {
	const imports = /* @__PURE__ */ new Set();
	const enhances = /* @__PURE__ */ new Set();
	if (options.demo) {
		imports.add(`import CodeDemo from "${CLIENT_FOLDER}components/CodeDemo.js";`);
		enhances.add(`app.component("CodeDemo", CodeDemo);`);
		if (legacy) {
			imports.add(`import MdDemo from "${CLIENT_FOLDER}components/MdDemo.js";`);
			enhances.add(`app.component("MdDemo", MdDemo);`);
		}
	}
	if (status.kotlinPlayground) {
		imports.add(`import KotlinPlayground from "${CLIENT_FOLDER}components/KotlinPlayground.js";`);
		enhances.add(`app.component("KotlinPlayground", KotlinPlayground);`);
	}
	if (options.playground) {
		imports.add(`import Playground from "${CLIENT_FOLDER}components/Playground.js";`);
		enhances.add(`app.component("Playground", Playground);`);
	}
	if (status.sandpack) {
		imports.add(`import SandPack from "${CLIENT_FOLDER}components/SandPack.js";`);
		enhances.add(`app.component("SandPack", SandPack);`);
	}
	if (status.vuePlayground) {
		imports.add(`import VuePlayground from "${CLIENT_FOLDER}components/VuePlayground.js";`);
		enhances.add(`app.component("VuePlayground", VuePlayground);`);
	}
	return app.writeTemp(`md-enhance/config.js`, `\
${[...imports.values()].join("\n")}

export default {
  enhance: ({ app }) => {
${[...enhances.values()].flatMap((item) => item.split("\n").map((line) => `    ${line}`)).join("\n")}
  },
};
`);
};

//#endregion
//#region src/node/mdEnhancePlugin.ts
const mdEnhancePlugin = (options = {}, legacy = true) => (app) => {
	if (legacy) convertOptions(options);
	if (app.env.isDebug) logger.info("Options:", options);
	const getStatus = (key, pkgs = []) => Boolean(options[key]) && pkgs.every((pkg) => isInstalled(pkg, Boolean(options[key])));
	const status = {
		kotlinPlayground: getStatus("kotlinPlayground", ["kotlin-playground"]),
		sandpack: getStatus("sandpack", ["sandpack-vue3"]),
		vuePlayground: getStatus("vuePlayground", ["@vue/repl"])
	};
	useSassPalettePlugin(app, {
		id: "hope",
		defaultConfig: getModulePath("vuepress-shared/scss/config.scss", import.meta)
	});
	return {
		name: PLUGIN_NAME,
		define: () => ({
			CODE_DEMO_OPTIONS: {
				...CODE_DEMO_DEFAULT_SETTING,
				...isPlainObject(options.demo) ? options.demo : {}
			},
			VUE_PLAYGROUND_MONACO: isPlainObject(options.vuePlayground) && options.vuePlayground.editor === "monaco"
		}),
		extendsBundlerOptions: (bundlerOptions) => {
			addViteSsrNoExternal(bundlerOptions, app, [
				"@vuepress/helper",
				"fflate",
				"vuepress-shared"
			]);
			if (status.kotlinPlayground) {
				addViteOptimizeDepsInclude(bundlerOptions, app, "kotlin-playground");
				addViteOptimizeDepsNeedsInterop(bundlerOptions, app, "kotlin-playground");
				addViteSsrExternal(bundlerOptions, app, "kotlin-playground");
			}
			if (status.sandpack) {
				addViteOptimizeDepsInclude(bundlerOptions, app, "sandpack-vue3");
				addViteSsrExternal(bundlerOptions, app, "sandpack-vue3");
			}
			if (status.vuePlayground) {
				addViteOptimizeDepsInclude(bundlerOptions, app, "@vue/repl");
				addViteSsrExternal(bundlerOptions, app, "@vue/repl");
				chainWebpack(bundlerOptions, app, (config) => {
					config.resolve.set("conditionNames", [
						"browser",
						"import",
						"module"
					]);
					config.module.set("exprContextCritical", false);
					config.module.set("unknownContextCritical", false);
				});
			}
		},
		extendsMarkdown: (md) => {
			if (options.demo) {
				md.use(normalDemo);
				md.use(vueDemo);
				md.use(reactDemo);
				if (legacy) {
					md.use(legacyCodeDemo);
					md.use(mdDemo);
				}
			}
			if (isPlainObject(options.playground)) {
				const { presets, config = {} } = options.playground;
				presets.forEach((preset) => {
					if (preset === "ts") md.use(playground, getTSPlaygroundPreset(config.ts ?? {}));
					else if (preset === "vue") md.use(playground, getVuePlaygroundPreset(config.vue ?? {}));
					else if (preset === "unocss") md.use(playground, getUnoPlaygroundPreset(config.unocss ?? {}));
					else if (isPlainObject(preset)) md.use(playground, preset);
				});
			}
			if (status.kotlinPlayground) md.use(kotlinPlayground);
			if (status.vuePlayground) md.use(vuePlayground);
			if (status.sandpack) md.use(sandpack);
		},
		clientConfigFile: () => prepareConfigFile(app, options, status, legacy)
	};
};

//#endregion
export { CODE_DEMO_DEFAULT_SETTING, generateUnoURL, getTSPlaygroundPreset, getTypescriptPlaygroundHash, getUnoPlaygroundPreset, getVuePlaygroundPreset, kotlinPlayground, mdEnhancePlugin, normalDemo, playground, reactDemo, sandpack, vueDemo, vuePlayground };
//# sourceMappingURL=index.js.map