import React from "react";
import "./App.css";

// import User from "./User";
import UserC from "./UserC";

class App extends React.Component {
  state = {
    users: [
      { name: "Marko", years: 25 },
      { name: "David", years: 33 },
      { name: "Dario", years: 12 },
      { name: "Marin", years: 99 },
    ],
  };

  uvecajGodinu = (index) => {
    const arr = [...this.state.users];
    arr[index].years += 1;
    this.setState({ users: arr });
  }
// ovaj primjer funkcije je ako hocemo svim korisnicima nadodati godinu
// godine se dodaju svim korisnicima radi metode map
  // uvecajGodinu = (index) => {
  //   this.setState((prev) => {
  //     const arr = prev.users.map((el) => {
  //       return { name: el.name, years: el.years + 1 };
  //     });
  //     console.log(arr[index]);
  //     // console.log(index);
  //     return { users: arr };
  //   });
  // };

  // ovaj primjer mijenja ime samo jednom elementu arraya (users)
  // promijeniKorisnika = (e) => {
  //   const arr = [...this.state.users];
  //   arr[0].name = e.target.value;
  //   this.setState({ users: arr });
  // }

  promijeniKorisnika = (index, e) => {
    const arr = [...this.state.users];
    arr[index].name = e.target.value;
    this.setState({ users: arr });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {/* <User /> */}
          {/* *name*={} i *years*={} su propsi */}
          {/* <UserC name={users[0].name} years={users[0].years} onNameChange={this.promijeniKorisnika}/>
          <UserC name={users[1].name} years={users[1].years} />
          <UserC name={users[2].name} years={users[2].years} />
          <UserC name={users[3].name} years={users[3].years} /> */}
          {users.map((user, index) => {
            return (
              <UserC
                key={user.id}
                name={user.name}
                years={user.years}
                onClickEvent={() => this.uvecajGodinu(index)}
                onNameChange={(e) => this.promijeniKorisnika(index, e)}
              />
            );
          })}
          {/* <button type="button" onClick={this.uvecajGodinu}>Uvecaj godinu</button> */}
        </header>
      </div>
    );
  }
}

export default App;
