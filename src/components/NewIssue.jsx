import React, { } from 'react'

export default function NewIssue({ createNewIssue, title, setTitle, desc, setDesc, setShow }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1>Create New Issue</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" />
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="description" id="desc" cols="30" rows="10"></textarea>
                    <button onClick={() => setShow(false)}>Cancel</button>
                    <button onClick={createNewIssue}>Create</button>
                </form>
            </div>
        </div>
    )
}
