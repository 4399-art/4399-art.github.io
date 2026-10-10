import './ECharts.css';
import{n as e}from"../../echarts-C9C0qkV9.js";import{LoadingIcon as t,decodeData as n}from"@vuepress/helper/client";import{useDebounceFn as r,useEventListener as i}from"@vueuse/core";import{defineComponent as a,h as o,nextTick as s,onMounted as c,onUnmounted as l,ref as u,shallowRef as d,watch as f}from"vue";import{onContentUpdated as p}from"vuepress/client";const m=(async()=>{}).constructor,h=(e,t,n,r)=>t===`js`?m(`echarts`,`myChart`,`\
let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n,r):Promise.resolve({option:JSON.parse(e)});var g=a({name:`ECharts`,props:{config:{type:String,required:!0},title:String,type:{type:String,default:`json`}},setup(a){let m=e(),g=d(),_=u(!1),v=null;i(`resize`,r(()=>{v?.resize()},100));let y=()=>{v?.dispose(),v=null},b=async()=>{if(__VUEPRESS_SSR__)return;let e=await import(`echarts`);m.isSetup||=(await m.setup?.(),!0),v=e.init(g.value);let{option:t,...r}=await h(n(a.config),a.type,e,v);v.resize(r),v.setOption({...m.option,...t})};return p(async e=>{e===`mounted`&&(await b(),_.value=!0)}),c(()=>{__VUEPRESS_DEV__&&f(()=>a.config,async()=>{y(),await s(),await b()},{flush:`post`})}),l(y),()=>[a.title?o(`div`,{class:`echarts-title`},decodeURIComponent(a.title)):null,o(`div`,{class:`echarts-wrapper`},[o(`div`,{ref:g,class:`echarts-container`}),_.value?null:o(t,{class:`echarts-loading`,height:360})])]}});export{g as default};
//# sourceMappingURL=ECharts.js.map