import { Component, OnInit} from '@angular/core';
import { MusicServiceService} from '../service/music-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-results',
  templateUrl: './result.component.html',
})
export class ResultComponent
{

  constructor( private route: ActivatedRoute) { }

  result:number = parseInt(this.route.snapshot.paramMap.get('result'));

}
