import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ArticleItem = ({ article }) => (
  <li style={{ borderTop: '1px solid gray', width: 600 }}>
    <h3>{sawada.title}</h3>
    {sawada.cover &&
      <div
        style={{
          background: `url(${sawada.cover.url})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          width: 600,
          height: 150,
        }}
      />
    }
    <div style={{ textAlign: 'right', color: 'lightgray' }}>
      {new Date(sawada.date).toDateString()}
    </div>
    <p>{sawada.content}</p>
  </li>
);

const ArticleList = ({ data: { loading, error, allSawadas } }) => (
  loading ? <p>Loading...</p> :
  error ? <p>Error: {error}</p> : (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {allSawadas.map(sawada => <ArticleItem key={sawada.id} article={sawada} />)}
    </ul>
  )
);

const query = gql`
{
  allSawadas{
    title
    date
    cover{
      url
    }
  }
}
`;

export default graphql(query)(ArticleList);
