/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string;
  readonly VITE_CAPTCHA_PUBLIC_KEY: string;

  // more env variables...
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;

  // const component: DefineComponent<{}, {}, any>;

  export default component;
}

declare module "virtual:pwa-register/vue" {
  import type { Ref } from "vue";

  export type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (
      registration: ServiceWorkerRegistration | undefined
    ) => void;
    onRegisterError?: (error: any) => void;
  };

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>;
    offlineReady: Ref<boolean>;
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
