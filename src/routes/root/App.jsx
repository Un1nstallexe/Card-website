import { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import CardSet from "./components/cardSet/CardSet";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { useEffect } from 'react';
import Projects from './components/projects/Projects';
const App = () => {
    let [lang, setLang] = useState("en");

    useEffect(() =>{ // language auto-control
        if (navigator.languages.includes("pl") 
        || navigator.languages.includes("pl-PL")) {
            setLang("pl");
        }
        if (navigator.languages.includes("by") 
        || navigator.languages.includes("by-BY")
        || navigator.languages.includes("ru")
        || navigator.languages.includes("ru-RU")
        || navigator.languages.includes("ru-BY")) {
            setLang("by");
        }
    }, []);

    const cards = []
    return (
        <div className='App'>
            <Header lang={lang} setLang={setLang}/>
            <CardSet lang={lang} cards={cards} />
            <About lang={lang}/> 
            <Projects lang={lang}/>
            <Footer lang={lang}/> 
        </div>
    );
}

export default App;
