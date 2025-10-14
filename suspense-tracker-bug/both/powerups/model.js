import schema from "./schema";

const Powerups = new Mongo.Collection('powerups');

if(Meteor.isClient){
    window.Powerups = Powerups;
}

Powerups.attachSchema(schema);

export default Powerups;