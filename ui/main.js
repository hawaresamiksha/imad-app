console.log('Loaded!');
//Move the image

var img= document.getElementById('madi');

function moveRight()
{
    marinLeft=0;
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function ()
{
    var interval=setInterval(moveRight,100);
};
