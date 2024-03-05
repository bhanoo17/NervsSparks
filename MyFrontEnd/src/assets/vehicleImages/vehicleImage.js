import imageOne from './1.jpg';
import imageTwo from './2.jpg';
import imageThree from './3.jpg';
import imageFour from './4.jpg';
import imageFive from './5.jpg';
import imageSix from './6.jpg';
import imageSeven from './7.jpg';
import imageEight from './8.jpg';
import imageNine from './9.jpg';
import imageTen from './10.jpg';
import imageEleven from './11.jpg';
import imageTwelve from './12.jpg';
import imageThirteen from './13.jpg';
import imageFourteen from './14.jpg';
import imageFifteen from './15.jpg';
import imageSixteen from './16.jpg';
import imageSeventeen from './17.jpg';

const carImages = {
    imageOne: {
        src: imageOne,
        name: 'Car One',
        price: '$10000',
        category: 'Sedan'
    },
    imageTwo: {
        src: imageTwo,
        name: 'Car Two',
        price: '$12000',
        category: 'SUV'
    },
    imageThree: {
        src: imageThree,
        name: 'Car Three',
        price: '$11000',
        category: 'Hatchback'
    },
    imageFour: {
        src: imageFour,
        name: 'Car Four',
        price: '$15000',
        category: 'SUV'
    },
    imageFive: {
        src: imageFive,
        name: 'Car Five',
        price: '$13000',
        category: 'Sedan'
    },
    imageSix: {
        src: imageSix,
        name: 'Car Six',
        price: '$14000',
        category: 'Hatchback'
    },
    imageSeven: {
        src: imageSeven,
        name: 'Car Seven',
        price: '$16000',
        category: 'SUV'
    },
    imageEight: {
        src: imageEight,
        name: 'Car Eight',
        price: '$18000',
        category: 'Sedan'
    },
    imageNine: {
        src: imageNine,
        name: 'Car Nine',
        price: '$17000',
        category: 'Hatchback'
    },
    imageTen: {
        src: imageTen,
        name: 'Car Ten',
        price: '$20000',
        category: 'SUV'
    },
    imageEleven: {
        src: imageEleven,
        name: 'Car Eleven',
        price: '$25000',
        category: 'Sedan'
    },
    imageTwelve: {
        src: imageTwelve,
        name: 'Car Twelve',
        price: '$22000',
        category: 'Hatchback'
    },
    imageThirteen: {
        src: imageThirteen,
        name: 'Car Thirteen',
        price: '$23000',
        category: 'SUV'
    },
    imageFourteen: {
        src: imageFourteen,
        name: 'Car Fourteen',
        price: '$27000',
        category: 'Sedan'
    },
    imageFifteen: {
        src: imageFifteen,
        name: 'Car Fifteen',
        price: '$24000',
        category: 'Hatchback'
    },
    imageSixteen: {
        src: imageSixteen,
        name: 'Car Sixteen',
        price: '$26000',
        category: 'SUV'
    },
    imageSeventeen: {
        src: imageSeventeen,
        name: 'Car Seventeen',
        price: '$28000',
        category: 'Sedan'
    },
};

export default carImages;


// How to Access These Images Info??
// import carImages from './carImages'; // Assuming you've exported your carImages array

// // Accessing name and price of imageTwo
// const imageTwo = carImages[1]; // Assuming imageTwo is at index 1 in the array
// const imageName = imageTwo.name; // Accessing name property
// const imagePrice = imageTwo.price; // Accessing price property

// console.log(imageName); // Output: Car 2
// console.log(imagePrice); // Output: $12000
