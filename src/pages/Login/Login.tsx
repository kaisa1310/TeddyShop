import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import routes from '~/config/routes'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import Button from '~/components/Button'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginSocial, loginUser, resetState } from '~/features/auth/authSlice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FacebookAuth, GoogleAuth } from '~/firebase/firebase'

const cx = classNames.bind(styles)

const schema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email của bạn'),
  password: Yup.string().required('Vui lòng nhập mật khẩu của bạn')
})

interface AuthData {
  displayName: string
  email: string
  providerId: string
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userData, setUserData] = useState<{ email: string; fullName: string; providerId: string }>({
    email: '',
    fullName: '',
    providerId: ''
  })

  const handleFbLogin = async () => {
    const auth: AuthData = (await FacebookAuth()) as AuthData

    if (auth) {
      const { displayName, email, providerId } = auth || {}
      setUserData({ email: email, fullName: displayName, providerId: providerId })
    }
  }

  const handleGGLogin = async () => {
    const auth = (await GoogleAuth()) as AuthData

    if (auth) {
      const { displayName, email, providerId } = auth || {}
      setUserData({ email: email, fullName: displayName, providerId: providerId })
    }
  }

  useEffect(() => {
    if (Object.values(userData).some((value) => value !== '')) {
      dispatch<any>(loginSocial(userData))
    }
  }, [userData, dispatch])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch<any>(loginUser({ email: values.email, password: values.password }))
    }
  })

  const userState = useSelector((state: any) => state.auth)
  const { isLoading, isSuccess, isError, user, message } = userState

  useEffect(() => {
    if (isSuccess && Object.keys(user).length > 0) {
      toast.success('Đăng nhập thành công')
      dispatch<any>(resetState())
      navigate('/')
    }
    if (isError && message) {
      toast.error(message)
    }
  }, [isLoading, isError, isSuccess, user, message, navigate, dispatch])

  return (
    <div className={cx('login-section')}>
      <form className={cx('login-form')} onSubmit={formik.handleSubmit}>
        <div className="">
          <h2 className={cx('form-heading')}>Đăng Nhập</h2>
          <p className={cx('form-title')}>
            Bạn chưa có tài khoản ? <Link to={routes.register}>Đăng ký</Link>
          </p>
        </div>
        <div className={cx('form-methods')}>
          <div className={cx('form-method')} onClick={handleFbLogin}>
            <FaFacebook className={cx('from-icon')} />
          </div>
          <div className={cx('form-method')} onClick={handleGGLogin}>
            <FaGoogle className={cx('from-icon')} />
          </div>
        </div>
        <div className={cx('form-text')}>hoặc đăng nhập với email</div>
        <div className={cx('form-list')}>
          <div className={cx('form-group')}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email của bạn..."
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Nhập password của bạn..."
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-error">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <Link to="" className={cx('form-forgot-password')}>
          Quên mật khẩu
        </Link>
        <Button type="submit" primary className={cx('form-btn')}>
          Đăng Nhập
        </Button>
      </form>
    </div>
  )
}

export default Login
