import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {
    public spinnerChange: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    public show(): void {
        this.spinnerChange.next(true);
    }

    public hide(): void {
        this.spinnerChange.next(false);
    }
}
