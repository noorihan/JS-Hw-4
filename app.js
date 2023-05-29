function electricBill(mnth,noOflights,pOfLights,utOfLights,noOfFans,pOfFans,utOfFans,noOfAcs,pOfAcs,utOfAcs,pricePerUnit){
    let month = mnth;
    

document.write(`Number of days is: ${month} days`);
document.write("<br>");


//For lights
let light = noOflights;
document.write(`Number of lights is: ${light}`);
document.write("<br>")
let power1 = Number(pOfLights/1000);
document.write(`Power of each light is: ${power1} kwh`);
document.write("<br>")
let time1= utOfLights;
document.write(`Useage hour is: ${time1}hrs`);
document.write("<br>")



let work1 = Number(power1)*Number(time1)*Number(month)*Number(light)
document.write(`Energy consumed by lights is: ${work1}kwh`)
document.write("<br>")
document.write("<br>")

//For fans

let fan = noOfFans;
document.write(`Number of fans is: ${fan}`);
document.write("<br>")
let power2 = Number(pOfFans)/1000;
document.write(`Power of each fans is: ${power2}kwh`);
document.write("<br>")
let time2= utOfFans;
document.write(`Useage hour is: ${time2}hrs`);
document.write("<br>")


let work2 = Number(power2)*Number(time2)*Number(month)*Number(fan)
document.write(`Energy consumed by fans is: ${work2}kwh`)
document.write("<br>")
document.write("<br>")


//for Acs




let ac = noOfAcs;
document.write(`Number of Acs is: ${ac}`);
document.write("<br>")
let power3 = Number(pOfAcs)/1000;
document.write(`Power of each Acs is: ${power3} kwh`);
document.write("<br>")
let time3= utOfAcs;
document.write(`Useage hour is: ${time3}hrs`);
document.write("<br>")



let work3 = Number(power3)*Number(time3)*Number(month)*Number(ac)
document.write(`Energy consumed by Acs is: ${work3}kwh`)
document.write("<br>")
document.write("<br>")


let totalWork = Number(work1)+Number(work2)+Number(work3);
document.write(`Total energy consumed in a month is ${totalWork}kwh`)
document.write("<br>")

let unitPrice = Number(pricePerUnit)
document.write(`price of each unit is: ${unitPrice}`)
document.write("<br>")

let bill = Number(totalWork)*unitPrice
document.write(`Your electric bill for the month is ${bill} taka`)
document.write("<br>")
document.write("<br>")
document.write("<br>")
}
//(month,no Of lights,power Of each Light,useage time Of Lights,noOfFans,pOfFans,utOfFans,noOfAcs,pOfAcs,utOfAcs,pricePerUnit)
electricBill(30,10,5,5,5,50,7,2,100,3,5)
electricBill(30,4,10,7,4,50,10,0,0,0,4)
