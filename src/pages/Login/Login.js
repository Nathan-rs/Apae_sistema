import React from 'react';
import './login.css';
import img_apae from '../../assets/images/APAE.jpg';

const Login = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="card_img">
                    <div>
                        <img src={img_apae} alt="apae Caixas-MA"/>
                    </div>

                    <div>
                        <p>Apae-Caxias-MA</p>
                        <p>Sistema de login</p>
                    </div>
                </div>

                <div className="card_login">
                    <div>
                        <h2>Login</h2>
                    </div>

                    <div className="inputs">
                        <div>
                            <input type="text" placeholder="User Name" />
                        </div>
                        
                        <div>
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;