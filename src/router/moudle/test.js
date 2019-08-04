const TestRoutes = [
  {
    path: 'test',
    name: 'Home',
    component: () => import('views/test/Home.vue'),
    meta: {
      title: '主页',
      icon: 'home'
    }
  },
  {
    path: '/test2',
    name: 'About',
    component: () => import('views/test/About.vue'),
    meta: {
      title: 'about',
      icon: 'about'
    }
  }
]
export default TestRoutes
