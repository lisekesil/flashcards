import Flashcards from './components/Flashcards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <h1 className="logo">Flashcards</h1>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/flashcards/:deckName">
                        <Flashcards />
                    </Route>
                </Switch>
                <Navbar />
            </div>
        </Router>
    );
}

export default App;
