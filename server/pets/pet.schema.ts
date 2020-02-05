import { ObjectId } from 'mongodb';
import { Schema } from 'mongoose';
import { Pet } from './pet.schema.interface';
import { getDefaultConfig } from '../common/utils/entitiesHelpers';

export const PetSchema = new Schema<Pet>({
  user: { type: ObjectId, ref: 'users' },
  name: String,
  kind: String,
  birthday: Date,
  picUrl: String,
}, getDefaultConfig());