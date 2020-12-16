import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      setUsers(
        await fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => res.data)
      )
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
      {users.map(user => user.email)}
    </div>
  );
}

export default App;
