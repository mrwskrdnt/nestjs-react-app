import { Document, Model, SchemaOptions } from 'mongoose';

export const defaultTransform = (doc: Model<Document>, ret: Document): void => {
  ret.id = ret._id.toHexString();
  delete ret._id;
  delete ret.__v;
};

export const getDefaultConfig = (): SchemaOptions => ({
  timestamps: true,
  toObject: { transform: defaultTransform },
});
