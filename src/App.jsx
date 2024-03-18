import './App.css'
import { lazy, Suspense } from 'react'
import HomePage from './pages/Home'

const AboutPage = lazy(() => import('./pages/About'))
const Page404 = lazy(() => import('./pages/404'))
const SearchPage = lazy(() => import('./pages/Search'))

import Router from './Router'
import Route from './Route'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  },
  {
    path: '/:lang/about',
    Component: AboutPage,
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
