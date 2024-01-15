import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

function ProfilePage(){
    let { userId } = useParams();
}

function App(){
    return(
        <Routes>
            <Route path='users'>
                <Route path=':userId' element={<ProfilePage/>}/>
                <Route path='me' element={...} />
            </Route>
        </Routes>
    )
}