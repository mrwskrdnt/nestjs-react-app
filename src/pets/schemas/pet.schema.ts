import { Schema } from 'mongoose';
import { Pet } from '../interfaces/pet.interface';
import { getDefaultConfig } from '../../shared/utils/entitiesHelpers';

export const PetSchema = new Schema<Pet>({
  name: String,
  picUrl: String,
}, getDefaultConfig());