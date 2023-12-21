import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsExampleComponent } from './comments-example/comments-example.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PreviewComponent } from './preview/preview.component';
import { ScrollExampleComponent } from './scroll-example/scroll-example.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: 'comments',
        component: CommentsExampleComponent,
    },
    {
        path: 'scroll',
        component: ScrollExampleComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: ':section/:item',
        outlet: 'preview',
        component: PreviewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
