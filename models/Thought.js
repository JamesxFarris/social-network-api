const { Schema, model, Types } = require("mongoose");
const { formatDate, dateFormat } = require("../utils/helpers");

// Create reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => formatDate(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create thought schema and inject reaction schema
const thoughtSchema = new Schema({
  thoughtId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],

  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

// Create virtual to count reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
