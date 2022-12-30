import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageURL }) => {
  if (imageURL) {
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            className="center ma faceimg"
            alt=""
            id="inputimage"
            src={imageURL}
          />
          <div
            className="bounding-box"
            style={{
              left: box.leftCol,
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
            }}
          ></div>
        </div>
      </div>
    );
  }
};

export default FaceRecognition;

//https://thumbs.dreamstime.com/b/woman-beautiful-face-young-isolated-white-32948522.jpg
