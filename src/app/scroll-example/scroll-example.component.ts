import { Component } from '@angular/core';
import { ErrorComponent } from '../error/error.component';
import { LoadingComponent } from '../loading/loading.component';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { ScrollComponentAComponent } from '../scroll-component-a/scroll-component-a.component';
import { ScrollComponentBComponent } from '../scroll-component-b/scroll-component-b.component';
import { ScrollComponentCComponent } from '../scroll-component-c/scroll-component-c.component';

@Component({
    selector: 'app-scroll-example',
    standalone: true,
    imports: [
        ScrollComponentAComponent,
        ScrollComponentBComponent,
        ScrollComponentCComponent,
        LoadingComponent,
        ErrorComponent,
        PlaceholderComponent,
    ],
    templateUrl: './scroll-example.component.html',
    styleUrl: './scroll-example.component.scss',
})
export class ScrollExampleComponent {
    data = [
        'a',
        'b',
        'a',
        'c',
        'a',
        'b',
        'c',
        'a',
        'c',
        'b',
        'a',
        'c',
        'a',
        'b',
        'c',
        'a',
        'b',
        'c',
    ];
}
