import { Component, OnInit } from '@angular/core';
import { FaceApiService } from '../services/face-api.service';
import { ResizedEvent } from 'angular-resize-event';
import { SpinnerService } from '../services/spinner.service';
import { FaceRectangle } from '../interfaces/face-rectangle';
import { FaceRecogntion } from '../interfaces/face-recognition';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {
  public file: File;
  public fileUrl: string | ArrayBuffer;
  public faceRectangles: Array<FaceRectangle>;

  private originalHeight: number;
  private originalWidth: number;
  private realHeight: number;
  private realWidth: number;
  private scaleXRatio: number;
  private scaleYRatio: number;

  constructor(private faceApiService: FaceApiService, private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  public uploadFile(event: Array<File>) {
    this.file = event[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image;

      if (e && e.target) {
        const target: any = e.target;
        this.fileUrl = target.result;
        img.src = this.fileUrl as string;

        img.onload = () => {
          this.originalHeight = img.height;
          this.originalWidth = img.width;
        };
      }
    };
    reader.readAsDataURL(this.file);
  }

  public process(): void {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.spinnerService.show();
    this.faceApiService.detectFace(formData).then((response: Array<FaceRecogntion>) => {
      console.log(response);
      this.faceRectangles = response.map((r) => r.faceRectangle);
      this.spinnerService.hide();
    })
    .catch((err) => {
      console.log(err);
      this.spinnerService.hide();
    });
  }

  public onResized(event: ResizedEvent) {
    this.realWidth = event.newWidth;
    this.realHeight = event.newHeight;
    this.calculateScaleRatio();
  }

  public calculateTopPx(face: FaceRectangle): string {
    return `${face.top * this.scaleYRatio}px`;
  }

  public calculateLeftPx(face: FaceRectangle): string {
    return `${face.left * this.scaleXRatio}px`;
  }

  public calculateSquareSize(face: FaceRectangle): string {
    return `${face.width * this.scaleXRatio * 1.1}px`;
  }

  public clearSelections(): void {
    this.faceRectangles = [];
  }

  private calculateScaleRatio() {
    this.scaleYRatio = this.realHeight / this.originalHeight;
    this.scaleXRatio = this.realWidth / this.originalWidth;
  }
}
