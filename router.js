/**
 * desc : 어플리케이션 router
 */

import Vue from "vue";
import VueRouter from "vue-router";

import App from "./app.vue";

const router = new VueRouter({
    mode: "history",
    base: `/${app.env.ROOT}/${app.env.ENTRIES.playground}/`,
    
    routes: [

      {
        name: 'index', 
        path: '/', 
        component: App
      },

      // notfound
      { path: '*', redirect: '/' }

    ]
  });

  export default router;
  