// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "配置",
    items: [
      {
        text: "Python",
        link: "/python/",
      },
      {
        text: "其他",
        link: "/otehr/",
      },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text: "vuepress",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "vuepress-theme-vdoing",
        link: "https://doc.xugaoyi.com/",
      },
      {
        text: "U2SB",
        link: "https://www.u2sb.com/",
      },
      {
        text: "MonoLogueChi",
        link: "https://blog.xxwhite.com/",
      },
    ],
  },
];
