import React, { useState,  } from 'react';
import './App.css';
import { Header, Footer } from './Layout';
import data from './data.json';


const App = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [content, setContent] = useState([]);
    const [showName, setShowName] = useState(false); // Nowy stan



    /* PICKING OPTIONS FROM JSON FILE*/ 
    const handleRadioChange = (event) => {
        const value = event.target.value;
        let selectedContent;
        
        if (value === "1") {
            const item = data.find(item => item.id === 1);  //selectedContent = data.find(item => item.id === 1).content;                             //2nd option .content
            selectedContent = item ? item.content : 'BRAK DOSTĘPNYCH TEKSTÓW Z TABLICY';    //2nd option delete those

        } else if (value === "2") {
            const item = data.find(item => item.id === 2);  //selectedContent = data.find(item => item.id === 2);                             //2nd option .content
            selectedContent = item ? item.content : 'BRAK DOSTĘPNYCH TEKSTÓW Z TABLICY';    //2nd option delete those

        } else if (value === "random") {

            const availableOptions = data.filter(item => item.id >= 3 && item.id <= 7 && !content.includes(item.content));
            if (availableOptions.length > 0) {                                                 //2nd option without if just const randomindex
                const randomIndex = Math.floor(Math.random() * availableOptions.length);//test
                selectedContent = availableOptions[randomIndex].content;
            } else {
                selectedContent = 'BRAK DOSTĘPNYCH TEKSTÓW Z TABLICY';
            }
        } else {
            selectedContent = 'BRAK DOSTĘPNYCH TEKSTÓW Z TABLICY';
        }

        setSelectedOption(selectedContent);
    };

    /* REPLACE DATA BUTTON*/ 
    const handleReplace = () => {
        setContent([selectedOption]);
    };

    /* ADDON DATA BUTTON*/ 
    const handleAppend = () => {
        setContent(prevContent => {
            const newContent = [...prevContent, selectedOption].sort();
            return [...new Set(newContent)]; // NO DUBBLING IN CONTENT
        });
    };

    const handleShowName = () => {
        setShowName(true); // Ustawienie stanu showName na true
    };


    return (
        <div className="App">
            <Header showName={showName} />
            <h1 className="headline">Nagłówek H1</h1>
            <div className="line"></div>
            {/*MAIN*/}
            <div className="main-content">
                <div className="main-part part1">
                    <h2>BLOK PIERWSZY</h2>
                    <form className="textbox1">
                        {/*radio buttons*/}
                        <label htmlFor="option1">
                            <input type="radio" id="option1" name="option" value="1" onChange={handleRadioChange} />Opcja pierwsza
                            </label><br />
                        <label htmlFor="option2">
                            <input type="radio" id="option2" name="option" value="2" onChange={handleRadioChange}/>Opcja druga
                            </label><br />
                        <label htmlFor="option3">
                            <input type="radio" id="option3" name="option" value="random" onChange={handleRadioChange} />Opcja losowa
                            </label><br />

                    </form>
                </div>
                
                <div className="main-part part2">
                    <h2>BLOK DRUGI</h2>
                    {/*buttons*/}
                    <button className="button" onClick={handleReplace} > ZASTĄP </button>
                    <button className="button" onClick={handleAppend}> DODAJ </button>
                </div>
                {/*display container */}
                <div className="main-part part3">
                    <h2 className="truncate">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE, NA POTRZEBY TEGO ZADANIA</h2>
                    {selectedOption === 'BRAK DOSTĘPNYCH TEKSTÓW Z TABLICY!' ? (
                        <div className="error-message">{selectedOption}</div> //error massage
                    ) : (
                            content.map((item, index) => (
                                <div key={index} className="content-item">{item}</div> //normal content
                            ))
                        )}

                </div>
            </div>
            <Footer handleShowName={handleShowName} />
        </div>
    );
};
export default App;
