import { Routes } from '@angular/router';


import {UserDetailComponent} from "./pages/user-detail/user-detail.component";
import {NoContentComponent} from "./pages/no-content/no-content.component";
import {UserListComponent} from "./pages/user-list/user-list.component";
import {MessagesComponent} from "./pages/messages/messages.component";

export const ROUTES: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'users/:id',    component: UserDetailComponent },
  { path: 'users',    component: UserListComponent },
  { path: '**',    component: NoContentComponent },
];
