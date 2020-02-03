import { Schema } from 'mongoose';
import { getDefaultConfig } from '../../shared/utils/entitiesHelpers';

export const UserSchema = new Schema({
  username: String,
  password: String,
  roles: [String],
  pet: { type: Schema.Types.ObjectId, ref: 'pets' }
}, getDefaultConfig());