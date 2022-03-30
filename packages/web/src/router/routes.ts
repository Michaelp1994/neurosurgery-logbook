import { RouteRecordRaw } from "vue-router";
import { UserRole } from "@/services/types.generated";
import { useApplicationStore } from "@/store/Application.store";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   component: () => import("@/layouts/guest.vue"),
  //   children: [
  //     {
  //       name: "PublicHome",
  //       path: "",
  //       component: () => import("@/pages/public/HelloWorld.vue"),
  //     },
  //     {
  //       name: "PublicAbout",
  //       path: "/about",
  //       component: () => import("@/pages/public/AboutPage.vue"),
  //     },
  //   ],
  // },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/public/Login.vue"),
    beforeEnter: () => {
      const applicationStore = useApplicationStore();
      const user = applicationStore.credentials;
      if (!user) return true;
      if (user.role) return { name: "dashboard" };
      return true;
    },
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/pages/public/Register.vue"),
    beforeEnter: () => {
      const applicationStore = useApplicationStore();
      const user = applicationStore.credentials;
      if (!user) return true;
      if (user.role) return { name: "dashboard" };
      return true;
    },
  },
  {
    name: "forgotPassword",
    path: "/forgotPassword",
    component: () => import("@/pages/public/ForgotPassword.vue"),
    beforeEnter: () => {
      const applicationStore = useApplicationStore();
      const user = applicationStore.credentials;
      if (!user) return true;
      if (user.role) return { name: "dashboard" };
      return true;
    },
  },
  {
    name: "resetPassword",
    path: "/resetPassword/:id/:emailToken",
    component: () => import("@/pages/public/ResetPassword.vue"),
    beforeEnter: () => {
      const applicationStore = useApplicationStore();
      const user = applicationStore.credentials;
      if (!user) return true;
      if (user.role) return { name: "dashboard" };
      return true;
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/user.vue"),
    meta: {
      requiresAuthentication: true,
      allowedRoles: [UserRole.USER],
    },
    children: [
      {
        name: "dashboard",
        path: "/",
        component: () => import("@/pages/user/Dashboard.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      //Consults
      {
        name: "consults",
        path: "/consults",
        component: () => import("@/pages/user/Consults.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "createConsult",
        path: "/consults/create",
        component: () => import("@/pages/user/CreateConsult.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "viewConsult",
        path: "/consults/:id",
        component: () => import("@/pages/user/ViewConsult.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "updateConsult",
        path: "/consults/:id/update",
        component: () => import("@/pages/user/UpdateConsult.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      //Logbook
      {
        name: "viewLogbook",
        path: "/logbook",
        component: () => import("@/pages/user/ViewLogbook.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      //Hospitals
      {
        name: "hospitals",
        path: "/hospitals",
        component: () => import("@/pages/user/Hospitals.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "createHospital",
        path: "/hospital/create",
        component: () => import("@/pages/user/CreateHospital.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "viewHospital",
        path: "/hospitals/:id",
        component: () => import("@/pages/user/ViewHospital.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "updateHospital",
        path: "/hospitals/:id/update",
        component: () => import("@/pages/user/UpdateHospital.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      //Rotations
      {
        name: "rotations",
        path: "/rotations",
        component: () => import("@/pages/user/Rotations.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "createRotation",
        path: "/rotations/create",
        component: () => import("@/pages/user/CreateRotation.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "viewRotation",
        path: "/rotations/:id",
        component: () => import("@/pages/user/ViewRotation.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "updateRotation",
        path: "/rotations/:id/update",
        component: () => import("@/pages/user/UpdateRotation.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      //Supervisors
      {
        name: "supervisors",
        path: "/supervisors",
        component: () => import("@/pages/user/Supervisors.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "createSupervisor",
        path: "/supervisor/create",
        component: () => import("@/pages/user/CreateSupervisor.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },

      {
        name: "viewSupervisor",
        path: "/supervisors/:id",
        component: () => import("@/pages/user/ViewSupervisor.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "updateSupervisor",
        path: "/supervisors/:id/update",
        component: () => import("@/pages/user/UpdateSupervisor.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      //Users
      {
        name: "viewProfile",
        path: "/profile",
        component: () => import("@/pages/user/ViewProfile.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "updateProfile",
        path: "/profile/update",
        component: () => import("@/pages/user/UpdateProfile.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
      {
        name: "updatePassword",
        path: "/profile/password",
        component: () => import("@/pages/user/UpdatePassword.vue"),
        meta: {
          requiresAuthentication: true,
          allowedRoles: [UserRole.USER],
        },
      },
    ],
  },
];

export default routes;
