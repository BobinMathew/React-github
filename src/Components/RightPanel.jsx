import React, {useEffect, useContext} from 'react'
import Context from '../Context/Context'
import BranchTab from './BranchTab'
import Delete from './Delete'
import IssueTab from './IssueTab'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";

function RightPanel() {
    

    return (
        <div className='rightPanel'>
            <Delete/>
            <div className="rightSubPanel">
                <div className="rightSubPanelHeader">
                    <Router>
                        <Link to='/' >Branch</Link >
                        <span> | </span>
                        <Link to='/IssueTab' >Issue</Link >
                        <hr/>
                        <Routes>
                            <Route element={<BranchTab />} path='/' exact />
                            <Route element={<IssueTab />} path='/IssueTab' />
                        </Routes>
                    </Router>
                    
                </div>
            </div>
            
        </div>
    )
}

export default RightPanel
