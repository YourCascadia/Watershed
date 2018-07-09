import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'profile/:id', component: MainComponent },
  { path: 'menu', component: ContextMenuComponent },
  { path: 'test', component: ContextMenuComponent, outlet: "this" },
  { path: 'test', component: ContextMenuComponent, outlet: "that" },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
