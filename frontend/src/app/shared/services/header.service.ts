import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {
    public headerTitle: BehaviorSubject<string> = new BehaviorSubject<string>(null)

    setHeaderTitle(value: string) {
        this.headerTitle.next(value);
    }
}
