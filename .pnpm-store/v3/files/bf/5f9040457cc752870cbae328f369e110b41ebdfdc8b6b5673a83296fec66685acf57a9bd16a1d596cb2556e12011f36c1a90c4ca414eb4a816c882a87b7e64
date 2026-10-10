import{getDirname as e,path as t}from"vuepress/utils";import{Logger as n}from"@vuepress/helper";import r from"node:fs/promises";import{watch as i}from"chokidar";const a=`@vuepress/plugin-notice`,o=new n(a),s=(e=[])=>e.map(({key:e,contentType:t,contentFile:n,...r})=>`match`in r?{...r,match:r.match.source,noticeKey:e}:{...r,noticeKey:e}).sort((e,t)=>`match`in e?`match`in t?t.match.localeCompare(e.match):-1:`match`in t?1:(t.path||``).localeCompare(e.path||``)),c=async e=>{try{return await r.readFile(e,`utf-8`)}catch{return``}},l=new Map,u=async(e,n)=>{let{contentType:r=`html`,contentFile:i,content:a=``,...o}=n;if(i){if(i=t.resolve(i),l.has(i))return l.get(i);r=i.endsWith(`.md`)?`markdown`:`html`,a=await c(i)}r===`markdown`&&(a=e.markdown.render(a,{filePath:i}));let s={content:a,...o};return i&&l.set(i,s),s},d=async(e,t=[])=>{let n=s(await Promise.all(t.map(t=>u(e,t)))),r=`\
export const NOTICE_OPTIONS = JSON.parse(${JSON.stringify(JSON.stringify(n))})
`;e.env.isDev&&(r+=`
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateNoticeOptions) {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ NOTICE_OPTIONS }) => {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  })
}
`),await e.writeTemp(`internal/noticeOptions.js`,r)},f=(e,n)=>{let r=i(n.map(({contentFile:e})=>e).filter(Boolean),{ignoreInitial:!0}),a=async r=>{let i=t.resolve(r),a=l.get(i);if(a){let t=i.endsWith(`.md`)?`markdown`:`html`,n=await c(i);a.content=t===`markdown`?e.markdown.render(n,{filePath:i}):n}await d(e,n)};return r.on(`change`,e=>{a(e)}),r},p=import.meta.dirname||e(import.meta.url),m=e=>n=>(n.env.isDebug&&o.info(`Options`,e),{name:a,onPrepared:async()=>{await d(n,e.config)},onWatched:(t,r)=>{r.push(f(n,e.config))},clientConfigFile:t.resolve(p,`../client/config.js`)});export{m as noticePlugin};
//# sourceMappingURL=index.js.map