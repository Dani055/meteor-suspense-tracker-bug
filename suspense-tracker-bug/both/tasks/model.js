import schema from "./schema";

const SyncLogs = new Mongo.Collection('syncLogs');

if(Meteor.isClient){
    window.SyncLogs = SyncLogs;
}

SyncLogs.attachSchema(schema);

export default SyncLogs;