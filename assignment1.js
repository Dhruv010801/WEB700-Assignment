/*****************************************************************************************
*  WEB700 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Katariya Dhruvkumar vinodkumar    Student ID: 135914240       Date: 2025-05-09
*****************************************************************************************/

// Step 3 : "Server Arrays"

const serverMethods = ["GET","GET","GET","POST","GET","POST"];
const serverRoutes = ["/","/store","/store-admin","/register","/developer","/login"];
const serverResponses = [

    "Home",
    "Main Storefront",
    "Manage Products",
    "Registered New User",
    "Developed by: Dhruvkumar Katariya : dvkatariya@myseneca.ca ",
    "User Logged In"

];

//step 4 : "Web server simulator function"

function processRequest(method, route) {
    for (let i=0; i < serverRoutes.length; i++) {
        if (serverMethods[i] ===method && serverRoutes[i] === route) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${method} request for ${route}`;
}

//step 5: Manual testing
console.log(processRequest("GET","/"));
console.log(processRequest("POST","/register"));
console.log(processRequest("GET","/developer"));
console.log(processRequest("POST","/"));

//step 6:Random tester

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function testRequests() {
    const testMethods = ["GET", "POST"];
    const testRoutes = [
        "/", "/store", "/store-admin", "/register",
        "/developer", "/login", "/notFound1", "/notFound2"
    ];

    function randomRequest() {
        const randMethod = testMethods[getRandomInt(testMethods.length)];
        const randRoute = testRoutes[getRandomInt(testRoutes.length)];
        console.log(processRequest(randMethod, randRoute));
    }

    setInterval(randomRequest, 1000);
}


// step 7: Invoking the tester

testRequests();