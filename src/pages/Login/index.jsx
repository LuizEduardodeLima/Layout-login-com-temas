import React from 'react'

//Criação do componênte login:
export default function Login(){
    return(
        <div className="box">
            <p className='login'>Entrar no Sistema</p>

            <form action="" className="form">
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="password" name="password" id="password" placeholder='Password' />
                
                <div  className="submit">
                    <a href="#">
                        Entrar
                    </a>
                </div>
                
                <div className="logout">
                    <p>
                        <a href="#">
                            Esqueceu a senha?
                        </a>
                     </p>
                </div>
            </form>
        </div>
    )
}