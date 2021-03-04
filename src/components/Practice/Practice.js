import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Flashcard from '../Flashcard/Flashcard';
import Loader from '../Loader/Loader';
import firebase from '../../utils/firebase';
import './Practice.css';

const Practice = () => {
    const { deckName } = useParams();

    const [currentCard, setCurrentCard] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [deck, setDeck] = useState(null);
    const [deckLength, setDeckLength] = useState(null);

    useEffect(() => {
        const decksRef = firebase.database().ref(`decks/` + deckName);
        decksRef.once('value', (snapshot) => {
            const deckArr = [];
            const deckSnap = snapshot.val();

            for (let id in deckSnap) {
                deckArr.push(deckSnap[id]);
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
                <Flashcard
                    card={deck[currentCard]}
                    handleFlipCard={handleFlipCard}
                    handleSkipClick={handleSkipClick}
                    handleGoodClick={handleGoodClick}
                />
            ) : (
                <Loader />
            )}

            {completed === deckLength && <div>CONGRATULATION</div>}

            {deck && completed < deckLength && (
                <div className="buttons">
                    <button className="btn btn--skip" onClick={handleSkipClick}>
                        &#128078;
                    </button>
                    <button className="btn btn--good" onClick={handleGoodClick}>
                        &#128077;
                    </button>
                </div>
            )}
        </div>
    );
};

export default Practice;
