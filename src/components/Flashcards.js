import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Flashcard from './Flashcard';
import './Flashcards.css';
import firebase from '../utils/firebase';
import Loader from './Loader';

const Flashcards = () => {
    const { deckName } = useParams();
    const history = useHistory();

    const [currentCard, setCurrentCard] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [deck, setDeck] = useState(null);
    const [deckLength, setDeckLength] = useState(null);

    useEffect(() => {
        const decksRef = firebase.database().ref(`decks/` + deckName);
        decksRef.on('value', (snapshot) => {
            const deckArr = [];
            const deckS = snapshot.val();

            for (let id in deckS) {
                deckArr.push(deckS[id]);
            }
            setDeck(deckArr);
            setDeckLength(deckArr.length);
        });
    }, []);

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
            {deckLength && (
                <p className="completed">
                    completed {completed}/{deckLength}
                </p>
            )}
            {deck ? (
                <Flashcard card={deck[currentCard]} handleFlipCard={handleFlipCard} />
            ) : (
                <Loader />
            )}

            {completed === deckLength ? (
                <div>CONGRATULATION</div>
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
