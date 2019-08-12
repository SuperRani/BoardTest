import { Component, OnInit } from '@angular/core';
import {BoardsService} from '../../services/boards.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private service : BoardsService) { }

  ngOnInit() {
  }

}
