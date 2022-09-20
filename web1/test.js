let star = document.getElementById('stars');
let MOON = document.getElementById('');
let mountains3 = document.getElementById('mountains');
let mountains4 = document.getElementById('mountain');
let river = document.getElementById('rever');
let boat = document.getElementById('boat6');
let nouvil= document.querySelector('.nouvil');
window.onscroll = function()
{
    let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value  * 4 + 'px';
mountains.style.top = value * 2 + 'px';
mountain.style.top = value * 1.5 + 'px';
rever.style.top = value  + 'px';
boat6.style.top = value  + 'px';
boat6.style.left = value * 3 + 'px';
nouvil.style.fontSize = value  + 'px';
if(scrollY >= 67){
    nouvil.style.fontSize = 67 + 'px';
    nouvil.style.position =  'fixed';
    if(scrollY >= 478){
        nouvil.style.display =  'none';
    }else{
        nouvil.style.display =  'block';
    

    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(#134d95,#134d95);'
    
    }
    else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f);'
    }
}

}
