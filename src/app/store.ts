import { configureStore } from '@reduxjs/toolkit'
import authSlice from '~/features/auth/authSlice'
import blogSlice from '~/features/blog/blogSlice'
import brandSelice from '~/features/brand/brandSlice'
import eventSlice from '~/features/event/eventSlice'
import memberSlice from '~/features/member/memberSlice'
import productSlice from '~/features/product/productSlice'
import uploadSlice from '~/features/upload/uploadSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    blog: blogSlice,
    brand: brandSelice,
    member: memberSlice,
    event: eventSlice,
    upload: uploadSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
