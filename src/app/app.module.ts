import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { PipeComponent } from './pipe/pipe.component';
import { SuperPipe } from './super.pipe';
import { AndaComponent } from './anda/anda.component';
import { CscService } from './csc.service';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'dash',component:SidenavComponent},
  {path:'table',component:TableComponent},
  {path:'pipe',component:PipeComponent},
  {path:'anda',component:AndaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    DialogComponent,
    TableComponent,
    PipeComponent,
    SuperPipe,
    AndaComponent
    
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule
  
  ],
  entryComponents:[
    DialogComponent
  ],
  providers: [CscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
