import { t as RedirectBehaviorConfig } from "../behavior-C8vQI65c.js";
import { t as RedirectPluginLocaleConfig } from "../types-B9aizXKO.js";
import { t as _default } from "../RedirectModal-BcXrVGpm.js";
import { ComputedRef, ExtractPropTypes, PropType, Ref } from "vue";

//#region src/client/composables/setupDevServerRedirect.d.ts
declare const setupDevServerRedirect: ({
  autoLocale,
  config,
  defaultBehavior,
  defaultLocale: defaultLocalePath,
  localeFallback
}: RedirectBehaviorConfig) => void;
//#endregion
//#region src/client/composables/setupRedirect.d.ts
interface LocaleInfo {
  lang: string;
  localePath: string;
}
declare const setupRedirect: (behaviorConfig: RedirectBehaviorConfig) => void;
//#endregion
//#region src/client/composables/useRedirect.d.ts
declare const propsOptions: {
  readonly config: {
    readonly type: PropType<RedirectBehaviorConfig>;
    readonly required: true;
  };
  readonly locales: {
    readonly type: PropType<RedirectPluginLocaleConfig>;
    readonly required: true;
  };
};
type Props = ExtractPropTypes<typeof propsOptions>;
interface Redirect {
  showComponent: Ref<boolean>;
  shouldRemember: Ref<boolean>;
  locale: ComputedRef<{
    hint: string[];
    switch: string;
    cancel: string;
    remember: string;
  } | null>;
  persistUserAction: () => void;
  redirect: () => void;
}
declare const useRedirect: (props: Props) => Redirect;
//#endregion
//#region src/client/composables/useRedirectLocation.d.ts
interface RedirectLocation {
  lang: string;
  localePath: string;
}
declare const useRedirectLocation: (behaviorConfig: RedirectBehaviorConfig) => ComputedRef<RedirectLocation | null>;
//#endregion
export { LocaleInfo, Redirect, RedirectLocation, _default as RedirectModal, propsOptions, setupDevServerRedirect, setupRedirect, useRedirect, useRedirectLocation };
//# sourceMappingURL=index.d.ts.map