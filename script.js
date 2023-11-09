


var allproduct =document.querySelectorAll(".container")
var showproducts = document.querySelector("#showproduct")
var showprice=document.querySelector("#showprice")
var totalprice = 0

var finalydiv= document.querySelector("#showtotalprice")


allproduct.forEach(function(item)
{
    item.onclick=function()
    {

    totalprice += +(item.getAttribute("price"))
    showproducts.innerHTML += item.textContent + "    "
    
    if (showproducts.innerHTML!="")
    {
       
        showprice.style.display="block"
        
        
    }

}
    
})




showprice.onclick = function ()
{
    document.getElementById("showtotalprice").innerHTML=(totalprice)
}