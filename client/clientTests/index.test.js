/**
 * @jest-environment jsdom
 */

const fetchMock = require("jest-fetch-mock");
const fs = require('fs');
const path = require('path');

fetchMock.enableMocks();

//const { createBeerElement, annoyingPopUp, incrementCountDiv, collect } = require("../scripts/functions");

describe("pageLayout", () => {

    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    test("Has an h1 element", () => {

        let title = document.querySelector("h1");

        expect(title).toBeTruthy();
    })


})

/* describe("createBeerElement", () => {
 
     test("Returns a list element", () => {
 
         const data = {name: "a beer", tagline: "beer-ish"}
     
         result = createBeerElement(data);
     
         expect(result).toBeInstanceOf(HTMLLIElement);
     })
 
     test("Throws an error when passed no data", () => {
         expect(createBeerElement).toThrowError("No data provided");
     })
 })
 
 describe("annoyingPopUp", () => {
 
     let mockAlert;
 
     beforeEach(() => {
         mockAlert = jest.spyOn(window, "alert").mockImplementation();
     })
 
     afterEach(() => {
         mockAlert.mockRestore(); 
     })
 
     test("Calls console.log", () => {
 
         annoyingPopUp();
 
         expect(mockAlert).toHaveBeenCalled();
     })
 
     test("Logs the correct string", () => {
 
         annoyingPopUp();
 
         expect(mockAlert.mock.calls).toContainEqual(["Super annoying"]);
     })
 
 })
 
 describe("incrementCountDiv", () => {
 
     let mockQuery;
 
     beforeEach(() => {
         mockQuery = jest.spyOn(document, "querySelector").mockImplementation((s) => {
             return {textContent: "0" }
         });
     })
 
     afterEach(() => {
         mockQuery.mockRestore();
     })
 
     test("Calls document.querySelector", () => {
         
         incrementCountDiv();
         expect(mockQuery).toHaveBeenCalled();
 
     })
 
 })
 
 describe("collect", () => {
 
     afterEach(() => {
         fetch.resetMocks();
     })
 
     test("Makes a fetch request", () => {
 
         fetch.mockResponseOnce(JSON.stringify([]));
 
         collect();
 
         expect(fetch).toHaveBeenCalledTimes(1);
     })
 
 })*/
