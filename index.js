const { Rekognition } = require("aws-sdk");
const fs = require("fs");

const rekognition = new Rekognition({
    region: "us-east-1"
})

rekognition.detectFaces({
    Attributes: ["ALL"],
    Image: {
        Bytes: fs.readFileSync("./Imagem do iOS.jpg")
    }
}, (err, data) => {
    if(err) {
        console.log(err, err.stack)
    } else {
        console.log(data)
    }
}
)