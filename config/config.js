import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        // 根路由重定向
        {
          path: '/',
          redirect: '/user',
        },
        // 用户布局
        {
          path: '/user',
          component: '../layouts/LoginLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              path: '/user/login',
              component: './user/Login',
            },
            {
              name: 'register',
              path: '/user/register',
              component: './user/Register',
            },
            {
              name: 'registerResult',
              path: '/user/register-result',
              component: './user/RegisterResult',
            },
            {
              component: './404',
            },
          ],
        },
        // 通用布局
        {
          path: '/base',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/base',
              redirect: '/base/SpacePage/Dashboard',
            },
            {
              name: 'spacePage',
              path: '/base/SpacePage',
              routes:[
                {
                  name: 'Dashboard',
                  icon: 'smile',
                  path: '/base/SpacePage/Dashboard',
                  component: './base/SpacePage/Dashboard',
                },
                {
                  name: 'Wrapper',
                  icon: 'smile',
                  hideInMenu:true,
                  path: '/base/SpacePage/Wrapper',
                  component: './base/SpacePage/Wrapper',
                },
                {
                  name: 'Detail',
                  icon: 'smile',
                  hideInMenu:true,
                  path: '/base/SpacePage/SpaceDetail',
                  component: './base/SpacePage/SpaceDetail',
                },
                {
                  name:'InputDialog',
                  icon:'smile',
                  hideInMenu:true,
                  path: '/base/SpacePage/InputDialog',
                  component: './base/SpacePage/InputDialog',
                },
                {
                  component: './404',
                },
              ]
            },
            {
              name: 'settingPage',
              path: '/base/SettingPage',
              routes:[
                {
                  name: 'UserSetting',
                  icon: 'smile',
                  path: '/base/SettingPage/UserSetting',
                  component: './base/SettingPage/UserSetting',
                },
                {
                  name: 'IpSetting',
                  icon: 'smile',
                  path: '/base/SettingPage/IpSetting',
                  component: './base/SettingPage/IpSetting',
                },

                {
                  component: './404',
                },
              ]
            },
            {
              component: './404',
            },
          ],
        },
        // 全局404页面
        {
          component: './404',
        },
      ],
    },
  ],
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
});
