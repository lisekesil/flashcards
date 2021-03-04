import { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';

const CreateDeck = () => {
    const [deckName, setDeckName] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (deckName && question && answer) {
            const deckRef = firebase.database().ref('decks/' + deckName);
            const card = {
                question,
                answer,
            };

            deckRef.push(card);
        }
    };

    return (
        <section className="content">
            <h2>Create deck</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="deck name..."
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                />

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
                <button>Create</button>
            </form>
        </section>
    );
};

export default CreateDeck;
