import SimpleSchema from 'meteor/aldeed:simple-schema';
import defaults from '../defaults';

export default new SimpleSchema({
  title: {
    label: 'Title',
    type: String,
  },
  url: {
    label: 'URL',
    type: String,
  },
  ...defaults
});
