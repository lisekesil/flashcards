import './Flashcard.css';

const Flashcard = ({ card, handleFlipCard }) => {
    return (
        <div>
            {card && (
                <div className="card-container">
                    <div className="card">
                        <div className="card__front">
                            <p>{card.question}</p>
                        </div>
                        <div className="card__back">
                            <p className="answer">{card.answer}</p>
                        </div>
                    </div>
                    <button className="card__flip-btn" onClick={handleFlipCard}>
                        FLIP
                    </button>
                </div>
            )}
        </div>
    );
};

export default Flashcard;
