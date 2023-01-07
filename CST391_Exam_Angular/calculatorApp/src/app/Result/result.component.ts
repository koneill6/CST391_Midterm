import { Component, OnInit} from '@angular/core';
import { MusicServiceService} from '../service/music-service.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit
{

  constructor(private service: MusicServiceService) { }

  ngOnInit()
  {

  }

}
