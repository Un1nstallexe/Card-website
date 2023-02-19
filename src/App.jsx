import { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import CardSet from "./components/cardSet/CardSet";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
    let [lang, setLang] = useState("en");
    const cards = []
    return (
        <>
            <Header lang={lang} setLang={setLang}/>
            <CardSet lang={lang} cards={cards} />
            <About/>
            <Portfolio/>
            <Footer lang={lang}/> 
        </>
    );
}

export default App;
