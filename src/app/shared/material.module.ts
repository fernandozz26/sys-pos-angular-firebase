import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from "@angular/material/divider";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatSidenavModule,
      MatButtonModule,
      MatListModule,
      MatCardModule,
      MatDialogModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,    
      MatSelectModule,
      MatRadioModule,
      MatPaginatorModule,
      MatMenuModule,
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatExpansionModule,
      MatChipsModule,
      MatSortModule,
      MatAutocompleteModule,
      MatDividerModule,
      MatBadgeModule
    ],
    exports:[
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatSidenavModule,
      MatTabsModule,
      MatListModule,
      MatCardModule,
      MatDialogModule,
      MatTableModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatPaginatorModule,
      MatMenuModule,
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatSlideToggleModule,
      DragDropModule,
      MatTooltipModule,
      MatExpansionModule,
      MatChipsModule,
      MatSortModule,
      MatAutocompleteModule,
      MatDividerModule,
      MatBadgeModule
    ],
    providers:[{ provide: MAT_DATE_LOCALE, useValue: 'es-MX' }]
  })

  export class MaterialModule { }