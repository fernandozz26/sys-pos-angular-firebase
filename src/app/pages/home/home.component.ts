import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { OffertCardComponent } from "./components/offert-card/offert-card.component";
import { Offer } from '../../core/model/offer.interface';
import * as offersJson from '../../core/json/offerts.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, OffertCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  offertTypes:string[] = ['startUp', 'empresarial', 'pyme'];
  ofertData =(offersJson as any).offerts;
    
  


  getDataFromKey(label: string):Offer{
    type offerType = "startUp" | "pyme" | "empresarial";

    return this.getOfferData(label as offerType);
  }

  getOfferData(label: keyof typeof this.ofertData): Offer{
    
      if(this.ofertData.hasOwnProperty(label)){
        return JSON.parse( JSON.stringify(this.ofertData[label]) ) as Offer;
      
    }
    let newOffer: Offer = {details: [{val1:"", val2bold: "", val3: "", val4bold: ""}] , price: 0, discount: 0};
    return newOffer;
  }

  ngOnInit(): void {
  }
}

