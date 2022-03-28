const BtnBotones = document.querySelector('#BtnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

(() => {
    BtnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);
})();
(() => {
    const color = localStorage.getItem('Color');
    if (color == null) {
        fondo.className = "bg-light";
    }
    else {
        fondo.className = color;
    }
})();

function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML = `<button class="btn btn-primary">prymary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>
    <button class="btn btn-light">light</button>
    <button class="btn btn-info">info</button>`;
}

function delegacion(e) {
    e.preventDefault()
    //console.log(e.target.classList[1])
    const colorBotones = e.target.classList[1];

    switch (colorBotones) {
        case ('btn-primary'):
            fondo.className = "bg-primary"
            localStorage.setItem('Color', "bg-primary")
            break;
        case ('btn-secondary'):
            fondo.className = "bg-secondary"
            localStorage.setItem('Color', "bg-secondary")
            break;
        case ('btn-danger'):
            fondo.className = "bg-danger"
            localStorage.setItem('Color', "bg-danger")
            break;
        case ('btn-success'):
            fondo.className = "bg-success"
            localStorage.setItem('Color', "bg-success")
            break;
        case ('btn-warning'):
            fondo.className = "bg-warning"
            localStorage.setItem('Color', "bg-warning")
            break;
        case ('btn-info'):
            fondo.className = "bg-info"
            localStorage.setItem('Color', "bg-info")
            break;
        case ('btn-light'):
            fondo.className = "bg-light"
            localStorage.setItem('Color', "bg-light")
            break;

    }
}