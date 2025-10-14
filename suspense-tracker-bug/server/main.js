import { Meteor } from "meteor/meteor";
import { Tasks, Links, Fruits, Powerups, Posts, Comments } from "../both";

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if ((await Links.find().countAsync()) === 0) {
    await Links.insertAsync({
      title: "Do the Tutorial",
      url: "https://react-tutorial.meteor.com/simple-todos/01-creating-app.html",
    });

    await Links.insertAsync({
      title: "Follow the Guide",
      url: "https://guide.meteor.com",
    });

    await Links.insertAsync({
      title: "Read the Docs",
      url: "https://docs.meteor.com",
    });


    await Links.insertAsync({
      title: "Discussions",
      url: "https://forums.meteor.com",
    });

    await Tasks.insertAsync({ description: "This is task 1", importance: 1 });
    await Tasks.insertAsync({ description: "This is task 2", importance: 2 });
    await Tasks.insertAsync({ description: "This is task 3", importance: 3 });
    await Tasks.insertAsync({ description: "This is task 4", importance: 4 });

    await Fruits.insertAsync({ name: "Apple", color: "Red", taste: "Sweet" });
    await Fruits.insertAsync({ name: "Banana", color: "Yellow", taste: "Sweet" });
    await Fruits.insertAsync({ name: "Lemon", color: "Yellow", taste: "Sour" });

    await Powerups.insertAsync({ name: "Speed Boost", effect: "Increases speed by 20%", expires: new Date(Date.now() + 3600 * 1000) });
    await Powerups.insertAsync({ name: "Shield", effect: "Provides a protective barrier", expires: new Date(Date.now() + 7200 * 1000) });
  

    await Posts.insertAsync({ headline: "First Post", content: "This is the content of the first post.", author: "Admin" });
    await Posts.insertAsync({ headline: "Second Post", content: "This is the content of the second post.", author: "User1" });
    await Posts.insertAsync({ headline: "Third Post", content: "This is the content of the third post.", author: "User2" });
    await Posts.insertAsync({ headline: "Fourth Post", content: "This is the content of the fourth post.", author: "User3" });
    await Posts.insertAsync({ headline: "Fifth Post", content: "This is the content of the fifth post.", author: "User4" });

    await Comments.insertAsync({ user: "Alice", message: "Great post!", rating: 5 });
    await Comments.insertAsync({ user: "Bob", message: "Thanks for the info.", rating: 4 });
    await Comments.insertAsync({ user: "Charlie", message: "I found this helpful.", rating: 4 });
    await Comments.insertAsync({ user: "Diana", message: "Looking forward to more content.", rating: 5 });
    await Comments.insertAsync({ user: "Eve", message: "Interesting perspective.", rating: 3 });
    await Comments.insertAsync({ user: "Frank", message: "Could use more details.", rating: 3 });
  }


  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return Links.find();
  });

  Meteor.publish("tasks", function () {
    return Tasks.find();
  });
  Meteor.publish("fruits", function () {
    return Fruits.find();
  });
  Meteor.publish("powerups", function () {
    return Powerups.find();
  });
  Meteor.publish("posts", function () {
    return Posts.find();
  });
  Meteor.publish("comments", function () {
    return Comments.find();
  });
});
