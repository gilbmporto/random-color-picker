//Define the HTML Elements
const divColorIdentifier = document.getElementById('colorIdentifier');
const generateRandomColorBtn = document.getElementById('generateRandomColor');
const OutterLoadingBar = document.getElementById('theOutsideLoadBar');
const LoadingBar = document.getElementById('theInsideLoadBar');
var loadingTxt = document.getElementById("loadingTxt");
var bodyColor = document.body;

//A promise function to make the HTML content dynamic:
const modificarElementos = (tempo, func) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(func());
        }, tempo)
    }) 
};

var resolve;

//Function to generate a random color and make its code visible to the user
const mayThereBeANewColor = () => {
    divColorIdentifier.innerHTML = '';
    let shadesOfRed = Math.floor(Math.random() * 256);
    let shadesOfGreen = Math.floor(Math.random() * 256);
    let shadesOfBlue = Math.floor(Math.random() * 256);

    modificarElementos(0, () => OutterLoadingBar.style.display = 'block')
    .then((resolve) => {
        return modificarElementos(500, () => {
                LoadingBar.style.width = '100%';
        })
    })
    .then((resolve) => {
        return modificarElementos(300, () => {
            loadingTxt.innerHTML = 'Loading';
    })
})
    .then((resolve) => {
        return modificarElementos(1500, () => 
        {
        bodyColor.style.backgroundColor = `rgb(${shadesOfRed}, ${shadesOfGreen}, ${shadesOfBlue})`;
        let yourNewColor = document.createElement('p');
        yourNewColor.innerHTML = `Your color code now is rgb(${shadesOfRed}, ${shadesOfGreen}, ${shadesOfBlue})`;
        divColorIdentifier.appendChild(yourNewColor);
    })
})
    .then((resolve) => 
        {
        return modificarElementos(300, () => {
                OutterLoadingBar.style.display = 'none';
                LoadingBar.style.width = '0%';
                loadingTxt.innerHTML = '';
        })
    });
};

generateRandomColorBtn.addEventListener('click', mayThereBeANewColor);