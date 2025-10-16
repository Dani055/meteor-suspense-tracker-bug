import React from 'react';
import { useTracker } from 'meteor/react-meteor-data/suspense';
import { Comments, Fruits, Links, Posts, Powerups, Tasks } from '../../both';
import { Hello } from './Hello';


export const Info = () => {
  const links = useTracker("links", () => Links.find().fetchAsync());
  const specificLink = useTracker("specificLink", () => Links.findOneAsync({ url: "https://guide.meteor.com" }));

  const tasks = useTracker("tasks", () => Tasks.find().fetchAsync());
  const specificTask = useTracker("specificTask", () => Tasks.findOneAsync({ importance: 2 }));

  const powerups = useTracker("powerups", () => Powerups.find().fetchAsync());
  const specificPowerup = useTracker("specificPowerup", () => Powerups.findOneAsync({ name: 'Speed Boost' }));

  const fruits = useTracker("fruits", () => Fruits.find().fetchAsync());
  const specificFruit = useTracker("specificFruit", () => Fruits.findOneAsync({ taste: 'sour' }));

  const posts = useTracker("posts", () => Posts.find().fetchAsync());
  const specificPost = useTracker("post", () => Posts.findOneAsync({ author: 'Admin' }))

  const comments = useTracker("comments", () => Comments.find().fetchAsync());
  const specificComment = useTracker("specificComment", () => Comments.findOneAsync({ user: 'Bob' }));

  // Uncomment these to increase the loading time to > 60 seconds
  const comments2 = useTracker("comments2", () => Comments.find().fetchAsync());
  const comments3 = useTracker("comments3", () => Comments.find().fetchAsync());
  const comments4 = useTracker("comments4", () => Comments.find().fetchAsync());
  const comments5 = useTracker("comments5", () => Comments.find().fetchAsync());
  const comments6 = useTracker("comments6", () => Comments.find().fetchAsync());
  const comments7 = useTracker("comments7", () => Comments.find().fetchAsync());
  const comments8 = useTracker("comments8", () => Comments.find().fetchAsync());
  const comments9 = useTracker("comments9", () => Comments.find().fetchAsync());
  const comments10 = useTracker("comments10", () => Comments.find().fetchAsync());
  const comments11 = useTracker("comments11", () => Comments.find().fetchAsync());
  const comments12 = useTracker("comments12", () => Comments.find().fetchAsync());
  const comments13 = useTracker("comments13", () => Comments.find().fetchAsync());
  const comments14 = useTracker("comments14", () => Comments.find().fetchAsync());
  const comments15 = useTracker("comments15", () => Comments.find().fetchAsync());
  const comments16 = useTracker("comments16", () => Comments.find().fetchAsync());
  const comments17 = useTracker("comments17", () => Comments.find().fetchAsync());
  const comments18 = useTracker("comments18", () => Comments.find().fetchAsync());
  const comments19 = useTracker("comments19", () => Comments.find().fetchAsync());
  const comments20 = useTracker("comments20", () => Comments.find().fetchAsync());
  const comments21 = useTracker("comments21", () => Comments.find().fetchAsync());
  const comments22 = useTracker("comments22", () => Comments.find().fetchAsync());
  const comments23 = useTracker("comments23", () => Comments.find().fetchAsync());
  const comments24 = useTracker("comments24", () => Comments.find().fetchAsync());
  const comments25 = useTracker("comments25", () => Comments.find().fetchAsync());


  const specificComment1 = useTracker("specificComment1", () => Comments.findOneAsync({ user: 'Bob' }));
  const specificComment2 = useTracker("specificComment2", () => Comments.findOneAsync({ user: 'asd' }));
  const specificComment3 = useTracker("specificComment3", () => Comments.findOneAsync({ user: 'df' }));
  const specificComment4 = useTracker("specificComment4", () => Comments.findOneAsync({ user: 'gf' }));
  const specificComment5 = useTracker("specificComment5", () => Comments.findOneAsync({ user: 'vh' }));
  const specificComment6 = useTracker("specificComment6", () => Comments.findOneAsync({ user: 'Boqwb' }));
  const specificComment7 = useTracker("specificComment7", () => Comments.findOneAsync({ user: 'Botsb' }));
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
