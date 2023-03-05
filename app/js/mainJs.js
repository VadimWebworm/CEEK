const mainWrapper = document.querySelector('.mainWrapper');
const main = document.getElementById('main');
const periodInfoHome = document.getElementById('periodInfoHome');
const periodInfoTwo = document.getElementById('periodInfoTwo');
// const periodInfoThree = document.getElementById('periodInfoThree');

let periodList = document.querySelector('.periodList');
periodList.addEventListener('click', (e) => {
    let target = e.target;
    target.classList.add('hiden');
    mainWrapper.classList.add('mainWrapperTrue');
    setTimeout(() => {
        mainWrapper.classList.add('invisible');
        main.classList.add('invisible');
        if (target.classList.contains('periodOne')) {
            periodInfoHome.classList.remove('invisible');
        } else if (target.classList.contains('periodTwo')) {
            periodInfoTwo.classList.remove('invisible');
        }
        // else{
        //     periodInfoThree.classList.remove('invisible');
        // }
    }, 500)
});

function closePeriod(number) {
    let elemHiden = document.querySelector('.hiden');
    if (number == 'one') {
        periodInfoHome.classList.add('invisible');
    } else if (number == 'two') {
        periodInfoTwo.classList.add('invisible');
    }
    // else (number == 'three'){
    //     periodInfoHome.classList.add('invisible');
    // }
    main.classList.remove('invisible');
    mainWrapper.classList.remove('mainWrapperTrue');
    mainWrapper.classList.remove('invisible');
    elemHiden.classList.remove('hiden');
}

Fancybox.bind('[data-fancybox]', {
    dragToClose: false,

    Toolbar: {
        display: {
            left: ['close'],
            middle: [],
            right: [],
        },
    },

    Images: {
        zoom: false,
    },

    Thumbs: {
        type: 'classic',
    },

    Carousel: {
        transition: false,
        friction: 0,
    },

    on: {
        'Carousel.ready Carousel.change': (fancybox) => {
            fancybox.container.style.setProperty(
                '--bg-image',
                `url("/${fancybox.getSlide().src}")`
            );
        },
    },
});

// let boxOne = document.querySelector('.boxOne');
// boxOne.addEventListener('click', (e) => {
//     let boxOneWrapper = document.querySelector('.boxOneWrapper')
//     boxOneWrapper.style.display = 'block';
//     //    let photo = 2;
//     //     for (let i = 1; i <= photo; i++) {
//     //         let elemPhoto = document.createElement('a');
//     //         elemPhoto.classList.add('boxPhoto');
//     //         elemPhoto.setAttribute('data-fancybox', "gallery")
//     //         elemPhoto.setAttribute('href', `images/one/photo/${i}.jpg`)
//     //         boxOne.append(elemPhoto)
//     //     }
// })
// function createElem() {
//     let photo = 2;
//     for (let i = 1; i <= photo; i++) {
//         let elemPhoto = document.createElement('a');
//         elemPhoto.classList.add('boxPhoto');
//         elemPhoto.setAttribute('data-fancybox', "gallery")
//         elemPhoto.setAttribute('href', `images/one/photo/${i}.jpg`)
//         boxOne.append(elemPhoto)
//     }
// }
// function removeElem(){

// }
// определяем настройки записи
