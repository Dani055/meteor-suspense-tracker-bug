import { Mongo } from 'meteor/mongo';
import schema from './schema';

const Links = new Mongo.Collection('links');

if(Meteor.isClient){
    window.Links = Links;
}

Links.attachSchema(schema);

export default Links;
