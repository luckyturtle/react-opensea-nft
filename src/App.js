import { useContext } from 'react';

import CollectionList from './components/CollectionList';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { CollectionContext } from './context/CollectionContext';

function App() {
  const { collections } = useContext(CollectionContext);
  return (
    <div className="app">
      <Header />
      {collections.length && (
        <>
          <Main />
          <CollectionList />
        </>
      )}
    </div>
  );
}

export default App;
