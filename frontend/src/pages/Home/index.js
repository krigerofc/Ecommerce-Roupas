import Bottom from "../../components/Bottom";
import Card from "../../components/Card";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// TESTE DE CARD - Remover  
import roupas1 from '../../components/Card/dewa.jpg'
import roupas2 from '../../components/Card/mulher1.jpg'
import roupas3 from '../../components/Card/R.jpg'
import roupas4 from '../../components/Card/roupa.png'

function Home(){
    return(
        <>
            <Header/>
            <Bottom/>
            <Category Category='Lançamentos'>
                <Card id={roupas1}/>
                <Card id={roupas2}/>
                <Card id={roupas3}/>
                <Card id={roupas4}/>
                <Card id={roupas1}/>
            </Category>
            <Category Category='Mais Vendidos'>
                <Card id={roupas1}/>
                <Card id={roupas2}/>
                <Card id={roupas3}/>
                <Card id={roupas4}/>
                <Card id={roupas1}/>
            </Category>
            <Footer/>
        </>
    );
}

export default Home;