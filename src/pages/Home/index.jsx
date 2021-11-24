import React, { useState } from 'react'
import NewIssue from '../../components/NewIssue';
import axios from '../../config/axios'
export default function Home({ users }) {
    const [repos, setRepos] = useState([]);
    const [issues, setIssues] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [showFrom, setShowForm] = useState(false);
    const createNewIssue = (username, repo) => {
        const url = "/repos/" + username + "/" + repo + "/issues";
        axios.post(url)
            .then(res => {
                alert("Issue Created");
                setShowForm(false);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const getRepos = (username) => {
        const url = "/users/" + username + "/repos";
        axios.get(url)
            .then(res => {
                setRepos(res.data)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const getIssues = (users, repo) => {
        const url = "/repos/" + users + "/" + repo + "/issues";
        axios.get(url)
            .then(res => {
                setIssues(res.data)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div>
                {
                    users ?
                        (
                            <div onClick={() => getRepos(users.login)}>
                                <h3>
                                    {users.login}
                                </h3>
                                <h3>
                                    {users.public_repos}
                                </h3>
                            </div>
                        ) :
                        <div>No User</div>
                }
            </div>
            <div>
                <h1>User Repos</h1>
                {
                    repos ?
                        (
                            repos.map(repo => {
                                return (
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-around"
                                    }}
                                        onClick={() => getIssues(users.login, repo.name)}
                                    >
                                        <p>{repo.name}</p>
                                        <div>
                                            <p>{`${repo.watchers_count}/${repo.watchers}`}</p>
                                        </div>
                                    </div>
                                )
                            })
                        ) :
                        (
                            <h1>No Repos</h1>
                        )
                }
            </div>


            <div>
                <div>
                    <div>
                        <button onClick={() => setShowForm(true)} >New Issue</button>
                    </div>
                </div>
                <div>
                    {console.log(issues)}
                    {
                        issues ?
                            (
                                issues.map(issue => {
                                    return (
                                        <>
                                            <div>{issue.title}</div>
                                            <div>
                                                Created At {issue.created_at}
                                            </div>
                                        </>
                                    )
                                })
                            ) :
                            (
                                <h1>No Issues Found</h1>
                            )
                    }
                </div>
            </div>
            <div>
               {
                   showFrom? <NewIssue 
                   createNewIssue={createNewIssue} 
                   title={title} 
                   setTitle={setTitle}
                   desc={desc}
                   setDesc={setDesc}
                   setShow={setShowForm}
                   />: null
               }
            </div>
        </div>
    )
}
