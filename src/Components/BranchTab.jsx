import React, {useEffect, useContext} from 'react'
import Context from '../Context/Context'


function BranchTab() {

    const {repoName,getBranches,branchList} = useContext(Context)

    useEffect(() => {
        getBranches(repoName)
    }, [repoName])

    return (
        <div className='branchTab'>
            {repoName ? branchList.map((key,inx)=>(
                        <div key={inx}>
                            <div>{key.name}</div>
                            <hr/>
                        </div>
                    )) : '---Branch---'}
        </div>
    )
}

export default BranchTab
