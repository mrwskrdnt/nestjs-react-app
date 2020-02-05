import { IErrorPageDto } from './error-page.dto.interface';

export class ErrorPageDto implements IErrorPageDto {
  readonly statusCode!: number;
  readonly message!: string;
}