import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  Meteor.subscribe('links');
  Meteor.subscribe('tasks');
  Meteor.subscribe('fruits');
  Meteor.subscribe('powerups');
  Meteor.subscribe('posts');
  Meteor.subscribe('comments');

  root.render(<App />);
});
