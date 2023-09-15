const { expect } = require("chai")
const axios = require("axios")

describe("POST /users/new", function(){
  
  it("Create new user - success ", async function () {
    const dummyUser = {
      firstName:"dummy",
      lastName:"user1",
      email: `email${Date.now()}@gmail.com`,
      pswrd:"dummy", 
      userRole:"user"
    }
    const result = await axios.post("http://localhost:4001/users/new", dummyUser)
    expect(result.status).equal(200)
});

it("Create new user - wrong email format", async function () {
  try {
      const dummyEmail = `email${Date.now()}@gmail.com`
      const dummyUser = {
        firstName:"dummy1",
        lastName:"user2",
        email: `email`,
        pswrd:"dummy", 
        userRole:"user"
      }
      const result = await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  }
});

it("Create new user - no data entered", async function () {
  try {
      const dummyEmail = `email${Date.now()}@gmail.com`
      const dummyUser = {
        firstName:"",
        lastName:"user3",
        email: `email${Date.now()}@gmail.com`,
        pswrd:"dummy", 
        userRole:"user"
      }
      const result = await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  }
});

it("Create new user - too short data", async function () {
  try {
      const dummyEmail = `email${Date.now()}@gmail.com`
      const dummyUser = {
        firstName:"a",
        lastName:"user4",
        email: `email${Date.now()}@gmail.com`,
        pswrd:"dummy", 
        userRole:"user"
      }
      const result = await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  }
});


it("Create new user - irrelevant password", async function () {
  try {
      const dummyUser = {
        firstName:"12345",
        lastName:"user5",
        email: `email${Date.now()}@gmail.com`,
        pswrd:"du", 
        userRole:"user"
      }
      const result = await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  }
});

it("Create new user - User already exists ", async function () {
  try {

      const dummyUser = {
        firstName:"dummy1",
        lastName:"user6",
        email: `email${Date.now()}@blabla.com`,
        pswrd:"dummy", 
        userRole:"user"
      }
      const result1 = await axios.post("http://localhost:4001/users/new", dummyUser)
      const result2 = await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  }
});

//----------------------------------------------bred v userakh------------------
it("Create new user - The Password is too long ", async function () {
  try{
      const dummyUser = {
          firstName:"dummy",
          lastName:"user1",
          email: `email${Date.now()}@gmail.com`,
          pswrd:"dummytetertetaegdfhfgjhdjh", 
          userRole:"user"
        }
      await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  };
});

it("Create new user - The Password is too short", async function () {
  try{
      const dummyUser = {
          firstName:"dummy",
          lastName:"user1",
          email: `email${Date.now()}@gmail.com`,
          pswrd:"du", 
          userRole:"user"
        }
      await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  };
});

it("Create new user - Wrong email format", async function () {
  try{
      const dummyUser = {
          firstName:"dummy",
          lastName:"user1",
          email: `email`,
          pswrd:"dummy", 
          userRole:"user"
        }
      await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  };
});

it("Create new user - Wrong data format", async function () {
  try{
      const dummyUser = {
          firstName:0.2,
          lastName:"user1",
          email: `email${Date.now()}@gmail.com`,
          pswrd:"dummy", 
          userRole:"user"
        }
      await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  };
});

it("Create new user - Data is too short", async function () {
  try{
      const dummyUser = {
          firstName:"r",
          lastName:"user1",
          email: `email${Date.now()}@gmail.com`,
          pswrd:"dummy", 
          userRole:"user"
        }
      await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  };
});

it("Create new user - Data is too long", async function () {
  try{
      const dummyUser = {
          firstName:"r123454678999iryyiyiri",
          lastName:"user1",
          email: `email${Date.now()}@gmail.com`,
          pswrd:"dummy", 
          userRole:"user"
        }
      await axios.post("http://localhost:4001/users/new", dummyUser)
      throw new Error("TEST FAILED")
  } catch (error) {
      expect(error?.response.status).equal(400)
  };
});


})