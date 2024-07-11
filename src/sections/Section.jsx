import React from 'react';
import { articles } from '../constants';

const Section = () => {
  return (
    <div>
      <div>Section One</div>
      <div>
        {articles.map((article) => (
          <div key={article.id}>
            <div>{article.article}</div>
            <div>{article.title}</div>
            {article.details.map((section) => (
              <div key={section.id}>
                <div className='font-mulish'>{section.content}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
