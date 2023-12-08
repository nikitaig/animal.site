import {Routes, Route} from "react-router-dom";
import Main from "./pages/main.jsx";
import Registr from "./pages/registr.jsx";
import Enter from "./pages/enter.jsx";
import Poisk from "./pages/poisk.jsx";
import Lich from "./pages/lich.jsx";
import Strone from "./pages/strone.jsx";
import Dob from "./pages/dob.jsx";
function App() {
  return (<div>
    <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/registr'} element={<Registr/>}/>
        <Route path={'/enter'} element={<Enter/>}/>
        <Route path={'/poisk'} element={<Poisk/>}/>
        <Route path={'/lich'} element={<Lich/>}/>
        <Route path={'/strone'} element={<Strone/>}/>
        <Route path={'/dob'} element={<Dob/>}/>
    </Routes>
</div>
);
}

export default App;

  

