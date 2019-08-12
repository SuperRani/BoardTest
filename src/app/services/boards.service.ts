import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from '../model/Board';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  
  formData:Board;
  list : Board[];
  
  readonly API_URL:string = 'http://localhost:5000';
  constructor(private http:HttpClient) { }
  postBoard(formData: Board){
    
    return this.http.post(this.API_URL + '/board', formData);
    // return this.http.post(`${this.API_URL}/board`, formData);
   


  }
  
  
  //DB에 있는 List 조회
  refreshList(){
    this.http.get(this.API_URL +'/board')
      .toPromise().then(res => this.list = res as Board[]);
      
  }
  
  
  
  //수정
  putBoard(formData: Board){
    return this.http.put(this.API_URL + '/board/' + formData.bNum, formData);
    
    
  }
  
  //삭제
  deleteBoard(bNum : number){
    return this.http.delete(this.API_URL + '/board/' + bNum );
  }
  
 
  
 
}




