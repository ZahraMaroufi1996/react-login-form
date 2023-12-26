import DefaultLayout from 'layouts/Default'
import Dashboard from 'pages/dashboard'
import LoginPage from 'pages/login'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/dashboard',
    name: 'داشبورد',
    icon: 'fa fa-tachometer-alt',
    component: Dashboard,
    private: true,
    showInNav: true,
  },
  {
    path: '/login',
    name: 'ورود',
    icon: 'fa fa-plus',
    component: LoginPage,
    showInNav: false,
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true },
]

export default AppRoutes

export { indexRoutes }
