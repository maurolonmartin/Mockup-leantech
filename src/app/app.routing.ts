import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { ShippingsComponent } from './components/shippings/shippings.component';
import { ShippingListComponent } from './components/shippings/shipping-list/shipping-list.component';
import { ShippingComponent } from './components/shippings/shipping/shipping.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'account', component: AccountComponent},
    {path: 'shippings', component: ShippingsComponent},
    {path: 'shipping-list', component: ShippingListComponent},
    {path: 'shipping', component: ShippingComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);