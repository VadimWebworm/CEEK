const mainWrapper = document.querySelector('.mainWrapper');
const main = document.getElementById('main');
const periodInfoOne = document.getElementById('periodInfoOne');
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
            periodInfoOne.classList.remove('invisible');
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
        periodInfoOne.classList.add('invisible');
    } else if (number == 'two') {
        periodInfoTwo.classList.add('invisible');
    }
    // else (number == 'three'){
    //     periodInfoOne.classList.add('invisible');
    // }
    main.classList.remove('invisible');
    mainWrapper.classList.remove('mainWrapperTrue');
    mainWrapper.classList.remove('invisible');
    elemHiden.classList.remove('hiden');
}

// let boxOne = document.querySelector('.boxOne');
// boxOne.addEventListener('click', (e) => {
//     let photo = 2;
//     for (let i = 1; i <= photo; i++) {
//         let elemPhoto = document.createElement('a');
//         elemPhoto.classList.add('boxPhoto');
//         elemPhoto.setAttribute('data-fancybox', "gallery")
//         elemPhoto.setAttribute('href', `images/one/photo/${i}.jpg`)
//         boxOne.append(elemPhoto)
//     }
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