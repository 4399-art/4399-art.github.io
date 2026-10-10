import{figure as e}from"@mdit/plugin-figure";import{imgLazyload as t}from"@mdit/plugin-img-lazyload";import{imgMark as n}from"@mdit/plugin-img-mark";import{imgSize as r,legacyImgSize as i,obsidianImgSize as a}from"@mdit/plugin-img-size";import{deepAssign as o,getModulePath as s}from"@vuepress/helper";import{isPlainObject as c}from"vuepress/shared";const l=`@vuepress/plugin-markdown-image`,u=async(e,{figure:t,mark:n})=>{let r=``;return t&&(r+=`\
import "${s(`${l}/figure.css`,import.meta)}"
`),n&&(r+=`\
import "${s(`${l}/mark.css`,import.meta)}"
`),e.writeTemp(`markdown-image/client.js`,`\
${r}
`)},d=s=>d=>{let f=o({},d.options.markdown.image,s);return d.options.markdown.image=f,{name:l,extendsMarkdown:o=>{let{mark:s}=f;f.figure&&o.use(e),f.lazyload&&o.use(t),f.size&&o.use(r),f.legacySize&&o.use(i),f.obsidianSize&&o.use(a),s&&o.use(n,c(s)?s:{})},clientConfigFile:()=>u(d,f)}};export{d as markdownImagePlugin};
//# sourceMappingURL=index.js.map