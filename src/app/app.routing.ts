import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { CreateComponent } from './components/create/create.component';
import { ShippingsComponent } from './components/shippings/shippings.component';
import { ShippingListComponent } from './components/shippings/shipping-list/shipping-list.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'account', component: AccountComponent},
    {path: 'create', component: CreateComponent},
    {path: 'shippings', component: ShippingsComponent},
    {path: 'shipping-list', component: ShippingListComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);