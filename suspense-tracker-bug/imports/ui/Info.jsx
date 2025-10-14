import React from 'react';
import { useTracker } from 'meteor/react-meteor-data/suspense';
import { Comments, Fruits, Links, Posts, Powerups, Tasks } from '../../both';
import { Hello } from './Hello';


export const Info = () => {
  const links = useTracker("links", () => Links.find().fetchAsync());
  const specificLink = useTracker("specificLink", () => Links.findOneAsync({url: "https://guide.meteor.com"}));

  const tasks = useTracker("tasks", () => Tasks.find().fetchAsync());
  const specificTask = useTracker("specificTask", () => Tasks.findOneAsync({importance: 2}));

  const powerups = useTracker("powerups", () => Powerups.find().fetchAsync());
  const specificPowerup = useTracker("specificPowerup", () => Powerups.findOneAsync({name: 'Speed Boost'}));

  const fruits = useTracker("fruits", () => Fruits.find().fetchAsync());
  const specificFruit = useTracker("specificFruit", () => Fruits.findOneAsync({taste: 'sour'}));

  const posts = useTracker("posts", () => Posts.find().fetchAsync());
  const specificPost = useTracker("post", () => Posts.findOneAsync({author: 'Admin'}))

  const comments = useTracker("comments", () => Comments.find().fetchAsync());
  const specificComment = useTracker("specificComment", () => Comments.findOneAsync({user: 'Bob'}));  

  // Uncomment these to increase the loading time to > 60 seconds
  // const comments2 = useTracker("comments2", () => Comments.find().fetchAsync());
  // const comments3 = useTracker("comments3", () => Comments.find().fetchAsync());

  return (
    <div>
      <Hello />
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
