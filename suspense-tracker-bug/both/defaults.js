const defaults = {
  createdAt: {
    label: "Created at",
    type: Date,
    optional: true,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();
      }
    },
  },
};

export default defaults;
