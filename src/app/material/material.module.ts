import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatDividerModule,
    Material.MatTooltipModule,
    Material.MatButtonModule,
    Material.MatSidenavModule
  ],
  exports : [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatDividerModule,
    Material.MatTooltipModule,
    Material.MatButtonModule,
    Material.MatSidenavModule
  ]
})
export class MaterialModule { }
