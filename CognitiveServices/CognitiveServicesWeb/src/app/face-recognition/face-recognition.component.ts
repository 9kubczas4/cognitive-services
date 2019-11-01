import { Component, OnInit } from '@angular/core';
import { FaceApiService } from '../services/face-api.service';
import { FaceRecogntionResponse } from '../interfaces/face-recognition-response';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {
  public file: File;
  public fileUrl: string | ArrayBuffer;

  constructor(private faceApiService: FaceApiService) { }

  ngOnInit() {
  }

  public uploadFile(event: Array<File>) {
    this.file = event[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e && e.target) {
        const target: any = e.target;
        this.fileUrl = target.result;
      }
    };
    reader.readAsDataURL(this.file);
  }

  public process(): void {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.faceApiService.detectFace(formData).then((response: FaceRecogntionResponse) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
