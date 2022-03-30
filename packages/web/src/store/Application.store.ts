import { defineStore, acceptHMRUpdate } from "pinia";
import type { Token, CurrentRotationQuery } from "@/services/types.generated";

export type RootState = {
  credentials: Token | null;
  isDrawerOpen: boolean;
  currentRotation: CurrentRotationQuery["currentRotation"] | null;
};

export const useApplicationStore = defineStore("application", {
  state: () =>
    ({
      credentials: {},
      isDrawerOpen: true,
      currentRotation: null,
    } as RootState),
  actions: {
    saveCurrentRotation(rotation: CurrentRotationQuery["currentRotation"]) {
      this.currentRotation = rotation;
    },
    saveUser(credentials: Token) {
      this.credentials = credentials;
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    logout() {
      this.credentials = null;
      this.currentRotation = null;
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApplicationStore, import.meta.hot));
}
