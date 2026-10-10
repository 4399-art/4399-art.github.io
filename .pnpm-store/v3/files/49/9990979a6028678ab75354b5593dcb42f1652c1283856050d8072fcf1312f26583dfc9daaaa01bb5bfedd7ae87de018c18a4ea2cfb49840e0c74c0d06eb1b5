import { ensureEndingSlash, entries, isLinkHttp, isMobile, isSafari, isiPad, keys } from "@vuepress/helper/client";
import { withBase } from "vuepress/client";

//#region src/client/utils/iframeAllow.ts
const videoIframeAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture";

//#endregion
//#region src/client/utils/getMetaContent.ts
const getMetaContent = (name) => document.querySelector(`meta[name="${name}"]`)?.getAttribute("content") ?? null;

//#endregion
//#region src/client/utils/popup.ts
var Popup = class {
	containerElement;
	popupElements = /* @__PURE__ */ new Map();
	constructor() {
		const containerId = "popup-container";
		const containerElement = document.querySelector(`#${containerId}`);
		if (containerElement) this.containerElement = containerElement;
		else {
			this.containerElement = document.createElement("div");
			this.containerElement.id = containerId;
			document.body.append(this.containerElement);
		}
	}
	emit(html, duration) {
		const popupWrapperElement = document.createElement("div");
		const popupElement = document.createElement("div");
		const popupId = Date.now();
		this.containerElement.append(popupWrapperElement);
		this.popupElements.set(popupId, popupWrapperElement);
		popupWrapperElement.className = "popup-wrapper appear";
		popupWrapperElement.append(popupElement);
		popupWrapperElement.addEventListener("click", () => {
			this.close(popupId);
		});
		popupElement.className = "popup-container";
		popupElement.innerHTML = html;
		if (typeof duration === "number") setTimeout(() => {
			this.close(popupId);
		}, duration);
		return popupId;
	}
	close(popupId) {
		if (popupId) {
			const popupWrapperElement = this.popupElements.get(popupId);
			if (!popupWrapperElement) return;
			popupWrapperElement.classList.replace("appear", "disappear");
			popupWrapperElement.children[0].addEventListener("animationend", () => {
				popupWrapperElement.remove();
				this.popupElements.delete(popupId);
			});
		} else keys(this.popupElements).forEach((id) => {
			this.close(Number(id));
		});
	}
	destroy() {
		this.containerElement.remove();
	}
};

//#endregion
//#region src/client/utils/registerMse.ts
const SUPPORTED_VIDEO_TYPES = [
	"mp4",
	"mp3",
	"webm",
	"ogg"
];
const isDashjsInstalled = typeof DASHJS_INSTALLED === "boolean" && DASHJS_INSTALLED;
const isHlsJsInstalled = typeof HLS_JS_INSTALLED === "boolean" && HLS_JS_INSTALLED;
const isMpegtsJsInstalled = typeof MPEGTS_JS_INSTALLED === "boolean" && MPEGTS_JS_INSTALLED;
if (isDashjsInstalled) SUPPORTED_VIDEO_TYPES.push("mpd", "dash");
if (isHlsJsInstalled) SUPPORTED_VIDEO_TYPES.push("m3u8", "hls");
if (isMpegtsJsInstalled) SUPPORTED_VIDEO_TYPES.push("ts", "flv");
const getTypeByUrl = (url) => url.split(".").pop() ?? "";
const registerMseDash = async (mediaElement, src, onDestroy, { autoPlay = false, startTime = 0 } = {}) => {
	if (__VUEPRESS_SSR__) return;
	if (isDashjsInstalled) {
		const { default: dashjs } = await import(
			/* webpackChunkName: "dashjs" */
			"dashjs"
);
		if (dashjs.supportsMediaSource()) {
			const dashPlayer = dashjs.MediaPlayer().create();
			dashPlayer.initialize(mediaElement, src, autoPlay, startTime);
			onDestroy(() => {
				dashPlayer.destroy();
			});
		}
	}
};
const registerMseFlv = async (mediaElement, src, onDestroy) => {
	if (__VUEPRESS_SSR__) return;
	if (isMpegtsJsInstalled) {
		const { default: mpegts } = await import(
			/* webpackChunkName: "mpegts.js" */
			"mpegts.js/dist/mpegts.js"
);
		if (mpegts.isSupported()) {
			const flvPlayer = mpegts.createPlayer({
				type: "flv",
				url: src
			});
			flvPlayer.attachMediaElement(mediaElement);
			flvPlayer.load();
			onDestroy(() => {
				flvPlayer.destroy();
			});
		}
	}
};
const registerMseHls = async (mediaElement, src, onDestroy) => {
	if (__VUEPRESS_SSR__) return;
	if (mediaElement.canPlayType("application/x-mpegURL") || mediaElement.canPlayType("application/vnd.apple.mpegURL")) mediaElement.src = src;
	else if (isHlsJsInstalled) {
		const { default: HLS } = await import(
			/* webpackChunkName: "hls.js" */
			"hls.js/dist/hls.min.js"
);
		if (HLS.isSupported()) {
			const hlsInstance = new HLS();
			hlsInstance.attachMedia(mediaElement);
			hlsInstance.on(HLS.Events.MEDIA_ATTACHED, () => {
				hlsInstance.loadSource(src);
			});
			onDestroy(() => {
				hlsInstance.destroy();
			});
		}
	}
};

