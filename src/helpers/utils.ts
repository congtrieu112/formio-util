import { injectable } from 'inversify';
import 'reflect-metadata';
export interface Util {
  formatString(value: string, variables: object): string;
}

@injectable()
export class UtilImpl {
  public formatString(value: string, variables: object) {
    if (!value) {
      return '';
    }

    return value.replace(/(\{\w+\})|(:\w+)/g, (match: any) => {
      return variables[match.replace(/\{|\}|:/g, '')] || '';
    });
  }
}
