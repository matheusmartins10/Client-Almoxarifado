import React, { useContext } from 'react'
import AuthContext from '../../contexts/auth'

const DashBoard = () => {
    let user;

    const userStorage = sessionStorage.length > 0 ? sessionStorage.getItem('@Proffy:user') : localStorage.getItem('@Proffy:user')

    if(userStorage !== null){
        user = JSON.parse(userStorage)
    }

    const { signOut } = useContext(AuthContext)

    const handleOut = () => {
        signOut()
    }

    return (
        <>
         <h1> Portal do walter {user.name} </h1>
         <ul>
             <li>Abacaxi</li>
             <li>Pera</li>
             <li>Banana</li>
         </ul>
         <button onClick={handleOut} > Sair </button>   
        </>
    )
}

export default DashBoard
