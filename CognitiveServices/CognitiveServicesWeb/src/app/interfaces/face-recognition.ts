import { FaceRectangle } from './face-rectangle';
import { FaceAttributes } from './face-attributes';

export interface FaceRecogntion {
    faceRectangle: FaceRectangle;
    faceAttributes: FaceAttributes;
}
