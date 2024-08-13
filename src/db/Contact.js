import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      default: null,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    contactType: {
      type: String,
      required: true,
      enum: ['work', 'home', 'personal'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contact', contactSchema);
