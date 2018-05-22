import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalBackdropComponent, ModalContainerComponent, BsModalService } from 'ngx-bootstrap/modal';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { NoteDetailsComponent } from './Components/note-details/note-details.component';
import { NoteComponent } from './Components/note/note.component';
import { NotesService } from './services/notes.service';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader/component-loader.factory';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoteComponent,
    NoteDetailsComponent,
    AddNoteComponent
    , ModalBackdropComponent
    , ModalContainerComponent
    , AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalBackdropComponent
    , ModalContainerComponent
    , AddNoteComponent
    , NoteDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    , NotesService
    , BsModalService
    , ComponentLoaderFactory
    , PositioningService
  ]
})
export class AppModule {}
