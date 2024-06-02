import React, { useState, useEffect } from "react";
import axios from 'axios';

const Teste = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/teste');
                setData(response.data);
            } catch (error) {
                console.error('Erro na solicitação:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dados da API:</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.product_name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Teste;
