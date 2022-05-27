import React, { useState } from "react";
import "./App.css";

const User = () => {
  const [users, setUsers] = useState([
    { name: "Marko", years: 21 },
    { name: "Ivan", years: 22 },
    { name: "Dario", years: 34 },
    { name: "Mario", years: 26 },
  ]);

  const promijeniKorisnika = (element) => (event) => {
    setUsers((prev) => {
      const arr = [...prev];
      arr[element].name = event.target.value;
      return arr;
    });
  };
  //nepotrebno mapiranje - nije dobro jer mapiram kroz svaki element i mijenjam stanje umjesto samo jednog
  // const arr = [...users];
  // arr.map((user, index) => {
  //   arr[index].name = e.target.value;
  //   setUsers((prev) => (prev = arr));
  //   console.log(arr[index]);
  //   console.log(index);
  //   return { arr: user };
  // });

  const uvecajGodinu = (test) => {
    setUsers((prev) => {
      const arr = [...prev];
      console.log(arr[test]);
      return arr;
    });
  };

  return (
    <div className="user">
      {users.map((user, index) => (
        <div key={index}>
          Name: {user.name}
          <br />
          Years: {user.years}
          <br />
          <input
            type="text"
            value={user.name}
            onChange={promijeniKorisnika(index)}
          ></input>
          <br />
          <button onClick={uvecajGodinu(index)}>Uvecaj godinu</button>
          {/* <button>Uvecaj Godinu</button> */}
        </div>
      ))}
    </div>
  );
};

export default User;
