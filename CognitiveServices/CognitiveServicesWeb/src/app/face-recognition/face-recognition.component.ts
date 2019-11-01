import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {
  public file: File;
  public fileUrl: string | ArrayBuffer;

  constructor(private httpClient: HttpClient) { }

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
    this.httpClient.post(`/api/face/detect`, formData).subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}

export interface FaceDetectResponse {
  width: number;
  height: number;
  left: number;
  top: number;
}
