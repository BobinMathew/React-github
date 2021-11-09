import {createContext, useState} from 'react'
import axios from 'axios'

const Context = createContext()
export default Context

export const ContextProvider = ({children}) => {

    const [repoList, setRepoList] = useState([])
    const [branchList, setBranchList] = useState([])
    const [issueList, setIssueList] = useState([])
    const [repoName, setRepoNamet] = useState('')

    const getRepos = async () => {
        await axios('https://api.github.com/orgs/knoxpo/repos')
        .then((res) => {
            // console.log(res.data)
            setRepoList(res.data)
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    const getBranches = async (repo) => {
        await axios(`https://api.github.com/repos/knoxpo/${repo}/branches`)
        .then((res) => {
            // console.log(res)
            setBranchList(res.data)
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    const getIssues = async (repo) => {
        await axios(`https://api.github.com/repos/knoxpo/${repo}/issues`)
        .then((res) => {
            // console.log(res)
            setIssueList(res.data)
        })
        .catch((err) => {
            // console.log(err)
        })
    }

    

    let contextData = {
        repoName: repoName,
        setRepoNamet: setRepoNamet,
        repoList: repoList,
        branchList: branchList,
        issueList: issueList,

        getRepos: getRepos,
        getBranches: getBranches,
        getIssues: getIssues,
        
    }

    return(
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}