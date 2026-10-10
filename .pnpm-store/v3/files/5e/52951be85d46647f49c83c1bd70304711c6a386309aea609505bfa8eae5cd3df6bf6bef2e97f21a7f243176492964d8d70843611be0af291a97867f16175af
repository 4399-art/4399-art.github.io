import{t as e}from"../getRedirectHTML-C9SBJAfB.js";import{t}from"../normalizePath-NaIHZnk8.js";import{Logger as n,addViteSsrNoExternal as r,deepAssign as i,entries as a,fromEntries as o,getFullLocaleConfig as s,getModulePath as c,isArray as l,isFunction as u,isLinkAbsolute as d,isLinkHttp as f,isPlainObject as p,keys as m,removeEndingSlash as h,removeLeadingSlash as g}from"@vuepress/helper";import{createPage as _}from"vuepress/core";import{colors as v,fs as y,getDirname as b,path as x}from"vuepress/utils";const S=async e=>{e.pages.every(({path:e})=>e!==`/`)&&e.pages.push(await _(e,{path:`/`,frontmatter:{title:`Home`},content:`Redirecting to the correct locale...
`}))},C=`@vuepress/plugin-redirect`,w=new n(C),T=({config:e,defaultBehavior:t,defaultLocale:n,localeFallback:r},i,a)=>`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <title>Redirecting...</title>
  <script>
    const { hash, origin, pathname } = window.location;
    const routePath = pathname.slice(${a.length});
    const { languages } = window.navigator;
    const anchor = hash.slice(1);

    const config = ${JSON.stringify(e)};
    const availableLocales = ${JSON.stringify(i)};
    const defaultLocale = ${i.includes(n)?JSON.stringify(n):`availableLocales.pop()`};
    const defaultBehavior = ${JSON.stringify(t)}

    let matchedLocalePath = null;

    // get matched locale
    findLanguage:
      for (const lang of languages)
        for (const [localePath, langs] of Object.entries(config))
          if (langs.includes(lang)) {
${r?`            if (!availableLocales.includes(localePath))
              continue;
