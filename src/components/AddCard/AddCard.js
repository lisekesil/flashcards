import { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';

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
            <h2>Add card</h2>
            <form onSubmit={handleSubmit}>
                {decks && (
                    <select id="select-deck">
                        {decks.map((deck) => (
                            <option key={deck}>{deck}</option>
                        ))}
                    </select>
                )}

                <input
                    type="text"
                    placeholder="question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="answer..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button>Add</button>
            </form>
        </section>
    );
};

export default AddCard;
