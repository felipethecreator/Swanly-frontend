import React, { useState } from 'react';
import axios from 'axios';
import '../style/Register.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', {
                email,
                username,
                password,
            });

            console.log(response.data);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <div id='register-div'>
            <h1>Javex Feed</h1>
            <form id='register-form' onSubmit={handleSubmit}>
                <h2>Registre-se</h2>
                <input
                    type="email"
                    className="register-inputs"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="register-inputs"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="register-inputs"
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit' id="register-button">Registrar</button>
            </form>
        </div>
    );
}
