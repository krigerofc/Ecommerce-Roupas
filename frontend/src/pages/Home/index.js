import React, { useState, useEffect } from "react";
import axios from 'axios';
import Bottom from "../../components/Bottom";
import Card from "../../components/Card";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// TESTE DE CARD - Remover  
const Home = () => {
    const [data, setData] = useState({top_selling:[], latest_product:[]});

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

    return(
        <>
            <Header/>
            <Bottom/>
            <Category Category='Lançamentos'>
                {data.latest_product.map(item => (
                    item.images.map(images => (
                        <Card key={item.id} id={item.id} name={item.product_name} price={item.price} url={images.image}/>
                    ))
                ))}
            </Category>
            <Category Category='Mais Vendidos'>
                {data.top_selling.map(item => (
                    item.images.map(images => (
                        <Card key={item.id} id={item.id} name={item.product_name} price={item.price} url={images.image}/>
                    ))
                ))}
            </Category>
            <Footer/>
        </>
    );
}

export default Home;