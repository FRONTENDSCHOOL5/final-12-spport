import React from 'react';
import IconPostAlbumOff from '../../assets/image/icon-post-album-off.svg';
import IconPostAlbumOn from '../../assets/image/icon-post-album-on.svg';
import IconPostListOff from '../../assets/image/icon-post-list-off.svg';
import IconPostListOn from '../../assets/image/icon-post-list-on.svg';
import styled from 'styled-components';

const FeedHeaderStyle = styled.div`
  padding: 9px;
  border-top: 0.5px solid var(--color-maingrey);
  border-bottom: 0.5px solid var(--color-maingrey);
  overflow: hidden;

  .btns {
    float: right;
  }
  button {
    padding: 4px;
  }
  button + button {
    margin-left: 10px;
  }
  button img {
    vertical-align: top;
  }
`;

export default function FeedHeader({ listType, setListType }) {
  return (
    <FeedHeaderStyle>
      <div className='btns'>
        {/* list button */}
        <button
          onClick={() => {
            setListType('list');
          }}
        >
          <img
            src={listType === 'list' ? IconPostListOn : IconPostListOff}
            alt='목록형 게시글 버튼'
          />
        </button>
        {/* album button */}
        <button
          onClick={() => {
            setListType('album');
          }}
        >
          <img
            src={listType === 'album' ? IconPostAlbumOn : IconPostAlbumOff}
            alt='앨범형 게시글 버튼'
          />
        </button>
      </div>
    </FeedHeaderStyle>
  );
}
