import { HomePage } from "@/pages/home";
import { SettingsPage } from "@/pages/settings";
import { EditorPage } from "@/pages/editor";
import { ProfilePage } from "@/pages/profile";
import { ArticlePage } from "@/pages/article";
import { SigninPage } from "@/pages/auth";
import { SignupPage } from "@/pages/auth";
import { createRouter, createWebHistory } from "vue-router";
import { VArticlesList } from "@/features/article";
import { VFeedArticlesList } from "@/features/article";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: HomePage,
      children: [
        {
          path: "",
          name: "home",
          component: VArticlesList,
        },
        {
          path: "feed",
          name: "feed",
          component: VFeedArticlesList,
        },
      ],
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
    {
      path: "/login",
      name: "login",
      component: SigninPage,
    },
    {
      path: "/register",
      name: "register",
      component: SignupPage,
    },
  ],
});

export default router;
