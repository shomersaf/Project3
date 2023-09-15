const { expect } = require("chai")
const axios = require("axios")
const userId = 5;
const vcnId = 5;
const dummyFollowing = {
  "userId":userId, 
  "vcnId":vcnId
}

describe("POST /following/new", function(){
  it("Follow vacation - Success ", async function () {
    const result = await axios.post("http://localhost:4001/following/new", dummyFollowing)
    const { data } = result;
    //console.log(data)
      expect(result.status).equal(200)
      expect(typeof result.data).equal("object")
       const isFillowingArray = Array.isArray(result.data);
       expect(isFillowingArray).equal(true)
});
})

describe("GET /following/by_user/:userId", function () {
  it("Get Following By User ", async function () {
      const result = await axios.get(`http://localhost:4001/following/by_user/${userId}`)
    const { data } = result;
    //console.log(data)
      expect(result.status).equal(200)
      expect(typeof result.data).equal("object")
       const isFillowingArray = Array.isArray(result.data);
       expect(isFillowingArray).equal(true)
  })
})

describe("GET /following/by_vacation/:vcnId", function () {
  it("Get Following By Vacation ", async function () {
      const result = await axios.get(`http://localhost:4001/following/by_vacation/${vcnId}`)
    const { data } = result;
    //console.log("Get Following By Vacation: ", data)
      expect(result.status).equal(200)
      expect(typeof result.data).equal("object")
       const isFillowingArray = Array.isArray(result.data);
       expect(isFillowingArray).equal(true)
  })
})


describe("DELETE /following/delete", function(){
  it("Delete following - Success ", async function () {
    //console.log(JSON.stringify(dummyFollowing))
    const result = await axios.delete("http://localhost:4001/following/delete", {data: dummyFollowing, timeout: 1000 * 5,})
    expect(result.status).equal(200)
});
})