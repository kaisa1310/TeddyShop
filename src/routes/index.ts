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
import Brand from '~/pages/Brand'
import Profile from '~/pages/Profile'
import ProfileLayout from '~/layouts/ProfileLayout'
import Cart from '~/pages/Cart'
import Address from '~/pages/Address'
import ProFavorite from '~/pages/ProFavorite'
import VerifyEmail from '~/pages/VerifyEmail'
import Checkout from '~/pages/Checkout'
import Purchase from '~/pages/Purchase'
import NotFound from '~/pages/NotFound'
import Result from '~/pages/Result'
import NotAuthorized from '~/pages/NotAuthorized'

const publicRoutes: route[] = [
  { path: config.routes.home, element: Home, layout: MainLayout },
  { path: config.routes.about, element: About, layout: MainLayout },
  { path: config.routes.blog, element: Blog, layout: MainLayout },
  { path: config.routes.blogPost, element: BlogPost, layout: MainLayout },
  { path: config.routes.productDetail, element: ProductDetail, layout: MainLayout },
  { path: config.routes.products, element: Products, layout: MainLayout },
  { path: config.routes.product, element: ProductDetail, layout: MainLayout },
  { path: config.routes.login, element: Login, layout: HeaderOnly },
  { path: config.routes.register, element: Register, layout: HeaderOnly },
  { path: config.routes.contact, element: Contact, layout: MainLayout },
  { path: config.routes.events, element: Events, layout: MainLayout },
  { path: config.routes.event, element: Event, layout: MainLayout },
  { path: config.routes.brandDetail, element: Brand, layout: MainLayout },
  { path: config.routes.notFount, element: NotFound, layout: MainLayout },
  { path: config.routes.notAuthorized, element: NotAuthorized, layout: MainLayout }
]

const privateRoutes: route[] = [
  { path: config.routes.profile, element: Profile, layout: ProfileLayout },
  { path: config.routes.address, element: Address, layout: ProfileLayout },
  { path: config.routes.verifyEmail, element: VerifyEmail, layout: ProfileLayout },
  { path: config.routes.userPurchase, element: Purchase, layout: MainLayout },
  { path: config.routes.cart, element: Cart, layout: MainLayout },
  { path: config.routes.productFavorite, element: ProFavorite, layout: MainLayout },
  { path: config.routes.result, element: Result, layout: MainLayout },
  { path: config.routes.checkOut, element: Checkout, layout: MainLayout }
]

export { publicRoutes, privateRoutes }
