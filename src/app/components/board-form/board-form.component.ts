import { Component, OnInit } from '@angular/core';
import {BoardsService} from '../../services/boards.service';
import {NgForm,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {

  constructor(private service: BoardsService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form? : NgForm){
    if(form != null) {
      form.resetForm();
    }
    
      this.service.formData = {
        bNum : null,
        bTitle: '',
        bContent: '' ,
        bId: ''
      }
    
  }
  
  onSubmit(form: NgForm){
    //bNum 값이 없으면? Post  ,     값이 있으면? update
    if(form.value.bNum == null) {
      
        this.insertRecord(form);
    }
    else{
        this.updateRecord(form);
      }
    
  }

  insertRecord(form: NgForm){
    this.service.postBoard(form.value).subscribe(res =>{
      console.log('insert  Success');
      this.resetForm(form);
      this.service.refreshList();
      
    });
  }
  
  updateRecord(form:NgForm){
    this.service.putBoard(form.value).subscribe(res =>{
      console.log('update  Success');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
