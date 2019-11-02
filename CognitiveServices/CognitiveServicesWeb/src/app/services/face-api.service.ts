import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceRecogntion } from '../interfaces/face-recognition';

@Injectable()
export class FaceApiService {
    constructor(private httpClient: HttpClient) {

    }

    public detectFace(form: FormData): Promise<Array<FaceRecogntion>> {
        return this.httpClient.post<Array<FaceRecogntion>>(`/api/face/detect`, form).toPromise();
    }
}
