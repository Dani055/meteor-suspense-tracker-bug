import schema from "./schema";

const Tasks = new Mongo.Collection('tasks');

if(Meteor.isClient){
    window.Tasks = Tasks;
}

Tasks.attachSchema(schema);

export default Tasks;