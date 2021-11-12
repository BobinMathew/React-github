import {createContext, useState} from 'react'
import axios from 'axios'

const Context = createContext()
export default Context

export const ContextProvider = ({children}) => {

    const [repoList, setRepoList] = useState({})
    const [addedLists, setAddedLists] = useState([])
    const [branchList, setBranchList] = useState([])
    const [issueList, setIssueList] = useState([])
    const [commitList, setCommitList] = useState([])
    const [repoName, setRepoName] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [commitUrl, setCommitUrl] = useState('')
    const [branchName, setBranchName] = useState('')

    const getRepos = async (owner,repo) => {
        
        await axios(`https://api.github.com/repos/${owner}/${repo}`)
        .then((res) => {
            // console.log(res)
            setRepoList(res)
        })
        .catch((err) => {
            // console.log(err)
        })
        
    }

    const getBranches = async (repo,owner) => {
        repo &&
        await axios(`https://api.github.com/repos/${owner}/${repo}/branches`)
        .then((res) => {
            // console.log(res)
            setBranchList(res.data)
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    const getIssues = async (repo,owner) => {
        repo &&
        await axios(`https://api.github.com/repos/${owner}/${repo}/issues`)
        .then((res) => {
            // console.log(res)
            setIssueList(res.data)
        })
        .catch((err) => {
            // console.log(err)
        })
    }
    

    const getCommits = async (url) => {
        
        await axios(url)
        .then((res) => {
            // console.log(res)
            setCommitList([res.data])
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    let contextData = {
        repoName: repoName,
        setRepoName: setRepoName,
        ownerName: ownerName,
        setOwnerName: setOwnerName,
        repoList: repoList,
        branchList: branchList,
        issueList: issueList,
        addedLists: addedLists,
        setAddedLists: setAddedLists,
        commitList: commitList,
        setCommitList: setCommitList,
        commitUrl: commitUrl, 
        setCommitUrl: setCommitUrl,
        setBranchName: setBranchName,
        branchName: branchName,

        getRepos: getRepos,
        getBranches: getBranches,
        getIssues: getIssues,
        getCommits: getCommits,
        
    }

    return(
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}