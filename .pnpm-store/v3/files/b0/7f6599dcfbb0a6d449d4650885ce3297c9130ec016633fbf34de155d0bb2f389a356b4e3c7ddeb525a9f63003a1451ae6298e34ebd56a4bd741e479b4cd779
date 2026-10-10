import{extractInfo as e,icon as t,stringifyAttrs as n}from"@mdit/plugin-icon";import{Logger as r,addCustomElement as i,addViteSsrNoExternal as a,endsWith as o,ensureEndingSlash as s,getModulePath as c,isArray as l,isLinkAbsolute as u,isLinkHttp as d,isString as f}from"@vuepress/helper";import{getDirname as p,path as m}from"vuepress/utils";const h=e=>/\/iconify-icon(?:[@/]|$)/.test(e),g=e=>/^(?:https:)?\/\/kit\.fontawesome\.com\//.test(e)||/\/fontawesome(?:[@/-]|$)/.test(e),_=e=>/^(?:https:)?\/\/at\.alicdn\.com\/t\//.test(e),v=e=>l(e)?e.every(e=>g(e)):e===`fontawesome`||e===`fontawesome-with-brands`||g(e),y=e=>l(e)?e.every(e=>_(e)):_(e),b=e=>f(e)&&(h(e)||e===`iconify`),x=({assets:e=`iconify`})=>v(e)?`fontawesome`:y(e)?`iconfont`:b(e)?`iconify`:`unknown`,S=`@vuepress/plugin-icon`,C=new r(S),w=e=>`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/${e}.min.js`,T=e=>({type:`script`,content:`\
useScriptTag(
  \`${e}\`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);
`}),E=e=>{if(f(e)){if(e===`fontawesome`)return[`solid`,`regular`,`fontawesome`].map(e=>w(e)).map(e=>T(e));if(e===`fontawesome-with-brands`)return[`all`].map(e=>w(e)).map(e=>T(e));if(e===`iconify`)return[{type:`script`,content:"useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);"}];let t=d(e)||u(e)?e:`//${e}`;if(o(t,`.css`))return[{type:`style`,content:`\
useStyleTag(\`\\
@import url("${t}");
\`);\
`}];if(o(t,`.js`))return g(t)?[T(t)]:[{type:`script`,content:`\
          useScriptTag(\`${t}\`);\
          `}];C.error(`Can not recognize icon link: "${e}"`)}return[]},D=(e=`iconify`)=>(l(e)?e:[e]).flatMap(e=>E(e)),O=(e,t)=>t??(e===`iconfont`?`iconfont icon-`:``),k=p(import.meta.url),A=s(m.resolve(k,`../client`)),j=(e,{assets:t,prefix:n,component:r=`VPIcon`},i)=>{let a=D(t),o=O(i,n);return e.writeTemp(`icon/config.js`,`\
import { hasGlobalComponent } from "${c(`@vuepress/helper/client`,import.meta)}";
${a.some(({type:e})=>e===`script`)?`\
import { useScriptTag } from "${c(`@vueuse/core`,import.meta)}";
`:``}\
${a.some(({type:e})=>e===`style`)?`\
import { useStyleTag } from "${c(`@vueuse/core`,import.meta)}";
`:``}\
import { h } from "vue";
import { VPIcon } from "${A}index.js"

export default {
  enhance: ({ app }) => {
${r?`\
    if(!hasGlobalComponent("${r}")) {
      app.component(
        "${r}",
        (props) =>
          h(VPIcon, {
            type: "${i}",
            prefix: "${o}",
            ...props,
          })
      )
    }
`:``}\
  },
  setup: () => {
${a.map(({content:e})=>`    ${e}`).join(`
`)}
  },
}
`)},M=(r={})=>{let o=r.type??x(r);return{name:S,extendsBundlerOptions:(e,t)=>{a(e,t,`@vuepress/helper`),o===`iconify`&&i(e,t,`iconify-icon`)},extendsMarkdown:i=>{(r.markdown??!0)&&i.use(t,{render:t=>{let{attrs:i,content:a,color:o,size:s}=e({content:t});return o&&!i.color&&(i.color=o),s&&!i.size&&(i.size=s),`<${r.component??`VPIcon`} icon="${a}"${n(i)} />`}})},clientConfigFile:e=>j(e,r,o)}};export{M as iconPlugin};
//# sourceMappingURL=index.js.map