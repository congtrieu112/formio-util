import 'reflect-metadata';
import { injectable } from 'inversify';
export interface Util {
  formatString(value: string, variables: object): string;
}

@injectable()
export class UtilImpl implements Util {
  public formatString(value: string, variables: object): string {
    if (!value) {
      return '';
    }

    return value.replace(/(\{\w+\})|(:\w+)/g, (match: any) => {
      return variables[match.replace(/\{|\}|:/g, '')] || '';
    });
  }
}
