import{Logger as e,addViteConfig as t,chainWebpack as n,getBundlerName as r,isFunction as i,isString as a,mergeViteConfig as o}from"@vuepress/helper";import{watch as s}from"chokidar";import{fs as c,getDirname as l,path as u}from"vuepress/utils";const d=import.meta.dirname||l(import.meta.url),f=u.resolve(d,`../../styles/empty.scss`),p=`@vuepress/plugin-sass-palette`,m=new e(p),h=e=>c.pathExistsSync(e)?e:f,g=e=>e?`${e}-`:``,_=(e,t,n)=>{let s=r(t),c=`${g(n)}config`,l=`@use "@sass-palette/${g(n)}config";`,u=RegExp(`@use\\s+(["'])@sass-palette\\/${g(n)}config\\1;`),d=`${g(n)}palette`,f=`@use "@sass-palette/${g(n)}palette";`,p=RegExp(`@use\\s+(["'])@sass-palette\\/${g(n)}palette\\1;`);if(s===`vite`){let t=e,n=t.viteOptions?.css?.preprocessorOptions?.scss?.additionalData;t.viteOptions=o(t.viteOptions??{},{css:{preprocessorOptions:{scss:{charset:!1,additionalData:async(e,t)=>{let r=e;if(i(n)){let i=await n(e,t);r=a(i)?i:i.content}else a(n)&&(r=`${n}${e}`);return r.includes(c)&&!u.test(r)&&(r=`${l}\n${r}`),r.includes(d)&&!p.test(r)&&(r=`${f}\n${r}`),r}}}}})}else if(s===`webpack`){let t=e;t.scss??={};let{additionalData:n}=t.scss;t.scss.additionalData=(e,t)=>{let r=a(n)?`${n}${e}`:i(n)?n(e,t):e;return r.includes(c)&&!u.test(r)&&(r=`${l}\n${r}`),r.includes(d)&&!p.test(r)&&(r=`${f}\n${r}`),r}}},v=(e,t)=>e.writeTemp(`sass-palette/load-${t||`default`}.js`,`\
import "@sass-palette/${g(t)}inject";
`),y=(e,t,n,r)=>e.writeTemp(`sass-palette/${g(t)}config.scss`,`\
@import "file:///${h(n)}";
@import "file:///${h(r)}";
`),b=(e,t)=>e.writeTemp(`sass-palette/${g(t)}inject.scss`,`\
@use "sass:meta";
@use "@sass-palette/helper";
@use "@sass-palette/${g(t)}palette";

$palette-variables: meta.module-variables("${g(t)}palette");
${e.env.isDebug?`
@debug "${t} config variables: #{meta.inspect(meta.module-variables("${g(t)}config"))}";
@debug "${t} palette variables: #{meta.inspect($palette-variables)}";
`:``}

@include helper.inject($palette-variables);
`),x=(e,{id:t,defaultPalette:n,generator:r,userPalette:i})=>e.writeTemp(`sass-palette/${g(t)}palette.scss`,`\
${n?`@import "file:///${h(n)}";`:``}
@import "file:///${h(i)}";
@import "file:///${h(r)}";
`),S=(e,t,n)=>n?e.writeTemp(`sass-palette/${g(t)}style.scss`,`\
@forward "file:///${h(n)}";
`):Promise.resolve(null),C=import.meta.dirname||l(import.meta.url),w=e=>r=>{r.env.isDebug&&m.info(`Options:`,e);let{id:i=``,config:a=`.vuepress/styles/${g(i)}config.scss`,defaultConfig:o=u.resolve(C,`../../styles/default/config.scss`),palette:c=`.vuepress/styles/${g(i)}palette.scss`,defaultPalette:l,generator:d=f,style:h=``}=e,w=r.dir.source(a),T=r.dir.source(c),E=h?r.dir.source(h):null;return{name:p,multiple:!0,id:i,alias:{"@sass-palette/helper":u.resolve(C,`../../styles/helper.scss`),[`@sass-palette/${g(i)}config`]:r.dir.temp(`sass-palette/${g(i)}config.scss`),[`@sass-palette/${g(i)}inject`]:r.dir.temp(`sass-palette/${g(i)}inject.scss`),[`@sass-palette/${g(i)}palette`]:r.dir.temp(`sass-palette/${g(i)}palette.scss`),...h?{[`@sass-palette/${g(i)}style`]:r.dir.temp(`sass-palette/${g(i)}style.scss`)}:{}},extendsBundlerOptions:e=>{t(e,r,{css:{preprocessorOptions:{sass:{silenceDeprecations:[`import`]},scss:{silenceDeprecations:[`import`]}}}}),n(e,r,e=>{e.module.rule(`scss`).use(`sass-loader`).tap(e=>({...e,sassOptions:{...e.sassOptions,silenceDeprecations:[`import`,...e.sassOptions?.silenceDeprecations??[]]}}))}),_(e,r,i)},onInitialized:()=>Promise.all([y(r,i,o,w),b(r,i),x(r,{id:i,defaultPalette:l,generator:d,userPalette:T}),S(r,i,E)]).then(()=>{r.env.isDebug&&m.info(`Style file for ${i} generated`)}),onWatched:(e,t)=>{let n=s(w,{cwd:r.dir.source(),ignoreInitial:!0}),a=()=>y(r,i,o,w).then(()=>{r.env.isDebug&&m.info(`Style file for ${i} updated`)});n.on(`add`,()=>{a()}),n.on(`unlink`,()=>{a()}),t.push(n);let c=s(T,{cwd:r.dir.source(),ignoreInitial:!0}),u=()=>Promise.all([y(r,i,o,w),x(r,{id:i,defaultPalette:l,generator:d,userPalette:T})]).then(()=>{r.env.isDebug&&m.info(`Style file for ${i} updated`)});if(c.on(`add`,()=>{u()}),c.on(`unlink`,()=>{u()}),t.push(c),E){let e=s(E,{cwd:r.dir.source(),ignoreInitial:!0}),n=()=>S(r,i,E).then(()=>{r.env.isDebug&&m.info(`Style file for ${i} updated`)});e.on(`add`,()=>{n()}),e.on(`unlink`,()=>{n()}),t.push(e)}},clientConfigFile:()=>v(r,i)}},T=(e,t)=>{let{plugins:n}=e.pluginApi,r=n.filter(e=>e.name===p).findIndex(e=>e.id===t);r!==-1&&n.splice(r,1)},E=(e,t)=>{let{plugins:n}=e.pluginApi;n.filter(e=>e.name===`@vuepress/plugin-sass-palette`).every(e=>e.id!==t.id)&&e.use(w(t))};export{T as removePalettePlugin,w as sassPalettePlugin,E as useSassPalettePlugin};
//# sourceMappingURL=index.js.map