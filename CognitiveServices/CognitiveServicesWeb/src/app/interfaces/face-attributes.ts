import { EmotionScores } from './emotion-scores';
import { Hair } from './hair';

export interface FaceAttributes {
    age: number;
    gender: string;
    smile: number;
    emotion: EmotionScores;
    hair: Hair;
}
