import SimpleSchema from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
  key: {
    label: 'Key',
    type: String,
  },
  collectionName: {
    label: 'CollectionName',
    type: String,
  },
  action: {
    label: 'Action',
    type: String,
  },
});
