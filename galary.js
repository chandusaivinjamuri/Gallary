var allImgTag=document.images
console.log(allImgTag)
for(i=0;i<=9;i++)
{
    allImgTag[i].src=`.//images/${i}.jpg`
    allImgTag[i].addEventListener("click",function()
    {

        document.getElementById("bigImageContainer").style.display="flex"
    document.getElementById("bigImage").style.backgroundImage=`url(${this.src})`

    })
}

function closeWindow(){
    document.getElementById("bigImageConatiner").style.display="none"
}