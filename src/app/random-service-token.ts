import { InjectionToken } from '@angular/core';

export const RandomServiceToken = new InjectionToken<string>('RandomServiceToken');

export interface IRandomService {
    getRandomValue(): number;
}
