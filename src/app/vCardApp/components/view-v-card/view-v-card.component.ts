import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VCardService } from '../../services/v-card.service';
import { vCardModel } from '../../models/vCard.model';

import { VCard } from "ngx-vcard";


@Component({
  selector: 'app-view-v-card',
  templateUrl: './view-v-card.component.html',
  styleUrls: ['./view-v-card.component.sass']
})
export class ViewVCardComponent implements OnInit {
  vCardSubscription: Subscription | undefined;
  vCard!: vCardModel.vCardObject;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiVCard: VCardService,
  ) { }

  ngOnInit(): void {
    this._getVCard()
  }

  public generateVCardOnTheFly = (): VCard => {
    if (this.vCard) {
      // TODO: Generate the VCard before Download
      return {
        name: {
          firstNames: this.removeAccents(this.vCard.nombre),
          lastNames: `${this.removeAccents(this.vCard.primer_apellido)} ${this.removeAccents(this.vCard.segundo_apellido)}`
        },
        organization: "PACISA",
        telephone: [this.vCard.movil],
        email: [this.vCard.correo],
        title: this.vCard.puesto,
        url: 'https://pacisa.es'
      };
    } else {
      return {}
    }
  };

  private _getVCard() {
    const id = this.route.snapshot.params['id']
    this.vCardSubscription = this.apiVCard.getVCard$(id).subscribe(
      data => this.vCard = data,
      error => console.warn("Error: ", error)
    )
  }

  private removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
}
