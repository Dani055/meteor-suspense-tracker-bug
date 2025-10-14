import SimpleSchema from 'meteor/aldeed:simple-schema';
import defaults from '../defaults';

export default new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
  },
  effect: {
    label: 'Effect',
    type: String,
  },
  expires: {
    label: 'Expires',
    type: Date,
    optional: true,
  },
  ...defaults
});
