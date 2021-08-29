function showcordinates(event)
{
    var x = event.clientX;
    var y = event.clientY;

    document.getElementById("img01").style.transform="translateX("+-x/20+"px) translateY("+-y/20+"px)";
    document.getElementById("img01").style.transition="0.1s";
}