import React, {useContext} from 'react'

import AuthContext from '../../contexts/auth'

import { Container, Text, Button } from './styles'

const Header = () => {

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
        <Container>
            <Text>
                Olá {user.name}, seja bem-vindo!
            </Text>
            <Button onClick={handleOut} >
                Sair
            </Button>
        </Container>
    )
}

export default Header
