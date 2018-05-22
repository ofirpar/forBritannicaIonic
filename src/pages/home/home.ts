import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../app/services/notes.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NoteDetailsComponent } from '../../app/Components/note-details/note-details.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bsModalRef: BsModalRef;

  get noteList(){
    return this.notesService.noteList;
  }

  constructor(
    public navCtrl: NavController
    , private notesService: NotesService
    , private modalService: BsModalService
  ) {}

  showNoteDetails(note) {
    console.log('showNoteDetails', note);
    const initialState = {
      note: note
    };
    this.bsModalRef = this.modalService.show(NoteDetailsComponent, {initialState});
    this.bsModalRef.content.note = note;
  }
}
