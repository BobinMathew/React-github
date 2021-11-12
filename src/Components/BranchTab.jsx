import React, {useEffect, useContext} from 'react'
import Context from '../Context/Context'
import {useNavigate} from "react-router-dom";


function BranchTab() {

    const {repoName,getBranches,branchList,ownerName,setCommitUrl,setBranchName} = useContext(Context)

    let navigate = useNavigate();

    useEffect(() => {
        // console.log(repoName,ownerName)
        getBranches(repoName,ownerName)
    }, [repoName,ownerName])

    const linkHandle = (e) => {
        setCommitUrl(e.target.attributes.branchUrl.value)
        setBranchName(e.target.attributes.branchName.value)
        // console.log(e.target.attributes.branch.value)
        navigate('/CommitTab')
    }

    return (
        <div className='branchTab'>
            {repoName ? branchList.map((key,inx)=>(
                        <div key={inx}>
                            <div
                                branchUrl={key.commit.url}
                                branchName={key.name}
                                onClick={(branchUrl,branchName) => {linkHandle(branchUrl,branchName);}}
                                className='titleSelector'
                            >{key.name}</div>
                            <hr/>
                        </div>
                    )) : '---Branch---'}
        </div>
    )
}

export default BranchTab
