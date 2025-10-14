import SimpleSchema from 'meteor/aldeed:simple-schema';
import defaults from '../defaults';

export default new SimpleSchema({
  user: {
    label: 'User',
    type: String,
  },
  message: {
    label: 'Message',
    type: String,
  },
  rating: {
    label: 'Rating',
    type: Number,
  },
  ...defaults
});
