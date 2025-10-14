import { Mongo } from 'meteor/mongo';
import schema from './schema';

const Fruits = new Mongo.Collection('fruits');

if(Meteor.isClient){
    window.Fruits = Fruits;
}

Fruits.attachSchema(schema);

export default Fruits;
