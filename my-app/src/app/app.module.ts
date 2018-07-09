import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DesktopMainViewComponent } from './desktop-main-view/desktop-main-view.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { CompareUserComponent } from './compare-user/compare-user.component';
import { CbfsGraphComponent } from './cbfs-graph/cbfs-graph.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { BarterComponent } from './barter/barter.component';
import { ProxiesComponent } from './proxies/proxies.component';
import { IssuesComponent } from './issues/issues.component';
import { MainComponent } from './main/main.component';
import { SimulationsComponent } from './simulations/simulations.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { ButtonComponent } from './button/button.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { BadgesComponent } from './badges/badges.component';
import { BadgelistComponent } from './badgelist/badgelist.component';
import { BarsComponent } from './bars/bars.component';
import { NeedsComponent } from './needs/needs.component';
import { WantsComponent } from './wants/wants.component';
import { HasComponent } from './has/has.component';
import { WillComponent } from './will/will.component';
import { AdComponent } from './ad/ad.component';
// import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
    DesktopMainViewComponent,
    NewsFeedComponent,
    ProfileComponent,
    CompareUserComponent,
    CbfsGraphComponent,
    InitiativesComponent,
    BarterComponent,
    ProxiesComponent,
    IssuesComponent,
    MainComponent,
    SimulationsComponent,
    OtherProfileComponent,
    ProfileMenuComponent,
    ButtonComponent,
    TreeMapComponent,
    BadgesComponent,
    BadgelistComponent,
    BarsComponent,
    NeedsComponent,
    WantsComponent,
    HasComponent,
    WillComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
  ],
  exports: [
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
