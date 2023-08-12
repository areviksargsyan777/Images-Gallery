let images = document.querySelector(".images");
let submit = document.querySelector('button')
let apiURL ='https://picsum.photos/200';

for (let i = 0; i < 9; i++) { 
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.url;
        })
        .then(imageURL => {
            images.innerHTML += `
                <div class="imagesfromapi">
                    <img src="${imageURL}" alt="">
                </div>
            `
        })
        .catch(error => {
            console.log(error);
        });
}



submit.addEventListener('click', ()=>{
    window.location.href = 'https://360stories.com/amsterdam/point/van-gogh-museum-3';
})