import { HomePage } from "@/pages/home";
import { SettingsPage } from "@/pages/settings";
import { EditorPage } from "@/pages/editor";
import { ProfilePage } from "@/pages/profile";
import { ArticlePage } from "@/pages/article";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/editor",
      name: "editor",
      component: EditorPage,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsPage,
    },
    {
      path: "/settings",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/article",
      name: "article",
      component: ArticlePage,
    },
  ],
});

export default router;
