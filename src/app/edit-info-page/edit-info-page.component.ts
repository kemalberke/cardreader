import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CardReaderComponent } from '../card-reader/card-reader.component';

@Component({
  selector: 'app-edit-info-page',
  templateUrl: './edit-info-page.component.html',
  styleUrls: ['./edit-info-page.component.css']
})
export class EditInfoPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public readonly cardReaderService: CardReaderComponent,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
