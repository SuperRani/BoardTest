import {Component, HostBinding, OnInit} from '@angular/core';
import {BoardsService} from '../../services/boards.service';
import {Board} from '../../model/Board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  
  pageActual: number = 1;
  
  

  constructor(private boardService: BoardsService) {
  
  }

  ngOnInit() {
    this.boardService.refreshList();
    // console.log("시작 데이터 ", this.boardService.refreshList());
  }
  
  populationForm(bos: Board){
    this.boardService.formData = Object.assign({},bos);
  }
  
  onDelete(bNum: number){
    if(confirm('Are you sure to delete this record?')){
      this.boardService.deleteBoard(bNum).subscribe(res =>{
       
        console.log("Deleted successfully");
      });
      
    }
    this.boardService.refreshList();
    
   
  }
  
 

}


