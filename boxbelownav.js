var tab_buttns=document.querySelectorAll(".tab_buttns");
var tab_content=document.querySelectorAll(".tab_content");
function showPanel(panelIndex)
{
    tab_content.forEach(function (node)
    {
        node.style.display="none";
    
    });
    tab_content[panelIndex].style.display="block";
}
showPanel(0);
var hidn_content=document.querySelectorAll(".hidn_content");
function showdata(index)
{
    hidn_content.forEach(function(node)
    {
        node.style.display="none";
    })
    hidn_content[index].style.display="block";
}
var closebtn=document.querySelectorAll(".closebtns")
function closeitem(index)
{
    hidn_content[index].style.display="none";
}