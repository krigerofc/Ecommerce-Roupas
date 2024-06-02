import React, { useState, useEffect } from "react";
import axios from 'axios';

const Teste = () => {
    const [data, setData] = useState({ top_selling: [], latest_product: [] });

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
            <h1>Produtos Mais Vendidos:</h1>
            <ul>
                {data.top_selling.map(item => (
                    <li key={item.id}>
                        {item.product_name} - {item.price}
                    </li>
                ))}
            </ul>

            <h1>Produtos Mais Recentes:</h1>
            <ul>
                {data.latest_product.map(item => (
                    <li key={item.id}>
                        {item.product_name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Teste;
