import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../models/note';
import { NotesService } from '../../services/notes.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  // styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @ViewChild('noteForm') noteForm: NgForm;

  reader = new FileReader();
  image;
  
  constructor(
    private notesService: NotesService
    , private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  onClickSubmit(formData: NgForm) {
    if (formData.invalid) { return;}
    console.log('form submitted: ', formData);
    const newNote = new Note(formData.value.authorName, formData.value.description, this.image);
    this.notesService.noteList.push(newNote);
    this.bsModalRef.hide();
  }

  getValidationErrors(){
    const controlsWithErrors = Object.keys(this.noteForm.controls).map(function(key){
      if (this.noteForm.controls[key].invalid) {
        return key;
      }
    }.bind(this));
    return controlsWithErrors;
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
