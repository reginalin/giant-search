import React from 'react'
import './App.css'

const items = [
  'fun item',
  'other fun item',
  'truly fun item',
  'other item',
  'another item',
]

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('')

  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="search-container">
      <input
        className="searchbar"
        onChange={handleInput}
        type="text"
        placeholder="Search here..."
      />
      <div>
        Searching for: <span className="search-term">{searchValue}</span>
      </div>
    </div>
  )
}

const FeedItem = ({ text }) => {
  return <div className="feed-item">{text}</div>
}

const Feed = () => {
  return (
    <div className="feed">
      Annnnd the results are in!
      <div>
        {items.map((item, key) => (
          <FeedItem key={item} text={item} />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <div className="header">Giant Search</div>
      <div className="content">
        <Search />
        <Feed />
      </div>
      <div className="footer">
        powered by{' '}
        <a href="https://www.postgresql.org/docs/13/textsearch.html">
          postgres full text search
        </a>
      </div>
    </div>
  )
}

export default App
