import myImage from './cloud.jpg'; // Make sure the path is correct

const img = document.createElement('img');
img.src = myImage; // Set the source of the image to the imported image
document.body.appendChild(img); // Append the image to the body of the document
