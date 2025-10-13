import { Mongo } from 'meteor/mongo';

const Links = new Mongo.Collection('links');

if(Meteor.isClient){
    window.Links = Links;
}

export default Links;
