import React from 'react';
import GamePost from './GamePost';
import RegularPost from './RegularPost';
import Post from './Post';
import styled from 'styled-components';

const PUl = styled.ul`
  article {
    margin: 0 auto;
  }
  /* box-shadow: inset 0 0 10px red; */
  .card-wrapper {
    /* box-shadow: inset 0 0 10px red; */
    margin-bottom: 40px;
  }
`;

// Regular Post = <Post post={post} />
// Game Post = <Post game={game} />
export default function PostList(props) {
  // const isTeam = author.accountname.startsWith('SPORT_');
  console.log(props);

  return (
    <>
      <PUl>
        {props.post.posts.map((post) => {
          let game = null;

          if (post.author.accountname.indexOf('SPORT_') === 0) {
            let temp = post.content.split(',');
            game = {
              date: temp[0],
              day: temp[1],
              time: temp[2],
              home: temp[3],
              away: temp[4],
              stadium: temp[5],
              full_stadium: temp[6],
            };
            // if (parseInt(date) < parseInt(game.date.replace('.', ''))) {
            //   console.log('안나오는 데이터');
            //   return;
            // }
          }

          return (
            <li key={post.author._id}>
              <section className='card-wrapper'>
                <Post post={post} game={game} />
              </section>
            </li>
          );
        })}
        {/* {props.posts.map((post) => {
          let game = null;
          if (post.author.accountname.indexOf('SPORT_') === 0) {
            let temp = post.content.split(',');
            game = {
              date: temp[0],
              day: temp[1],
              time: temp[2],
              home: temp[3],
              away: temp[4],
              stadium: temp[5],
              full_stadium: temp[6],
            };

            // if (parseInt(date) < parseInt(game.date.replace('.', ''))) {
            //   console.log('안나오는 데이터');
            //   return;
            // }
          }
          return (
            <li key={post.author._id}>
              <section className='card-wrapper'>
                <Post post={post} game={game} />
              </section>
            </li>
          );
        })} */}
      </PUl>
      ;
    </>
  );
}
