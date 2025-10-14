import schema from "./schema";

const Posts = new Mongo.Collection('posts');

if(Meteor.isClient){
    window.Posts = Posts;
}

Posts.attachSchema(schema);

export default Posts;