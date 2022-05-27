import React, { useState } from "react";

class UserC extends React.Component {
  
    render() {
        // name i years su propsi koje smo ugnjezdili u App komponenti
        // pod <UserC ... /> this.props su prospi
        const { name, years, onNameChange, onClickEvent } = this.props;
        // const ispis = onNameChange ? <input type="text" onChange={onNameChange} value={name}/> : "";

        return (
            <div>
                <p>Pozdrav,  moje ime je {name} i imam {years} godina.</p>
                {/* {ispis} */}
                <input type="text" onChange={onNameChange} value={name} />
                <button type="button" onClick={onClickEvent}>Uvecaj Godinu</button>
            </div>
        );

    }

}

export default UserC;
