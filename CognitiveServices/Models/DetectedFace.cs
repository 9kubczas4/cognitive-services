using Microsoft.ProjectOxford.Face.Contract;

namespace CognitiveServices.Models
{
    public class DetectedFace
    {
        public FaceRectangle FaceRectangle { get; set; }

        public FaceAttributes FaceAttributes { get; set; }
    }
}
