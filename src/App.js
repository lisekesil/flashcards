import Practice from './components/Practice/Practice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <h1 className="logo">Flashcards</h1>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/practice/:deckName">
                        <Practice />
                    </Route>
                </Switch>
                <Navbar />
            </div>
        </Router>
    );
}

export default App;
