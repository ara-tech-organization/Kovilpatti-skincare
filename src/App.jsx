import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import GuaranteeBanner from './components/GuaranteeBanner'
import TransformationSection from './components/TransformationSection'
import FacingSection from './components/FacingSection'
import TreatmentsSection from './components/TreatmentsSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import StickyBottomCta from './components/StickyBottomCta'
import ThankYou from './components/ThankYou'
import { CallPopupProvider } from './context/CallPopupContext'

function Home() {
  return (
    <CallPopupProvider>
      <div className="pb-16">
        <Header />
        <Hero />
        <GuaranteeBanner />
        <FacingSection />
        <TreatmentsSection />
        <TransformationSection />
        <CtaBanner />
        <Footer />
        <StickyBottomCta />
      </div>
    </CallPopupProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  )
}

export default App
