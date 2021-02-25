import { useState } from 'react';
import Flashcard from './Flashcard';
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
    {
        id: 4,
        question: 'perrito',
        answer: 'piesek',
    },
    {
        id: 5,
        question: 'el gato',
        answer: 'kot',
    },
];

const Flashcards = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [deck, setDeck] = useState(flashcards);
    const [deckLength, setDeckLength] = useState(deck.length);

    const handleFlipCard = () => {
        document.querySelector('.answer').classList.remove('hide');
        document.querySelector('.card').classList.toggle('card__flip');

        document.querySelectorAll('.btn').forEach((btn) => (btn.disabled = false));
    };

    const handleGoodClick = () => {
        document.querySelector('.answer').classList.add('hide');
        document.querySelector('.card').classList.remove('card__flip');
        document.querySelectorAll('.btn').forEach((btn) => (btn.disabled = true));

        const newDeck = [...deck];
        newDeck.splice(currentCard, 1);
        setCompleted(completed + 1);
        setDeck(newDeck);
    };

    const handleSkipClick = () => {
        document.querySelector('.answer').classList.add('hide');
        document.querySelector('.card').classList.remove('card__flip');
        document.querySelectorAll('.btn').forEach((btn) => (btn.disabled = true));

        const newDeck = [...deck];
        newDeck.push(deck[currentCard]);
        newDeck.splice(currentCard, 1);
        setDeck(newDeck);
    };

    return (
        <div className="content">
            <p className="completed">
                completed {completed}/{deckLength}
            </p>
            {deck[currentCard] && (
                <Flashcard card={deck[currentCard]} handleFlipCard={handleFlipCard} />
            )}

            {completed === deckLength ? (
                <div>GRATULACJE</div>
            ) : (
                <div className="buttons">
                    <button className="btn btn--skip" onClick={handleSkipClick}>
                        skip
                    </button>
                    <button className="btn btn--good" onClick={handleGoodClick}>
                        good
                    </button>
                </div>
            )}
        </div>
    );
};

export default Flashcards;