//#endregion
//#region src/client/utils/viewPDF.ts
/**
* Fork and edited from https://github.com/pipwerks/PDFObject/blob/master/pdfobject.js
*
* The MIT License (MIT)
* Copyright © 2021 Philip Hutchison
* https://pipwerks.mit-license.org/
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const logError = (msg) => {
	console.error(`[PDF]: ${msg}`);
};
const emptyNodeContents = (node) => {
	while (node.firstChild) node.firstChild.remove();
};
const getTargetElement = (targetSelector) => targetSelector instanceof HTMLElement ? targetSelector : targetSelector === "string" ? document.querySelector(targetSelector) : document.body;
const buildURLFragmentString = (options) => {
	let url = entries(options).map(([key, value]) => key === "noToolbar" ? `toolbar=${value ? "0" : "1"}` : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
	if (url) url = `#${url.slice(0, -1)}`;
	return url;
};
const addPDFViewer = (target, { embedType, url, options = {}, title = /\/([^/]+).pdf/.exec(url)?.[1] ?? "PDF Viewer" }) => {
	emptyNodeContents(target);
	const source = `${embedType === "pdfjs" ? `${ensureEndingSlash(withBase(PDFJS_URL))}web/viewer.html?file=${encodeURIComponent(url)}` : url}${buildURLFragmentString(options)}`;
	const elementType = embedType === "pdfjs" || embedType === "iframe" ? "iframe" : "embed";
	const el = document.createElement(elementType);
	el.className = "pdf-viewer";
	el.type = "application/pdf";
	el.title = title;
	el.src = source;
	if (el instanceof HTMLIFrameElement) el.allow = "fullscreen";
	target.classList.add("pdf-viewer-container");
	target.append(el);
	return target.querySelector(elementType);
};
const DEFAULT_PDF_JS_HINT = "pdfjs url is not defined";
const viewPDF = (targetSelector, { url, title, hint = DEFAULT_PDF_JS_HINT, options = {}, pdfjs }) => {
	if (!globalThis.navigator?.userAgent) return null;
	const { navigator } = globalThis;
	const { userAgent } = navigator;
	const isMobileDevice = isiPad() || isMobile();
	const isSafariDesktop = !isMobileDevice && isSafari();
	const isFirefoxWithPDFJS = !isMobileDevice && /firefox/iu.test(userAgent) && userAgent.split("rv:").length > 1 ? Number.parseInt(userAgent.split("rv:")[1].split(".")[0], 10) > 18 : false;
	const supportsPDFs = navigator.pdfViewerEnabled || isFirefoxWithPDFJS;
	const targetNode = getTargetElement(targetSelector);
	if (!targetNode) {
		logError("Target element cannot be determined");
		return null;
	}
	const fullLink = isLinkHttp(url) ? url : __VUEPRESS_DEV__ ? null : `${globalThis.origin}${url}`;
	if (pdfjs) {
		if (!fullLink) {
			logError("PDF link is not accessible via internet.");
			return null;
		}
		if (!PDFJS_URL) {
			targetNode.innerHTML = hint.replaceAll(String.raw`\[url\]`, fullLink);
			logError(DEFAULT_PDF_JS_HINT);
			return null;
		}
		return addPDFViewer(targetNode, {
			embedType: "pdfjs",
			url: fullLink,
			options,
			title
		});
	}
	if (supportsPDFs || !isMobileDevice) return addPDFViewer(targetNode, {
		embedType: isSafariDesktop ? "iframe" : "embed",
		url,
		options,
		title
	});
	if (PDFJS_URL && fullLink) return addPDFViewer(targetNode, {
		embedType: "pdfjs",
		url: fullLink,
		options,
		title
	});
	targetNode.innerHTML = hint.replaceAll(String.raw`\[url\]`, url);
	logError("This browser does not support embedded PDFs");
	return null;
};

//#endregion
//#region src/client/utils/index.ts
const DEFAULT_RATIO = 16 / 9;

//#endregion
export { registerMseDash as a, Popup as c, getTypeByUrl as i, getMetaContent as l, viewPDF as n, registerMseFlv as o, SUPPORTED_VIDEO_TYPES as r, registerMseHls as s, DEFAULT_RATIO as t, videoIframeAllow as u };
//# sourceMappingURL=utils-D2mBFlOE.js.map