import React from 'react';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data/suspense';
import { Comments, Fruits, Links, Posts, Powerups, Tasks } from '../../both';
import { Tracker } from 'meteor/tracker';

export const Reactivity = () => {

  const [firstComment, comments] = useTracker("comments", (c) => Tracker.withComputation(c, async () => {
    const first = await Comments.findOneAsync({rating: 5})
    const allComments = await Comments.findAll()
    return [first, allComments];
  }));

  return (
    <div>
        <p>Testing reactivity of suspense tracker</p>
        <div>
            <p>id: {firstComment._id}</p>
            <p>user: {firstComment.user}</p>
            <p>message: {firstComment.message}</p>
            <p>rating: {firstComment.rating}</p>
        </div>
        <br></br>
      <ul>{comments?.map(
        comment =>         <div>
            <p>id: {comment._id}</p>
            <p>user: {comment.user}</p>
            <p>message: {comment.message}</p>
            <p>rating: {comment.rating}</p>
        </div>
      )}</ul>
    </div>
  );
};
