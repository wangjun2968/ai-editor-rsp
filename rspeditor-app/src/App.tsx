import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import EditorPage from './pages/EditorPage'
import PresetsPage from './pages/PresetsPage'
import BackgroundRemoverPage from './pages/BackgroundRemoverPage'
import PricingPage from './pages/PricingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="presets" element={<PresetsPage />} />
          <Route path="background-remover" element={<BackgroundRemoverPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
