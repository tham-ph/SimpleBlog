import {useState, useEffect} from "react";
import Axios from "axios";
function App() {
  const [users, setUsers] = useState([{username: "test"}, ]);
  useEffect(() => {
    Axios.get("http://localhost:5000/getAllUsers").then(res => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      {
        users.map(user => {
          return (
            <div>
              <h1 className="text-3xl underline">test</h1>
              <h1>username: {user.username}</h1>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
