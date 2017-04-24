/**
 * desc : 어플리케이션 메인 엔트리
 */

import Vue from "vue";

import Dwsu   from "shared/dwsu";
import Router from "./router";

Vue.use(Dwsu);

Vue.dwsu.start("#app", null, Router);