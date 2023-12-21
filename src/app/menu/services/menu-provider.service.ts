import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, defer, of, retry, shareReplay } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
    providedIn: 'root',
})
export class MenuProvider {
    public menu$ = defer(() => this.getMenu()).pipe(retry(3), shareReplay(1));

    constructor(private http: HttpClient) {}

    private getMenu(): Observable<Menu> {
        return of({ sections: [] });
    }
}
