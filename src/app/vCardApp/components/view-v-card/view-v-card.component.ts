import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VCardService } from '../../services/v-card.service';
import { vCard } from '../../models/vCard.model';

@Component({
  selector: 'app-view-v-card',
  templateUrl: './view-v-card.component.html',
  styleUrls: ['./view-v-card.component.sass']
})
export class ViewVCardComponent implements OnInit {
  vCardSubscription: Subscription | undefined;
  vCard: vCard | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiVCard: VCardService,
  ) { }

  ngOnInit(): void {
    this._getVCard()
  }

  private _getVCard() {
    const id = this.route.snapshot.params['id']
    this.vCardSubscription = this.apiVCard.getVCard$(id).subscribe(
      data => { this.vCard = data },
      error => { console.warn("Error: ", error) }
    )
  }
}
