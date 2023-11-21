    function getRandomImages() {
    const  random = Math.floor(Math.random() * 9 ) + 1;
    return `<img src=".\\images\\${random}.jpg" alt="alt"/>`;
    }
    const image=document.getElementById('imageGet')
    image.innerHTML = getRandomImages()