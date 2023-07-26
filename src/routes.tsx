import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Filme from './pages/Filme';
import Inicio from './pages/Inicio';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Cabecalho />
                <Routes>
                    <Route index element={<Inicio/>} />
                    <Route path='/filme/:id' element={<Filme/>} />
                </Routes>
            </Router>
        </main>
    )
}