const { expect } = require("chai")
const axios = require("axios")

    describe("POST /users/login", function () {

    it("Login - Success ", async function () {
    
        const dummyUser = {
            firstName:"dummy",
            lastName:"user1",
            email: `email${Date.now()}@gmail.com`,
            pswrd:"dummy", 
            userRole:"user"
          }
        await axios.post("http://localhost:4001/users/new", dummyUser)
        const resultLogin = await axios.post("http://localhost:4001/users/login", { email: dummyUser.email, pswrd: dummyUser.pswrd })
        expect(typeof resultLogin.data.signedToken).equal("string")
    });

    

    it("Login - No data entered ", async function () {
    try{
        const dummyUser = {
            firstName:"",
            lastName:"user1",
            email: `email${Date.now()}@gmail.com`,
            pswrd:"dummy", 
            userRole:"user"
          }
        const resultLogin = await axios.post("http://localhost:4001/users/login", { email: dummyUser.email, pswrd: dummyUser.pswrd })
        throw new Error("TEST FAILED")
    } catch (error) {
        expect(error?.response.status).equal(400)
    };
});
    })