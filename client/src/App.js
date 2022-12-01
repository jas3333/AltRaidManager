import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import AddCharacter from './pages/AddCharacter';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
    return (
        <div className='container'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={<AddCharacter />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
