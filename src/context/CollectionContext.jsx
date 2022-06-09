import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CollectionContext = React.createContext();

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState();

  useEffect(() => {
    const getNftList = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x4D8c93F785b48e2919EA5C3D2305C64789b872D9&order_direction=asc'
      );

      setCollections(openseaData.data.assets);
      setActiveCollection(openseaData.data.assets[0]);
    };

    getNftList();
  }, []);

  return (
    <CollectionContext.Provider
      value={{ collections, activeCollection, setActiveCollection }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
