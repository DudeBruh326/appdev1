let aboutMe = {
    name: "Alice",
    age: 20,
    course: "BSCS",
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
aboutMe.introduce();
aboutMe.hobby = "Reading";
console.log("Hobby:", aboutMe.hobby);