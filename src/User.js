import React, { useState } from "react";
import "./App.css";

const User = () => {
  const [users, setUsers] = useState([
    { name: "Marko", years: 25 },
    { name: "Ivan", years: 25 },
    { name: "Dario", years: 25 },
    { name: "Mario", years: 25 },
  ]);

  const uvecajGodinu = () => {
    setUsers((prev) => {
      const arr = prev.map((el) => {
        return { name: el.name, years: el.years + 1 };
      });
      return arr;
    });
  };

  
  const promijeniKorisnika = (e) => {
    const arr = [...users];

    arr.map((user, index) => {
      arr[index].name = e.target.value;
      setUsers((prev) => (prev = arr));
      return { arr: user };
    });
  };

  return (
    <div className="user">
      {users.map((user, index) => (
        <div key={index}>
          Name: {user.name}
          {console.log(user.name)}
          <br />
          Years: {user.years}
          <br />
          <input type="text" onChange={promijeniKorisnika}></input>
        </div>
      ))}
      <button onClick={uvecajGodinu}>Uvecaj Godinu</button>
      {/* <button onClick={uvecajGodinu}>Uvecaj godinu</button> */}
    </div>
  );
};

export default User;
