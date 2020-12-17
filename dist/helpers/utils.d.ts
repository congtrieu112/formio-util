import 'reflect-metadata';
export interface Util {
    formatString(value: string, variables: object): string;
}
export declare class UtilImpl implements Util {
    formatString(value: string, variables: object): string;
}
