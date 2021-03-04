import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import firebase from '../../utils/firebase';
import './Home.css';

const Home = () => {
    const [decks, setDecks] = useState();

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

    return (
        <main className="content">
            {decks ? (
                <div className="decks__container">
                    {decks.map((deck) => (
                        <section className="select" key={deck + Math.random()}>
                            <h2 className="select__name">{deck}</h2>
                            <Link to={`/practice/${deck}`}>
                                <button className="select__btn">start</button>
                            </Link>
                        </section>
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </main>
    );
};

export default Home;
