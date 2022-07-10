import { HomePage } from "@/pages/home";
import { SettingsPage } from "@/pages/settings";
import { EditorPage } from "@/pages/editor";
import { ProfilePage } from "@/pages/profile";
import { ArticlePage } from "@/pages/article";
import { SigninPage } from "@/pages/auth";
import { SignupPage } from "@/pages/auth";
import { createRouter, createWebHistory } from "vue-router";
import { VArticlesList, VTagArticlesList } from "@/entities/article";
import { VFeedArticlesList } from "@/entities/article";
import { TagsTab } from "@/pages/home/ui";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
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
        {
          path: "tag/:tagName",
          name: "tag",
          components: {
            default: VTagArticlesList,
            TagsTab,
          },
          props: true,
        },
      ],
    },
    {
      path: "/editor/:articleSlug",
      name: "editorEdit",
      component: EditorPage,
      props: true,
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
