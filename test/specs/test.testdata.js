import Utility from '../utility.js'
import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import axios from 'axios';
import StudentProblem from '../pageobjects/srtudentproblem.js'
describe('Test data', () => {

    // it("should get data from json file", async () => {
    //     const filePath = path.resolve('data', 'userList.json');
    //     const rawdata = fs.readFileSync(filePath, 'utf-8');
    //     const users = JSON.parse(rawdata);
    //     console.log(users); // This will output the array of users
    // })
    // it("should get data from Xcel file", async () => {
    //     const filePath = path.resolve('data', 'data.xlsx');
    //     const workbook = xlsx.readFile(filePath);
    //     const sheetName = workbook.SheetNames[0];
    //     const sheet = workbook.Sheets[sheetName];

    //     // console.log(sheetName);
    //     // console.log(sheet);
    //     console.log("User Name in b2 == ", sheet['B2'].v)
    //     console.log("User Name in b2 == ", sheet['B3'].v)
    //     console.log("User Name in b2 == ", sheet['C2'].v)
    //     console.log("User Name in b2 == ", sheet['C3'].v)
    // })

    // it('should get data from a free API', async () => {
    //     const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    //     const apiUrl2 = 'https://pokeapi.co/api/v2/pokemon/1';

    //     try {
    //         const response = await axios.get(apiUrl2);
    //         //console.log(response.data);
    //         console.log(response.data.abilities[0].ability.name);
    //        // expect(response.data).toHaveProperty('id', 1);
    //         expect(response.data.abilities[0].ability.name).toHaveProperty('name', overgrowsss);
    //     } catch (error) {
    //         console.error('Error fetching data from API:', error);
    //     }
    // });
    it('should get data from a free API', async () => {
      await browser.url("https://magento.softwaretestingboard.com/customer/account/create/")
      await browser.pause(3000)
      await StudentProblem.fillupPersonalInfo("Noman","Ibrahim")
      await browser.pause(3000)
    });
})