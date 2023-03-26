/*
https://docs.nestjs.com/guards#guards
*/

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionGuard implements CanActivate {
  private readonly logger = new Logger(PermissionGuard.name);
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const headers = request.headers;
    const rank: string = request.body.rank;
    if (rank != 'Admin') {
      return false;
    }
    this.logger.log('i was here please check me out ');
    return true;
  }
}
