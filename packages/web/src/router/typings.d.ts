import "vue-router";
import { UserRole } from "@/services/types.generated";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuthentication: boolean;
    allowedRoles: UserRole[];
  }
}
