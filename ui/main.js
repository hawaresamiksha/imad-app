var button=document.getButtonBuId("counter");
button.onclick=function()
{
    counter=counter+1;
    var span=documetn.getElementById("count");
    span.innerHTML=counter.toString();
};