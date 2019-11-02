using CognitiveServices.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ProjectOxford.Face;
using Microsoft.ProjectOxford.Face.Contract;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CognitiveServices.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class FaceController : ControllerBase
    {
        private IFaceServiceClient _faceServiceClient;

        public FaceController(IFaceServiceClient faceServiceClient)
        {
            this._faceServiceClient = faceServiceClient;
        }

        [HttpPost("detect")]
        public async Task<IEnumerable<DetectedFace>> DetectFace([FromForm(Name = "file")] IFormFile file)
        {
            IEnumerable<DetectedFace> faces = await UploadAndDetectFacesAsync(file);
            return faces;
        }

        private async Task<IEnumerable<DetectedFace>> UploadAndDetectFacesAsync(IFormFile formFile)
        {
            using (var stream = formFile.OpenReadStream()) {
                Face[] faces = await _faceServiceClient.DetectAsync(stream, true, true, new List<FaceAttributeType>() { FaceAttributeType.Age, FaceAttributeType.Emotion, FaceAttributeType.Gender, FaceAttributeType.Hair, FaceAttributeType.HeadPose, FaceAttributeType.Smile, FaceAttributeType.Accessories }); 
                IEnumerable<DetectedFace> result = faces.Select(face => new DetectedFace() { FaceAttributes = face.FaceAttributes, FaceRectangle = face.FaceRectangle });
                return result;
            }
        }
    }
}