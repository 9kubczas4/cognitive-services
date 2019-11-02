import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FaceAttributes } from '../interfaces/face-attributes';
import { HairColorTypes } from '../enums/hair-color-types';
import * as _ from 'lodash';
import { HairColor } from '../interfaces/hair-color';

@Component({
  selector: 'app-face-detail-modal',
  templateUrl: './face-detail-modal.component.html',
  styleUrls: ['./face-detail-modal.component.scss']
})
export class FaceDetailModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<FaceDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FaceAttributes) { }

  public ngOnInit() {
  }

  public getHairColorName(id: number): string {
    return HairColorTypes[id].toString();
  }

  public get hairs(): Array<HairColor> {
    return _.sort();
  }
}
