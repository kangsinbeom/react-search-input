import './App.css';
import UpperTemplate from './layout/UpperTemplate';
import LowerTemplate from './layout/LowerTemplate';
function App() {
  return (
    <>
    <div className='UpperBox'>
      <UpperTemplate />
    </div>
    <div className='LowerBox'>
      <LowerTemplate />
    </div>  
      
    </>
  );
}

export default App;
