// 示例全部使用 .ts 配置, 详见说明 https://v1.vuepress.vuejs.org/zh/guide/typescript-as-config.html

import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./config/themeVdoingConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";
import head from "./config/head";
import path from "path";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: "Taokyla Blog", //站点标题, 建议修改
  description: "Taokyla 的一些笔记，使用vuepress-theme-vdoing-template", //描述, 建议修改
  dest: "dist", //输出目录, 默认是 dist,无需修改
  // base: "/vdoing-template/", //部署站点的基础路径, 默认是 /, 不懂不要开启
  shouldPrefetch: () => false, //是否开启预加载, 建议不开启, 无需修改
  head: head, //全局头部信息配置, 如需修改请修改 config/head.ts
  theme: "vdoing", //主题, 无需修改
  themeConfig, //主题配置, 如需修改请修改 config/themeVdoingConfig.ts
  markdown, //markdown 相关配置, 如需修改请修改 config/markdown.ts
  plugins, //插件配置, 如需修改请修改 config/plugins.ts,
  configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV
    //判断是否是生产环境
    if(NODE_ENV === 'production'){
      return {
        output: {
          publicPath: 'https://fastly.jsdelivr.net/gh/Taokyla/taokyla.github.io@gh-pages'
        },
        resolve: {
          //配置路径别名
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }else{
      return {
        resolve: {
          //配置路径别名
          alias: {
            'public': path.resolve(__dirname, './public')
          }
        }
      }
    }
  }
});
