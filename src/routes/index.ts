import config from '~/config'
import HeaderOnly from '~/layouts/HeaderOnly'
import MainLayout from '~/layouts/MainLayout'
import { route } from '~/models'
import About from '~/pages/About'
import Blog from '~/pages/Blogs'
import BlogPost from '~/pages/BlogPost'
import Contact from '~/pages/Contact'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import ProductDetail from '~/pages/ProductDetail'
import Products from '~/pages/Products'
import Register from '~/pages/Register'
import Events from '~/pages/Events'
import Event from '~/pages/Event'

const publicRoutes: route[] = [
  { path: config.routes.home, element: Home, layout: MainLayout },
  { path: config.routes.about, element: About, layout: MainLayout },
  { path: config.routes.blog, element: Blog, layout: MainLayout },
  { path: config.routes.blogPost, element: BlogPost, layout: MainLayout },
  { path: config.routes.productDetail, element: ProductDetail, layout: MainLayout },
  { path: config.routes.products, element: Products, layout: MainLayout },
  { path: config.routes.login, element: Login, layout: HeaderOnly },
  { path: config.routes.register, element: Register, layout: HeaderOnly },
  { path: config.routes.contact, element: Contact, layout: MainLayout },
  { path: config.routes.events, element: Events, layout: MainLayout },
  { path: config.routes.event, element: Event, layout: MainLayout }
]

// const privateRoutes = []

export { publicRoutes }
