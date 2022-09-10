import React from 'react';
import FirstScreen from './Screens/FirstScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
          {/* 실제 화면에 보여지는 태그, 클릭 시 주소창이 /FirstScreen으로 이동 */}
          <Link to="/FirstScreen">FirstScreen</Link>
          {/* 주소창 변함에 따라 화면을 해당 주소창에 맞게 변경해준다. */}
          <Routes>
            <Route path="/FirstScreen"  element={<FirstScreen />}></Route>
          </Routes>
    </Router>
  );
}


export default App;