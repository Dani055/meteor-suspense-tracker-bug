import { Mongo } from 'meteor/mongo';
import schema from './schema';

const Comments = new Mongo.Collection('comments');

if(Meteor.isClient){
    window.Comments = Comments;
}

Comments.attachSchema(schema);

export default Comments;
