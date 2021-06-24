import { Desktop, Tablet, Mobile } from './hooks/MediaQuery';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Desktop>
          <div className="desktop__container">
            <h1>PC입니다.</h1>
          </div>
        </Desktop>

        <Tablet>
          <div className="tablet__container">
            <h1>타블렛 입니다...</h1>
          </div>
        </Tablet>

        <Mobile>
          <div className="mobile__container">
            <h1>모바일입니다.</h1>
          </div>
        </Mobile>
      </div>
    </>
  );
}

export default App;
