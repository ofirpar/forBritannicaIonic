import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable()
export class NotesService {
  noteList: Array<Note>;

  constructor() {
    this.init();
   }

  init() {
    this.noteList = new Array<Note>();
  }
}
