const routes = [
  {
    path: "/",
    component: () => import("src/layouts/Main/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Home.vue") },
      { path: "/inbox", component: () => import("src/pages/Inbox.vue") },
      { path: "/explore", component: () => import("src/pages/Explore.vue") },
      {
        path: "/carousel",
        component: () => import("src/pages/Carousel.vue"),
      },
      {
        path: "/favorites",
        component: () => import("src/pages/Favorites.vue"),
      },
      { path: "/login", component: () => import("src/pages/Login.vue") },
      { path: "/logout", component: () => import("src/pages/Logout.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
