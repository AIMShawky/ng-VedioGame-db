import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetails } from '../../models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameDetails: GameDetails;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpService.getGameDetails(id).subscribe((gameDetails: GameDetails) => {
        this.gameDetails = gameDetails;
      }, error => {
        console.error('Error fetching game details:', error);
      });
    }
  }
}