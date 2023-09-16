import './App.css';
import Header from './components/Header/Header-component';
import Nav from './components/Nav/Nav-component';
import Profile from './components/Content/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className="wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs/>}/>
                        <Route path='/profile/*' element ={<Profile/>}/>
                        <Route path='/news/*' element ={<News/>}/>
                        <Route path='/music/*' element ={<Music/>}/>
                        <Route path='/Settings/*' element ={<Settings/>}/>
                    </Routes>

                </div>


            </div>
        </BrowserRouter>
    )
}


export default App;
