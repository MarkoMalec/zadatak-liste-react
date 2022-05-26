import React, { useState } from "react";
import "./App.css";

const User = () => {
  const [users, setUsers] = useState([
    { name: "Marko", years: 21 },
    { name: "Ivan", years: 22 },
    { name: "Dario", years: 34 },
    { name: "Mario", years: 26 }
  ]);

  const uvecajGodinu = (element) => {
    
    
  };
    // setUsers((prev) => {
    //   const arr = prev.map((el) => {
    //     return { name: el.name, years: el.years + 1 };
    //   });
    //   return arr;
    // });
  // };

  
  const promijeniKorisnika = element => event => {
    
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

  return (
    <div className="user">
      {users.map((user, index) => (
        <div key={index}>
          Name: {user.name}
          <br />
          Years: {user.years}
          <br />
          <input type="text" value={user.name} onChange={promijeniKorisnika(index)}></input>
          <button onClick={uvecajGodinu(index)}>Uvecaj Godinu</button>
        </div>
      ))}
      {/* <button onClick={uvecajGodinu}>Uvecaj godinu</button> */}
    </div>
  );
};

export default User;
