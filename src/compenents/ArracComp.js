import React, { useState } from 'react';

export default function ArracComp() {

    const [fsClass,setFsClass] = useState([
        {nom : 'tijani' , prenom : 'mariem'},
        {nom : 'tijani' , prenom : 'abderahman'},
        {nom : 'sraini' , prenom : 'fatima'}
    ]);

  return (
    <table border={1} >
    <div>
        {fsClass.map((st,ind) => (
            <tr>
                <td>{st.nom}</td>
                <td>{st.prenom}</td>
            </tr>
        )) 

}
    </div>
    </table>
  )
}
