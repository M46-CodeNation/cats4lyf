import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout components.
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page components.
import DummyPage from './pages/DummyPage';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import About from './pages/About';

// Global style reset, by Andy Bell: https://andy-bell.co.uk/a-modern-css-reset
import './reset.css';

// Global styling.
import './App.css';

/**
 * The main entry-point for the application.
 * Controls routing between pages, and sets a consistent site-wide layout.
 * 
 * @returns {JSX.Element} - The rendered component.
 */
export default function App()
{
    return (
        <div className="app-container">
            <BrowserRouter>
                <Header />
                <main className="main-container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/dummy" element={<DummyPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}