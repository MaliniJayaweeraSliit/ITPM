
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPayment from './Pages/AddPayments';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/createPayment' exact element={<AddPayment />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;