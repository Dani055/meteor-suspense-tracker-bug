import SimpleSchema from 'meteor/aldeed:simple-schema';
import defaults from '../defaults';

export default new SimpleSchema({
  headline: {
    label: 'Headline',
    type: String,
  },
  content: {
    label: 'Content',
    type: String,
  },
  author: {
    label: 'Author',
    type: String,
  },
  ...defaults
});
