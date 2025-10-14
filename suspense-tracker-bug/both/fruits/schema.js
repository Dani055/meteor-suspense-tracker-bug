import SimpleSchema from 'meteor/aldeed:simple-schema';
import defaults from '../defaults';

export default new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
  },
  color: {
    label: 'Color',
    type: String,
  },
  taste: {
    label: 'Taste',
    type: String,
  },
  ...defaults
});
