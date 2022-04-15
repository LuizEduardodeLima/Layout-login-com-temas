//Arquivo responsável pela configuração das nossas rotas:
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'

//Import dos componentes que serão usados nas rotas:
import Login from './pages/Login'
import Inicio from './pages/Inicio'

//Import do nosso contexto:
import { AuthContext } from './context/auth'
import { useState } from 'react'

export default function AppRoutes(){
    //Estado para saber se o usuário está logado:
    const [user, setUser] = useState(null) 

    const login = (email, senha) => {
        console.log("Login", { email, senha })
        setUser({ id: "123", email })
    }

    //Logout:
    const logout = () => {
        console.log("Sair")
    }

    return(
        <Router>
            {/*
                O Provider precisa ser iniciado com alguns parametros, ou seja dos valores que eu
                desejo armazenar dentro do contexto:
            */}
            <AuthContext.Provider value={{ autenticado: !!user, user, login }}>
                <Routes>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/" element={<Inicio />}></Route>
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
}