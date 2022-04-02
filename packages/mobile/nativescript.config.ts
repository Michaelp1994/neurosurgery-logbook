import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.nativescript.neurosurgerylogbookmobile",
  appPath: "src",
  appResourcesPath: "src/App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
} as NativeScriptConfig;
