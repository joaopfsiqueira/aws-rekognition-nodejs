const { Rekognition } = require("aws-sdk");
const fs = require("fs");
const path = require("path");

const rekognition = new Rekognition({
    region: "us-east-1"
})


// rekognition.createCollection(
//     {
//         CollectionId: "default" //nome para a collection
//     },
//     function (err, data) {
//         if (err) console.log(err, err.stack);
//         else console.log(data)
//     }
// )

// rekognition.indexFaces({
//     CollectionId: "default",
//     Image: {
//         Bytes: fs.readFileSync(path.resolve(__dirname, "./Imagem do iOS.jpg"))
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fs.writeFileSync(path.resolve(__dirname, "./faceSave.json"), JSON.stringify(data))
//     }
// }
// )

rekognition.detectFaces({
    Attributes: ["DEFAULT"],
    Image: {
        Bytes: fs.readFileSync(path.resolve(__dirname, "./Imagem do iOS.jpg"))
    }
}, (err, data) => {
    if(err) {
        console.log(err, err.stack)
    } else {
        // console.log(JSON.stringify(data.FaceDetails))
        fs.writeFileSync(path.resolve(__dirname, "./result.json"), JSON.stringify(data))
    }
}
)


// rekognition.searchFacesByImage({
//     CollectionId: "default",
//     "Image": {
//         Bytes: fs.readFileSync(path.resolve(__dirname, "./Imagem do iOS.jpg"))
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err, err.stack)
//     } else {
//         fs.writeFileSync(path.resolve(__dirname, "./validaFace.json"), JSON.stringify(data))
//     }
// }
// )
