import Practice from './components/Practice/Practice';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Decks from './components/Decks/Decks';
import CreateDeck from './components/CreateDeck/CreateDeck';
import AddCard from './components/AddCard/AddCard';
import NotFound from './components/NotFound/NotFound';
import DeleteCard from './components/DeleteCard/DeleteCard';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Decks />
                    </Route>
                    <Route exact path="/flashcards">
                        <Decks />
                    </Route>
                    <Route path="/practice/:deckName">
                        <Practice />
                    </Route>
                    <Route path="/create">
                        <CreateDeck />
                    </Route>
                    <Route path="/add">
                        <AddCard />
                    </Route>
                    <Route path="/delete">
                        <DeleteCard />
                    </Route>
                    <Route exact path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Navbar />
            </div>
        </HashRouter>
    );
}

export default App;
