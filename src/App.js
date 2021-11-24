import React, { useState } from 'react';
import Home from './pages/Home';
import axios from './config/axios'
import SearchInput from './components/SearchInput';
function App() {
  const [users, setUsers] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const onSearchClick = () => {
    const url = "/users/" + searchTerm;
    axios.get(url)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <div>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={onSearchClick}>Search</button>
      </div>
      <div>
        <Home users={users} />
      </div>

    </>
  );
}

export default App;
