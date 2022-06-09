import React, { useContext } from 'react';

import { CollectionContext } from '../../context/CollectionContext';
import instagramLogo from '../../assets/owner/instagram.png';
import twitterLogo from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';
import './index.css';

const Main = () => {
  const { activeCollection } = useContext(CollectionContext);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="collectionHighlight">
          <div className="collectionContainer">
            <img
              className="activeCollection"
              src={activeCollection.image_original_url}
              alt="activeCollection"
            />
          </div>
        </div>
        <div className="collectionDetails">
          <div className="title">
            {activeCollection.name}
            <span className="itemNumber">•#{activeCollection.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activeCollection.owner.profile_img_url}
                alt="ownerImageContainer"
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">
                  {activeCollection.owner.address}
                </div>
                <div className="ownerHandle">@stardust</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="instagramLogo" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="twitterLogo" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="moreIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
