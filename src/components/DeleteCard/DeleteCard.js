import { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Loader from '../Loader/Loader';
import './DeleteCard.css';

const DeleteCard = () => {
    const [decks, setDecks] = useState();
    const [cards, setCards] = useState();
    const [selectedDeck, setSelectedDeck] = useState();

    useEffect(() => {
        const decksRef = firebase.database().ref('decks');
        decksRef.once('value', (snapshot) => {
            const deckArr = [];
            const decksSnap = snapshot.val();

            for (let id in decksSnap) {
                deckArr.push(id);
            }
            setDecks(deckArr);
        });
    }, []);

    const handleSelect = (e) => {
        // Czemu to nie działa?? ustawaim selectedDeck
        if (e.target.value === '') return;
        setSelectedDeck(e.target.value);
        // muszę użyć e.target.value w linku, ponieważ selectedDeck nie dziala poprawnie
        const cardsRef = firebase.database().ref('decks/' + e.target.value);
        cardsRef.once('value', (snapshot) => {
            const cardsArr = [];
            const cardsSnap = snapshot.val();

            for (let id in cardsSnap) {
                cardsArr.push({ id, ...cardsSnap[id] });
            }
            setCards(cardsArr);
        });
    };

    const deleteCard = (e) => {
        const cardRef = firebase
            .database()
            .ref('decks/' + selectedDeck)
            .child(e.target.dataset.cardid);

        cardRef.remove();

        const cardsRef = firebase.database().ref('decks/' + selectedDeck);
        cardsRef.once('value', (snapshot) => {
            const cardsArr = [];
            const cardsSnap = snapshot.val();

            for (let id in cardsSnap) {
                cardsArr.push({ id, ...cardsSnap[id] });
            }
            setCards(cardsArr);
        });
    };

    return (
        <section className="content">
            <h2 className="add__header">Delete card</h2>
            {decks ? (
                <>
                    <div className="form__selection">
                        <label htmlFor="select-deck">Deck:</label>

                        <select
                            onChange={handleSelect}
                            className="form__deck-select"
                            id="select-deck"
                        >
                            <option value="">--SELECT--</option>
                            {decks.map((deck) => (
                                <option key={deck}>{deck}</option>
                            ))}
                        </select>
                    </div>

                    {cards && (
                        <section className={`cards-section ${cards.length > 5 && 'scroller'}`}>
                            {cards.map((card) => (
                                <div className="card-wrapper" key={card.id}>
                                    <div className="card__info">
                                        <p>{card.question}</p>
                                        <p className="card-answer">{card.answer}</p>
                                    </div>
                                    <button
                                        className="card-delete-btn"
                                        data-cardid={card.id}
                                        onClick={deleteCard}
                                    >
                                        delete
                                    </button>
                                </div>
                            ))}
                        </section>
                    )}
                </>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default DeleteCard;
