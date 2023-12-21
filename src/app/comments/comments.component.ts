import { Component, Injectable } from '@angular/core';

@Injectable()
class S {
    constructor() {
        console.log('S created');
    }
}

@Component({
    selector: 'app-comments',
    standalone: true,
    imports: [],
    templateUrl: './comments.component.html',
    styleUrl: './comments.component.scss',
    providers: [S],
})
export class CommentsComponent {
    constructor(s: S) {}
}
