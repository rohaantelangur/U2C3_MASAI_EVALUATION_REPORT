// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",data)
function data(){
    event.preventDefault()
    var studImage=document.querySelector("#image").value
    var studName=document.querySelector("#name").value
    var studBatch=document.querySelector("#batch").value
    var studDsa=document.querySelector("#dsa").value
    var studCs=document.querySelector("#cs").value
    var studCoding=document.querySelector("#coding").value
    console.log(studImage,studName,studBatch,studDsa,studCs,studCoding)
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    // td1.innerHTML=studImage

    var td2=document.createElement("td")
    td2.innerText=studName

    var td3=document.createElement("td")
    td3.innerText=studBatch

    var td4=document.createElement("td")
    td4.innerText=studDsa

    var td5=document.createElement("td")
    td5.innerText=studCs

    var td6=document.createElement("td")
    td6.innerText=studCoding

    var td7=document.createElement("td")
    var percent=Math.ceil(((Number(studDsa)+Number(studCs)+Number(studCoding))/30)*100)
    // percent.Math.ceil()
    td7.innerText=percent
    console.log(percent)

    var td8=document.createElement("td")
    if(percent>50){
        td8.innerText="Regular"
        td8.style.backgroundColor="Green"
    }else{
        td8.innerText="Async"
        td8.style.backgroundColor="red"
    }
    var img=document.createElement("img")
    img.src=studImage
    td1.append(img)
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)


}