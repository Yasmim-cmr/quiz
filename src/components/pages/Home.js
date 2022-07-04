import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from 'axios';


function Home() {
    

    const [user, setUser] = useState({
        name: '',
        cpf: '',
        teste:[

        ]
    });

    const [status, setStatus] = useState({
        type: '',
        message: '',
    })


    // const goToQUiz = () => {
    //     history.push("/quiz")}


    const valueInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const addUser = async e => {

        e.preventDefault();

        if (!validate()) return;

        const saveDataForm = await  axios.post('http://localhost:3001/person', {
            ...user
        });

        if (saveDataForm) {
            setStatus({
                type: 'success',
                mensagem: "Usuário cadastrado com sucesso!"
            });
            setUser({
                name: '',
                email: '',
                password: ''
            });
        } else {
            setStatus({
                type: 'error',
                mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });
        }
    }

    function validate() {
        if (!user.name) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!' });
        if (!user.cpf) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo CPF!' });
        return true
    }

    return (
        <div>
            <h1> cadastro</h1>
            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
            <Box
                component="form"
                onSubmit={addUser}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                autoComplete="off"
            >

                <TextField id="outlined-basic" label="CPF" variant="outlined" name="cpf" onChange={valueInput} value={user.cpf} />
                <TextField id="outlined-basic" label="Nome" variant="outlined" name="name" onChange={valueInput} value={user.name} />



                <Button href="/quiz"  type="submit" variant="contained">Submit</Button>
            </Box>
        </div>
    );
}

export default Home;