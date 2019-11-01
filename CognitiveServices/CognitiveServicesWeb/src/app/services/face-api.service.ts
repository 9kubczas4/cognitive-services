import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceRecogntionResponse } from './../interfaces/face-recognition-response';

@Injectable()
export class FaceApiService {
    constructor(private httpClient: HttpClient) {

    }

    public detectFace(form: FormData): Promise<FaceRecogntionResponse> {
        return this.httpClient.post<FaceRecogntionResponse>(`/api/face/detect`, form).toPromise();
    }
}
