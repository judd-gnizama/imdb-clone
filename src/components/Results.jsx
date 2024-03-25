import React from 'react'

const Results = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.original_title || result.original_name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
    </div>
  )
}

export default Results
