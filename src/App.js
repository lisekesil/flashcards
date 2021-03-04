import Practice from './components/Practice/Practice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import CreateDeck from './components/CreateDeck/CreateDeck';
import AddCard from './components/AddCard/AddCard';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
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
                </Switch>
                <Navbar />
            </div>
        </Router>
    );
}

export default App;
