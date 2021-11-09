import React, {useEffect, useContext} from 'react'
import Context from '../Context/Context'


function IssueTab() {

    const {repoName,issueList,getIssues} = useContext(Context)

    useEffect(() => {
        getIssues(repoName)
    }, [repoName])

    return (
        <div className='issueTab'>
            {repoName ? issueList.map((key,inx)=>(
                        <div key={inx} style={{padding: '1%'}}>
                            <div style={{fontWeight: 'bold'}} >{key.title}</div>
                            <div>{key.body}</div>
                            <div><img src={key.user.avatar_url} alt="avatar" height={20} width={20} style={{borderRadius:'50%'}} /></div>
                            <hr/>
                        </div>
                    )) : '---Issues---'}
        </div>
    )
}

export default IssueTab
