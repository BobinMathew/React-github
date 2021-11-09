import React, {useEffect, useState, useContext} from 'react'
import AddRepoBtn from './AddRepoBtn'
import RightPanel from './RightPanel'

import Context from '../Context/Context'

function LeftPanel() {

    

    const {setRepoNamet,getRepos,repoList} = useContext(Context)
    
    useEffect(() => {
        getRepos()
    }, [])

    
    const linkHandle =(e)=>{
        console.log(e.target.innerText)
        setRepoNamet(e.target.innerText)
        
        // return <RightPanel repoName={repoName} />
    }
    return (
        <div className='leftPanel'>
            {repoList.map( (key,inx) => (
                <div key={inx}>
                    <div style={{fontWeight: 'bold', padding: '1%'}}>
                        
                        <div value={key.name} onClick={(e)=>{linkHandle(e)}}>{key.name}</div>

                        {/* <RightPanel repoName={repoName} /> */}
                        
                    </div>
                    <div style={{padding: '1%'}}>{key.description}</div>
                    
                    <hr/>
                </div>
            ))}
            
            <AddRepoBtn/>
        </div>
    )
}

export default LeftPanel
