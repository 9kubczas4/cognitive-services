import { FaceRectangle } from './face-rectangle';
import { FaceAttributes } from './face-attributes';

export interface FaceRecogntionResponse {
    faceRectangle: FaceRectangle;
    faceAttributes: FaceAttributes;
}
