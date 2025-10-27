import { Mongo } from 'meteor/mongo';
import schema from './schema';

const Comments = new Mongo.Collection('comments');

if(Meteor.isClient){
    window.Comments = Comments;
}

Comments.attachSchema(schema);

Comments.findAll = async () => {
    const comments = await Comments.find().fetchAsync()
    return comments;
}

export default Comments;
