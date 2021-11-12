import React, {useEffect, useContext} from 'react'
import AddRepoBtn from './AddRepoBtn'

import Context from '../Context/Context'

function LeftPanel() {

    const {
        setRepoName,
        setOwnerName,
        repoList,
        addedLists,
        setAddedLists,
    } = useContext(Context)
    
    
    useEffect(() => {
        if(!(Object.keys(repoList).length === 0 && repoList.constructor === Object)){
            setAddedLists([repoList, ...addedLists])
        }
    },[repoList])

    
    
    const linkHandle = (e) => {
        // console.log(e)
        setRepoName(e.target.attributes.repo.value)
        setOwnerName(e.target.attributes.owner.value)
        
    }

    return (
        <div className='leftPanel'>
            {/* {console.log('leftPanel-',loaded,addedLists)} */}
            
            {addedLists.map( (key,inx) => ( 
               
                <div key={inx}>
                    <div style={{fontWeight: 'bold', padding: '1%'}}>
                        
                        <div 
                            owner={key.data.owner.login} 
                            repo={key.data.name} 
                            onClick={(owner,repo) => {linkHandle(owner, repo)}}
                            className='titleSelector'
                        >{key.data.name}</div>
                        
                    </div>
                    <div style={{padding: '1%'}}>{key.data.description}</div>
                    
                    <hr/>
                </div>
                
            ))}
            
            <AddRepoBtn/>
        </div>
    )
}

export default LeftPanel