`:``}\
            matchedLocalePath = localePath;
            break findLanguage;
          }

    // default link
    const defaultLink = defaultLocale? \`\${origin}${h(a)}\${defaultLocale}\${routePath}\${anchor? \`#\${anchor}\`: ""}\`: null;

    // a locale matches
    if (matchedLocalePath) {
      const localeLink = \`\${origin}${h(a)}\${matchedLocalePath}\${routePath}\${anchor? \`#\${anchor}\`: ""}\`;

      if (availableLocales.includes(matchedLocalePath)) {
        location.href = localeLink;
      }
      // the page does not exist
      else {
        // locale homepage
        if (defaultBehavior === "homepage") {
          location.href = \`\${origin}${h(a)}\${matchedLocalePath}\`;
        }
        // default locale page
        else if (defaultBehavior === "defaultLocale" && defaultLink) {
          location.href = defaultLink;
        }
        // as is to get a 404 page of that locale
        else {
          location.href = localeLink;
        }
      }
    }
    // we have a default page
    else if (defaultLink) {
      location.href = defaultLink;
    }
    else {
      location.href = \`\${origin}${h(a)}/404.html\`;
    }
  <\/script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`,E=async(e,t)=>{let n=new Set(e.pages.filter(({pathLocale:e})=>e===`/`).map(({path:e})=>e)),r={};e.pages.filter(({pathLocale:e})=>e!==`/`).forEach(({path:e,pathLocale:t})=>{let i=e.replace(t,`/`).replace(/\/$/,`/index.html`);n.has(i)||(r[i]??=[]).push(t)});let{succeed:i}=w.load(`Generating locale redirect files`);await Promise.all(a(r).map(async([n,r])=>{let i=e.dir.dest(g(n));y.existsSync(i)||(await y.ensureDir(x.dirname(i)),await y.writeFile(i,T(t,r,e.siteData.base)))})),i()},D=async(t,n,r=``)=>{let i=r?h(f(r)?r:`https://${r}`):``,{succeed:o}=w.load(`Generating redirect files`);await Promise.all(a(n).map(async([n,r])=>{let a=t.dir.dest(g(n));if(!y.existsSync(a)){let n=d(r)?`${i}${t.siteData.base}${g(r)}`:r;await y.ensureDir(x.dirname(a)),await y.writeFile(a,e(n))}})),o()},O=[`defaultLocale`,`homepage`,`404`],k=(e,t)=>{let{locales:n}=e.siteData,r=i(o(a(n).filter(([e,{lang:t}])=>t?!0:(w.error(`Missing ${v.magenta(`lang`)} option for locale "${e}", this locale will be ignored!`),!1)).map(([e,{lang:t}])=>[e,[t]])),p(t.localeConfig)?o(a(t.localeConfig).map(([e,t])=>[e,l(t)?t:[t]])):{});return{config:r,autoLocale:t.autoLocale??!1,defaultLocale:t.defaultLocale||m(r).pop(),localeFallback:t.localeFallback??!0,defaultBehavior:t.defaultBehavior&&O.includes(t.defaultBehavior)?t.defaultBehavior:`defaultLocale`}},A=(e,n)=>{let r=u(n.config)?n.config(e):p(n.config)?n.config:{};return{...o(e.pages.flatMap(({frontmatter:e,path:n})=>l(e.redirectFrom)?e.redirectFrom.map(e=>[t(e,!0),n]):e.redirectFrom?[[t(e.redirectFrom,!0),n]]:[])),...o(a(r).map(([e,n])=>[t(e,!0),t(n)]))}},j=({frontmatter:e},n)=>{let{base:r}=n.siteData,{redirectTo:i}=e;if(i){let n=t(d(i)?`${r}${g(i)}`:i);(e.head??=[]).unshift([`script`,{},`{\
const anchor = window.location.hash.slice(1);\
window.location.replace(\`${n}\${anchor? \`#\${anchor}\`: ""}\`);\
}`])}},M=[[[`en`,`en-US`],{name:`English`,hint:`Your primary language is $1, do you want to switch to it?`,switch:`Switch to $1`,cancel:`Cancel`,remember:`Remember my choice`}],[[`zh`,`zh-CN`,`zh-Hans`],{name:`简体中文`,hint:`你的首选语言是 $1，是否切换到该语言？`,switch:`切换到 $1`,cancel:`取消`,remember:`记住我的选择`}],[[`zh-TW`,`zh-Hant`],{name:`繁體中文`,hint:`你的首選語言是 $1，是否切換到該語言？`,switch:`切換到 $1`,cancel:`取消`,remember:`記住我的選擇`}],[[`de`,`de-DE`],{name:`Deutsch`,hint:`Ihre bevorzugte Sprache ist $1, möchten Sie zu dieser wechseln?`,switch:`Zu $1 wechseln`,cancel:`Abbrechen`,remember:`Meine Wahl merken`}],[[`de-AT`],{name:`Deutsch (Österreich)`,hint:`Ihre bevorzugte Sprache ist $1, möchten Sie zu dieser wechseln?`,switch:`Zu $1 wechseln`,cancel:`Abbrechen`,remember:`Meine Wahl merken`}],[[`vi`,`vi-VN`],{name:`Tiếng Việt`,hint:`Ngôn ngữ chính của bạn là $1, bạn có muốn chuyển sang nó?`,switch:`Chuyển sang $1`,cancel:`Hủy`,remember:`Nhớ lựa chọn của tôi`}],[[`uk`],{name:`Українська`,hint:`Вашою основною мовою є $1, чи бажаєте ви переключитися на неї?`,switch:`Переключитися на $1`,cancel:`Скасувати`,remember:`Запам’ятати мій вибір`}],[[`ru`,`ru-RU`],{name:`Русский`,hint:`Ваш основной язык - $1, вы хотите переключиться на него?`,switch:`Переключиться на $1`,cancel:`Отмена`,remember:`Запомнить мой выбор`}],[[`br`],{name:`Português (Brasil)`,hint:`A língua principal é $1, deseja mudar para ela?`,switch:`Mudar para $1`,cancel:`Cancelar`,remember:`Lembrar minha escolha`}],[[`pl`,`pl-PL`],{name:`Polski`,hint:`Twoim głównym językiem jest $1, czy chcesz przełączyć się na niego?`,switch:`Przełącz na $1`,cancel:`Anuluj`,remember:`Zapamiętaj moje wybory`}],[[`sk`,`sk-SK`],{name:`Slovenčina`,hint:`Vašou hlavnou jazykom je $1, chcete prepnúť naň?`,switch:`Prepnúť na $1`,cancel:`Zrušiť`,remember:`Zapamätať si moju voľbu`}],[[`fr`,`fr-FR`],{name:`Français`,hint:`Votre langue principale est $1, voulez-vous la changer ?`,switch:`Changer pour $1`,cancel:`Annuler`,remember:`Se souvenir de mon choix`}],[[`tr`,`tr-TR`],{name:`Türkçe`,hint:`Ana diliniz $1, ona geçmek ister misiniz?`,switch:`$1'e geç`,cancel:`İptal`,remember:`Seçimimi hatırla`}],[[`fi`,`fi-FI`],{name:`Suomi`,hint:`Pääkielenäsi on $1, haluatko vaihtaa siihen?`,switch:`Vaihda $1:een`,cancel:`Peruuta`,remember:`Muista valintani`}],[[`hu`,`hu-HU`],{name:`Magyar`,hint:`A fő nyelvét $1, szeretné váltani?`,switch:`Váltás $1`,cancel:`Mégse`,remember:`Emlékezzen a választásomra`}],[[`id`,`id-ID`],{name:`Bahasa Indonesia`,hint:`Bahasa utama Anda adalah $1, apakah Anda ingin beralih ke sana?`,switch:`Beralih ke $1`,cancel:`Batal`,remember:`Ingat pilihan saya`}],[[`nl`,`nl-NL`],{name:`Nederlands`,hint:`Uw primaire taal is $1, wilt u overschakelen?`,switch:`Overschakelen naar $1`,cancel:`Annuleren`,remember:`Onthoud mijn keuze`}],[[`ja`,`ja-JP`],{name:`日本語`,hint:`あなたの主要な言語は $1 です。それに切り替えますか？`,switch:`$1 に切り替える`,cancel:`キャンセル`,remember:`選択を記憶する`}],[[`ko`,`ko-KO`],{name:`한국어`,hint:`당신의 기본 언어는 $1입니다. 그것으로 전환 하시겠습니까?`,switch:`$1로 전환`,cancel:`취소`,remember:`내 선택 기억하기`}],[[`es`,`es-ES`],{name:`Español`,hint:`Su idioma principal es $1, ¿desea cambiarlo?`,switch:`Cambiar a $1`,cancel:`Cancelar`,remember:`Recordar mi elección`}],[[`/pt`],{name:`Português`,hint:`Sua língua principal é $1, deseja mudar para ela?`,switch:`Mudar para $1`,cancel:`Cancelar`,remember:`Lembrar minha escolha`}]],{url:N}=import.meta,P=b(N),F=(e={})=>t=>{t.env.isDebug&&w.info(`Options:`,e);let n=k(t,e),i=null;return{name:C,alias:{"@vuepress/plugin-redirect/component":e.switchLocale===`modal`?x.resolve(P,`../client/components/RedirectModal.js`):e.switchLocale===`popup`?x.resolve(P,`../client/components/RedirectPopup.js`):c(`@vuepress/helper/noopComponent`,import.meta)},define:{__REDIRECT_COMPONENT__:e.switchLocale===`modal`||e.switchLocale===`popup`,__REDIRECT_CONFIG__:n,__REDIRECT_DIRECT__:e.switchLocale===`direct`,__REDIRECT_LOCALES__:s({app:t,name:`redirect`,config:e.locales,default:M})},extendsBundlerOptions:e=>{r(e,t,`@vuepress/helper`)},extendsPage:e=>{j(e,t)},onInitialized:async()=>{i=A(t,e),t.env.isDebug&&w.info(`Redirect Map:`,i),e.autoLocale&&t.env.isDebug&&await S(t)},onPrepared:async()=>{await t.writeTemp(`redirect/map.js`,`\
export const redirectMap = ${t.env.isDev?JSON.stringify(i,null,2):`{}`};
`),t.env.isDev&&(i=null)},onGenerated:async()=>{await D(t,i),e.autoLocale&&await E(t,n)},clientConfigFile:x.join(P,`../client/config.js`)}};export{F as redirectPlugin};
//# sourceMappingURL=index.js.map