let occupation = "Employee"; 
let access; 

if(occupation === "Employee"){
    access = "Access to: Dietary Services"
}else if(occupation === "Enrolled Member"){
    access = "Access to: Dietary Services and one on one interaction with a dietician"
}else{
    access = "Please enroll or subscrie to the program"
}

console.log(access)