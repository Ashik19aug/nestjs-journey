import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStartMessage(): string {
    return 'NestJS Journey Start...';
  }
}
