import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {PostComponent} from "./post/post.component";
import {MessageListComponent} from "./pages/message-list/message-list.component";

export const ROUTES: Routes = [
  { path: 'messages', component: MessageListComponent },
  { path: '**',    component: NoContentComponent },
];
