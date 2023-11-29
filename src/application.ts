
/*
import HomeSection1 from "./observer/solution/homeSection";
import HomeSection2 from "./observer/solution/homeSection2";
import Product from "./observer/solution/product";

const product = new Product(1,"iphone",10000,100);

const homeScreen1 = new HomeSection1();
const homeScreen2 = new HomeSection2();

product.register(homeScreen1);
product.register(homeScreen2);

product.stock = 96;
console.log("=====================================")


// Builder
console.log("\n***************** Builder Pattern **********************\n")
import Student from "./builder/Student";
import AdaptorApplication from "./adaptor/application";

const st = Student.getBuilder().setName("Mayur").setAge(20).setMobile(123).build();

console.log(st.name, st.age, st.mobile);
console.log("=====================================")

*/

import AdaptorApplication from "./adaptor/application";

// Adaptor Payment 
const adapatorApp = new AdaptorApplication();
adapatorApp.process();