import { useState } from 'react';
import './Flashcards.css';

const flashcards = [
    {
        id: 1,
        question: 'camiseta',
        answer: 'koszulka',
    },
    {
        id: 2,
        question: 'lavar',
        answer: 'myć',
    },
    {
        id: 3,
        question: 'limpiar',
        answer: 'sprzątać',
    },
];

const Flashcards = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [deck, setDeck] = useState(flashcards);

    const handleShowAnswer = (e) => {
        //e.target.parentElement.firstChild.innerHTML = answer;
        // e.target.parentElement.childNodes[0].classList.toggle('hide');
        // e.target.parentElement.childNodes[1].classList.toggle('hide');
        e.target.parentElement.parentElement.classList.toggle('card__flip');
    };

    const handleGoodClick = () => {
        document.querySelector('.card').classList.remove('card__flip');

        const newDeck = [...deck];
        newDeck.splice(currentCard, 1);

        // setCurrentCard(currentCard + 1);
        setCompleted(completed + 1);
        setDeck(newDeck);
    };

    const handleAgainClick = () => {
        document.querySelector('.card').classList.remove('card__flip');

        const newDeck = [...deck];
        newDeck.push(deck[currentCard]);
        newDeck.splice(currentCard, 1);
        console.log(newDeck);
        //setCurrentCard(currentCard + 1);
        setDeck(newDeck);
    };

    return (
        <div className="content">
            <p>
                completed {completed}/{flashcards.length}
            </p>
            {deck[currentCard] && (
                // <div className="card-container">
                <div className="card">
                    <div className="card__front">
                        <p>{deck[currentCard].question}</p>
                        <button className="card__flip-btn" onClick={(e) => handleShowAnswer(e)}>
                            FLIP
                        </button>
                    </div>
                    <div className="card__back">
                        <p>{deck[currentCard].answer}</p>
                        <button className="card__flip-btn" onClick={(e) => handleShowAnswer(e)}>
                            FLIP
                        </button>
                    </div>
                </div>
                // </div>
            )}
            {/* {flashcards.map((f) => (
                <div key={f.id}>
                    <p>{f.question}</p>
                    <p className="hide">{f.answer}</p>
                    <button onClick={(e) => handleShowAnswer(e)}>show answer</button>
                </div>
            ))} */}
            <button onClick={handleAgainClick}>again</button>
            <button onClick={handleGoodClick}>good</button>
        </div>
    );
};

export default Flashcards;
