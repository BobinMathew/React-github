import React, {useEffect, useContext} from 'react'
import Context from '../Context/Context';

function CommitTab() {


    const {repoName,getCommits,commitList,commitUrl,branchName} = useContext(Context)

    useEffect(() => {
        getCommits(commitUrl)
    }, [commitUrl])

    return (
        <div className='commitTab'>
            {repoName && <div className='navBar'>COMMITS:{branchName.toUpperCase()}</div>}
            {repoName ? commitList.map((key,inx) => (

                <div key={inx}>
                    
                    <div style={{fontWeight: 'bold'}}>
                        {new Date(key.commit.author.date).toLocaleString('en-IN', {
                            day: 'numeric', 
                            month: 'short',
                            year: 'numeric',
                        })}
                    </div>
                    <div>{key.commit.message}</div>
                    <div style={{display:'flex', flexDirection:'colume', margin:'1%', alignItems: 'center'}}>
                        <img src={key.author.avatar_url} alt="avatar" height={20} width={20} style={{borderRadius:'50%'}} />
                        <div style={{margin:'2%'}} >{key.commit.author.name}</div>
                    </div>
                    <hr/>
                </div>

            )) : ''}
        </div>
    )
}

export default CommitTab
