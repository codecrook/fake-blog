import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/articles-list">
          <ArticlesList />
        </Route>

        <Route path="/article">
          <ArticlePage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
