/*
 * @文档描述:
 * @author: 宣灵杰
 * @Date: 2020-12-21 16:25:41
 * @LastEditTime: 2021-03-02 23:23:00
 * @LastEditors: 魏驰
 */
export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/Position',
              },
              {
                name: 'Position',
                icon: 'table',
                path: '/Position',
                component: './Position',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
