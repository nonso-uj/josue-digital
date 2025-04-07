import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import AcademyPage from './pages/services/AcademyPage'
import MarketingPage from './pages/services/MarketingPage'
import SalesPage from './pages/services/SalesPage'
import NotFound from './components/NotFound'
import BlogPage from './pages/BlogPage'
import { ABOUT_URL, ACADEMY_URL, BLOG_POST_URL, BLOG_URL, CONTACT_URL, MARKETING_URL, PORTFOLIO_URL, SALES_URL, SERVICES_URL } from './utils/Routes'
import SingleBlogPage from './pages/SingleBlogPage'
// import Preloader from './components/Preloader'

function App() {

  return (
    <BrowserRouter>
      {/* <Preloader /> */}

      <Routes>
        <Route index element={<HomePage />} />
        
        <Route path={ABOUT_URL} element={<AboutPage />} />
        <Route path={CONTACT_URL} element={<ContactPage />} />
        <Route path={PORTFOLIO_URL} element={<PortfolioPage />} />
        <Route path={BLOG_URL} element={<BlogPage />} />
        <Route path={BLOG_POST_URL} element={<SingleBlogPage />} />
        <Route path={SERVICES_URL} element={<ServicesPage />} />
        <Route path={ACADEMY_URL} element={<AcademyPage />} />
        <Route path={MARKETING_URL} element={<MarketingPage />} />
        <Route path={SALES_URL} element={<SalesPage />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
