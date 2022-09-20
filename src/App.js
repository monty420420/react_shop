import './css/reset.scss';
import './css/app.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CommonHeader from './components/commonHeader';

function App() {
  return (
    <BrowserRouter>
    <CommonHeader />

   </BrowserRouter>
  );
}

export default App;
