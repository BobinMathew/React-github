import React from 'react'
import BranchTab from './BranchTab'
import Delete from './Delete'
import IssueTab from './IssueTab'
import CommitTab from './CommitTab'

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
                            <Route element={<CommitTab />} path='/CommitTab' />
                        </Routes>
                    </Router>
                    
                </div>
            </div>
            
        </div>
    )
}

export default RightPanel
