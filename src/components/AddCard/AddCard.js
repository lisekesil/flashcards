import { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Loader from '../Loader/Loader';
import './AddCard.css';

const AddCard = () => {
    const [decks, setDecks] = useState();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDeck = document.getElementById('select-deck');
        console.log(selectedDeck.value);

        if (question && answer) {
            const deckRef = firebase.database().ref('decks/' + selectedDeck.value);
            const card = {
                question,
                answer,
            };

            deckRef.push(card);

            deckRef.off();
        }
    };

    return (
        <section className="content">
            <h2 className="add__header">Add card</h2>
            {decks ? (
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__selection">
                        <label for="select-deck">Deck:</label>
                        {decks && (
                            <select className="form__deck-select" id="select-deck">
                                {decks.map((deck) => (
                                    <option key={deck}>{deck}</option>
                                ))}
                            </select>
                        )}
                    </div>

                    <input
                        className="form__input"
                        type="text"
                        placeholder="question..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <input
                        className="form__input"
                        type="text"
                        placeholder="answer..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                    <button className="form__btn">Add</button>
                </form>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default AddCard;
