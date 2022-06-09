import React, { useContext } from 'react';

import { CollectionContext } from '../../context/CollectionContext';
import CollectionCard from '../CollectionCard';
import './index.css';

const CollectionList = () => {
  const { collections, setActiveCollection } = useContext(CollectionContext);

  return (
    <div className="collectionList">
      {collections.map((collection) => (
        <div key={collection.token_id}>
          <CollectionCard
            id={collection.token_id}
            name={collection.name}
            traits={collection.traits}
            image={collection.image_original_url}
            handleClick={() => setActiveCollection(collection)}
          />
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
