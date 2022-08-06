const request = require("supertest")
const app = require("../app")
const hl = require("../lib/Controller")
//: group tests
describe("Send Messages", () => {

    it("Fetch Message -> Expects Integer as campaign id", () => {

        return request(app).get("/")
        .expect(200).expect('Content-Type', /json/) 
        .then(response => {
            
            expect(response.body).toEqual(expect.objectContaining
                (
                    {
                        cool: expect.any(Boolean),
                        num: expect.any(Number)
                    }
                )
            )
        })

    
    })
    it("Send Message -> Expects Object as new message", () => {

    
    })
    it("Controller:AddNumber(1, 2) to be 3", () => {

        const sum = hl.AddNumber(1, 2)
        expect(sum).toBe(3)
    })
    it("Controller:AddNumber2(1, 2) to be 3", async () => {

        const sum = await hl.AddNumber2(1, 2)
        expect(sum).toBe(3)
    })


})
describe("List Messages", () => {

    it("should run", () => {

    
    })

})
describe("Delete Message", () => {

    it("should run", () => {

    
    })

})
