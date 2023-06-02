import { useState } from 'react';
import { Tweet } from './tweet';
import { useRef } from 'react';
import { TweetForm } from './tweetFrom';


const DEFAULT_TWEET = [
  {
    id: "1",
    name :"Lucas", 
    content:"Je m'appelle Lucas",
    like:"12"
  },
  {
    id: "2",
    name :"Louis", 
    content:"Je m'appelle Louis",
    like:"2"
  },
  {
    id: "3",
    name :"Lola", 
    content:"Je m'appelle Lola",
    like:"1232"
  },
]

function App() {

  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleSubmit = (tweet) => {

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name: tweet.name,
      content: tweet.content,
      like: 0
    }

    addTweet(newTweet);

  };

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  }

  const onDelete =(tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet  = [...curr];

      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    })
  }


  return(
    <div>
      <TweetForm onSubmit={handleSubmit}/>
      {/* <form  className='tweet-form'>
        <h3>Nouveau Tweet</h3>
        <input placeholder='Name' type="text" name='name'/>
        <input placeholder='Content' type="content" name="content"/>
        <input type="submit" />
      </form> */}

      <div className='tweet-container'>
      {tweets.map((tweet)=> {
        return (
          <Tweet
          key={tweet.id}
          id= {tweet.id}
          name={tweet.name}
          content={tweet.content}
          like={tweet.like}
          onDelete={(id) => {
            onDelete(id);
          }}
          onLike={(id) => {
            onLike(id);
          }}
          />
        );
      })}
    </div>
    </div>
  );
}

export default App;
