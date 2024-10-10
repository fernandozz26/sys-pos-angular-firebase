import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Offer } from '../../../../core/model/offer.model';

@Component({
  selector: 'offert-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './offert-card.component.html',
  styleUrl: './offert-card.component.scss'
})
export class OffertCardComponent {

  @Input() ofertTitle!:string;
  @Input() offertData!:Offer;

  getFinalPrice(price:number, discount:number): number{

    let total: number = 0;
    total = this.offertData.price - (this.offertData.price * (this.offertData.discount / 100))
    return total;
  }

  getOfferType(offer: string): string{
      switch(offer){
        case 'startUp':
          return 'Start-Up';

          case 'pyme':
          return 'PyME';

          case 'empresarial':
          return 'Empresarial';

          default:
            return 'No definido';
      }
  }
}
