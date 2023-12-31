import './App.css';
import Header from './components/Header/Header-component';
import Nav from './components/Nav/Nav-component';
import Profile from './components/Content/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";




const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>

                <div className="wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element={<Profile posts={props.appState.profileReducer.posts}
                                                                   newPostText={props.appState.profileReducer.newPostText}
                                                                   dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.appState.dialogReducer.dialogsData}
                                                                   messagesData={props.appState.dialogReducer.messagesData}
                                                                   dispatch={props.dispatch}
                                                                   newMessageBody={props.appState.dialogReducer.newMessageBody}/>}/>
                        <Route path='/news/*'     element={<News/>}/>
                        <Route path='/music/*'    element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/friends/*'  element={<Friends image={props.appState.friendsPageReducer.friendsImage}
                                                                    dispatch={props.dispatch}/>}/>

                    </Routes>


                </div>


            </div>
        </BrowserRouter>
    )
}


export default App;
