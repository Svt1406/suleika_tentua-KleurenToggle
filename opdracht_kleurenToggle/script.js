const bodyColor = document.querySelector('.body-color');
const bodyText = document.querySelector('.background-text');
const colorHome = document.querySelector('.toggle__home');
const colorLightCoral = document.querySelector('.toggle__lightcoral');
const colorGold = document.querySelector('.toggle__gold');
const colorDarkKhaki = document.querySelector('.toggle__darkkhaki');
const colorAquaMarine = document.querySelector('.toggle__aquamarine');
const colorLightSkyBlue = document.querySelector('.toggle__lightskyblue');
const colorSeaGreen = document.querySelector('.toggle__seagreen');
const colorLavender = document.querySelector('.toggle__lavender');
const defaultText = 'Pick a color, any color!';

const toggleSlide = () => {
    const toggleBtn = document.querySelector('.toggle--btn');
    const toggleList = document.querySelector('.toggle__list');
    
    toggleBtn.addEventListener('mouseover', () => {
        //toggle nav active
        toggleList.classList.add('toggle-active');
    });
    toggleList.addEventListener('mouseleave', () => {
        //toggle nav leave
        toggleList.classList.remove('toggle-active');
    });

        //key eventlisteners 
    document.addEventListener('keydown', function (event) {
        color = '';
        if (event.key === '1') {
        color = 'white';
        }
        else if (event.key === '2') {
        color = 'lightcoral';
        }
        else if (event.key === '3') {
        color = 'gold';
        }
        else if  (event.key === '4') {
        color = 'darkkhaki';
        }
        else if (event.key === '5') {
            color = 'aquamarine';
        }
        else if (event.key === '6') {
        color = 'lightskyblue';
        }
        else if (event.key === '7') {
            color = 'seagreen';
        }
        else if (event.key === '8') {
            color = 'lavender';
        }
        else {
            color = 'white';
            alert('Alleen cijfers 1 tot en met 8 graag :)');
        }
        changeColor(color);
    });
    //set up color changes
    bodyText.innerHTML = defaultText;
    colorHome.style.backgroundColor = 'maroon';
    colorLightCoral.style.backgroundColor = 'lightcoral';
    colorGold.style.backgroundColor = 'gold';
    colorDarkKhaki.style.backgroundColor = 'darkkhaki';
    colorAquaMarine.style.backgroundColor = 'aquamarine';
    colorLightSkyBlue.style.backgroundColor = 'lightskyblue';
    colorSeaGreen.style.backgroundColor = 'seagreen';
    colorLavender.style.backgroundColor = 'lavender';
}

//color changes
const changeColor = (colorname) => {
    var text = '';
    const radioBtn = document.querySelectorAll('input[name="colors"]');
    for (const rb of radioBtn) {
        rb.checked =  (rb.value ===  colorname);
    }
    
    if (colorname === 'white') {
        text = defaultText;
    }
    else {
        text = colorname;
    }
    bodyColor.style.backgroundColor = colorname;
    bodyText.innerHTML = text;
}

const getHome = () => {
    const menu = colorHome.parentElement; 
    colorHome.addEventListener('click', () => {
        changeColor('white');
        menu.classList.remove('toggle-active');
    });
}

const getLightCoral = () => {
    const menu = colorLightCoral.parentElement; 
    colorLightCoral.addEventListener('click', () => {
       changeColor('lightcoral');
       menu.classList.remove('toggle-active');
    });
}

const getGold = () => {
    const menu = colorGold.parentElement; 
    colorGold.addEventListener('click', () => {
        changeColor('gold');
        menu.classList.remove('toggle-active');
    });
}

const getDarkKhaki = () => {
    const menu = colorDarkKhaki.parentElement; 
    colorDarkKhaki.addEventListener('click', () => {
        changeColor('darkkhaki');
        menu.classList.remove('toggle-active');
    });
}

const getAquaMarine = () => {
    const menu = colorAquaMarine.parentElement; 
    colorAquaMarine.addEventListener('click', () =>{
        changeColor('aquamarine');
        menu.classList.remove('toggle-active');
    });
}

const getLightSkyBlue = () => {
    const menu = colorLightSkyBlue.parentElement; 
    colorLightSkyBlue.addEventListener('click', () => {
        changeColor('lightskyblue');
        menu.classList.remove('toggle-active');
    });
}

const getSeaGreen = () => {
    const menu = colorSeaGreen.parentElement; 
    colorSeaGreen.addEventListener('click', () => {
        changeColor('seagreen');
        menu.classList.remove('toggle-active');
    });
}

const getLavender = () => {
    const menu = colorLavender.parentElement; 
    colorLavender.addEventListener('click', () => {
        changeColor('lavender');
        menu.classList.remove('toggle-active');
    });
}

const app = () => {
    toggleSlide();  
    getHome();
    getLightCoral();
    getGold();
    getDarkKhaki();
    getAquaMarine();
    getLightSkyBlue();
    getSeaGreen();
    getLavender();
}

app();

