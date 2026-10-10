import{deepAssign as e,getFullLocaleConfig as t}from"@vuepress/helper";import{getDirname as n,path as r}from"vuepress/utils";import{escapeHtml as i}from"@mdit/helper";import{demo as a}from"@mdit/plugin-demo";const o=[[[`en`,`en-US`],{toggle:`Toggle code`}],[[`zh`,`zh-CN`,`zh-Hans`],{toggle:`切换代码`}],[[`zh-TW`,`zh-Hant`],{toggle:`切換程式碼`}],[[`de`,`de-DE`],{toggle:`Code umschalten`}],[[`de-AT`],{toggle:`Code umschalten`}],[[`vi`,`vi-VN`],{toggle:`Chuyển đổi mã`}],[[`uk`],{toggle:`Перемкнути код`}],[[`fr`,`fr-FR`],{toggle:`Basculer le code`}],[[`es`,`es-ES`],{toggle:`Alternar código`}],[[`it`,`it-IT`],{toggle:`Attiva/disattiva codice`}],[[`ja`,`ja-JP`],{toggle:`コードを切り替え`}],[[`ko`,`ko-KR`],{toggle:`코드 전환`}],[[`tr`,`tr-TR`],{toggle:`Kodu değiştir`}],[[`pt`,`pt-PT`],{toggle:`Alternar código`}],[[`ru`,`ru-RU`],{toggle:`Переключить код`}]],s=e=>{e.use(a,{name:`preview`,openRender:(e,t)=>`<VPPreview title="${i(e[t].info)}">\n`,codeRender:(e,t,n,r,i)=>`\
<template #code>
${i.rules.fence(e,t,n,r,i)}
</template>
`,contentOpenRender:()=>`<template #content>
`,contentCloseRender:()=>`</template>
`,closeRender:()=>`</VPPreview>
`})},c=`@vuepress/plugin-markdown-preview`,l=n(import.meta.url),u=(n={})=>i=>{let a=e({},i.options.markdown.preview,n);return i.options.markdown.preview=a,{name:c,define:()=>({__PREVIEW_LOCALES__:t({app:i,name:c,default:o,config:a.locales})}),extendsMarkdown:e=>{e.use(s)},clientConfigFile:r.resolve(l,`../client/config.js`)}};export{u as markdownPreviewPlugin,s as preview};
//# sourceMappingURL=index.js.map