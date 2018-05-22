import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/note';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddNoteComponent } from '../../Components/add-note/add-note.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  // styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input('note') note: Note;

  // get legend(){
  //   return this.
  // }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  addNote() {
    this.openAddNoteDialog();
  }

  openAddNoteDialog() {
      this.bsModalRef = this.modalService.show(AddNoteComponent, {});
      this.bsModalRef.content.closeBtnName = 'Close';
  }

}
