import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/firebase';
import './CreateDeck.css';

const CreateDeck = () => {
    const [deckName, setDeckName] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (deckName && question && answer) {
            const deckRef = firebase.database().ref('decks/' + deckName);
            const card = {
                question,
                answer,
            };

            deckRef.push(card);
            clearForm();
            history.push('/');
        } else alert('Complete the form!');
    };

    const clearForm = () => {
        setDeckName('');
        setQuestion('');
        setAnswer('');
    };

    return (
        <section className="content">
            <h2 className="create__header">Create deck</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="form__input form__input--name"
                    type="text"
                    placeholder="deck name..."
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                />

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
                <button className="form__btn">Create</button>
            </form>
        </section>
    );
};

export default CreateDeck;
