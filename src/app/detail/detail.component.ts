import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from './../player.model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PlayerService]
})
export class DetailComponent implements OnInit {
  playerId: number = null;
  playerToDisplay;
  IsHidden = true;
  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }

  onSelect(){
   this.IsHidden = !this.IsHidden;
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }
}
