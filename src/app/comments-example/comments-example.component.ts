import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { ErrorComponent } from '../error/error.component';
import { LoadingComponent } from '../loading/loading.component';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

@Component({
    selector: 'app-comments-example',
    standalone: true,
    imports: [
        CommentsComponent,
        LoadingComponent,
        ErrorComponent,
        PlaceholderComponent,
    ],
    templateUrl: './comments-example.component.html',
    styleUrl: './comments-example.component.scss',
})
export class CommentsExampleComponent {}
