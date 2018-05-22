import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  // styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  note: Note;
  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
