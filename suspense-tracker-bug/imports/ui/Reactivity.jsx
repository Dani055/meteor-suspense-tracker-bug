import React from 'react';
import { useTracker } from 'meteor/react-meteor-data/suspense';
import { Comments } from '../../both';
import { Tracker } from 'meteor/tracker';

export const Reactivity = () => {

  const [firstComment, comments] = useTracker("comments", (c) => Tracker.withComputation(c, async () => {
    // This is reactive
    const first = await Comments.findOneAsync({rating: 5})

    // Function attached to the Comments model that internally calls .find.fetchAsync(). This is NOT reactive
    const allComments = await Comments.findAll();
    // This works, but becomes very annoying to write everywhere
    // const allComments = await Tracker.withComputation(c, () => Comments.findAll())
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
