import Practice from './components/Practice/Practice';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import CreateDeck from './components/CreateDeck/CreateDeck';
import AddCard from './components/AddCard/AddCard';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/flashcards">
                        <Home />
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
