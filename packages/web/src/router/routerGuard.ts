import { useApplicationStore } from "@/store/Application.store";
import { RouteLocationNormalized } from "vue-router";

export default (to: RouteLocationNormalized) => {
  if (!to.meta.requiresAuthentication) return true;
  const applicationStore = useApplicationStore();
  const user = applicationStore.credentials;
  // console.log("user.role: ", user.role);
  // console.log("required roles: ", to.meta.allowedRoles);
  if (!user?.role) return "/login";
  const authorized = to.meta.allowedRoles.some((role) => role === user.role);
  if (authorized) {
    return true;
  }
};
