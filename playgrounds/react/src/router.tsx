import { createBrowserRouter } from 'react-router-dom'
import Root from './components/root'
import routes from '~react-pages'

const router = createBrowserRouter([
  { path: '/', Component: Root },
  ...routes,
])

if (import.meta.hot)
  import.meta.hot.dispose(() => router.dispose())

export default router
