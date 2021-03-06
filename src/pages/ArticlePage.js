import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';


const ArticlePage = ({ match }) => {
    const { name } = match.params;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <NotFoundPage />;

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}

            <h2>Other Articles:</h2>
            <ArticlesList articles={otherArticles} />

        </>
    );
};

export default ArticlePage;
