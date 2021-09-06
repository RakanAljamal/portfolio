const fs = require("fs");
const path = require('path');

const resumeDirectory = path.join(process.cwd(), 'static');

export default async function handler(req, res){
    fs.readFile(`${resumeDirectory}/cv.pdf`, function (err,data){

        res.send(data);
    });
}
