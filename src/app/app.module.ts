import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { MatTooltipModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';

import { ShippingsComponent } from './components/shippings/shippings.component';
import { ShippingComponent } from './components/shippings/shipping/shipping.component';
import { ShippingService } from './shared/shipping.service';
import { environment } from '../environments/environment';
import { StatusesService } from './shared/statuses.service';
import { ShippingListComponent } from './components/shippings/shipping-list/shipping-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    SettingsComponent,
    AccountComponent,
    ShippingsComponent,
    ShippingComponent,
    ShippingListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    MatSlideToggleModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [
    appRoutingProviders,
    ShippingService,
    StatusesService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ShippingComponent]
})
export class AppModule { }
