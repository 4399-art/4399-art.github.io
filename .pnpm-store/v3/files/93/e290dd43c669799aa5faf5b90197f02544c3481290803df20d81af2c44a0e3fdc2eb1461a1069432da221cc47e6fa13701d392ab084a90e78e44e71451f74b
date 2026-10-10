import './ChartJS.css';
import{LoadingIcon as e,decodeData as t,useDarkMode as n}from"@vuepress/helper/client";import{watchImmediate as r}from"@vueuse/core";import{defineComponent as i,h as a,nextTick as o,onMounted as s,onUnmounted as c,ref as l,shallowRef as u,useId as d}from"vue";const f=(e,t)=>t===`json`?JSON.parse(e):Function(`\
let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;\
`)();var p=i({name:`ChartJS`,props:{config:{type:String,required:!0},title:String,type:{type:String,default:`json`}},setup(i){let p=n(),m=u(),h=d(),g=l(!1),_,v=()=>{_?.destroy(),_=null},y=async()=>{if(__VUEPRESS_SSR__)return;let{default:e}=await import(`chart.js/auto`);e.defaults.borderColor=p.value?`#ccc`:`#36A2EB`,e.defaults.color=p.value?`#fff`:`#000`,e.defaults.maintainAspectRatio=!1,_=new e(h,f(t(i.config),i.type))};return s(()=>{r(__VUEPRESS_DEV__?[()=>i.config,p]:p,async()=>{v(),await o(),await y(),g.value=!0},{flush:`post`})}),c(v),()=>[i.title?a(`div`,{class:`chartjs-title`},decodeURIComponent(i.title)):null,g.value?null:a(e,{class:`chartjs-loading`,height:192}),a(`div`,{ref:m,class:`chartjs-wrapper`,style:{display:g.value?`block`:`none`}},a(`canvas`,{id:h,height:400}))]}});export{p as default};
//# sourceMappingURL=ChartJS.js.map