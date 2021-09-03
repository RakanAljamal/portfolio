require('dotenv').config();
const fs = require("fs");
const path = require('path');
const mustache = require('mustache');
const axios = require('axios');
const htmlDirectory = path.join(process.cwd(), 'static');
const Joi = require('joi');

const templateValidation = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    name: Joi.string(),
    description: Joi.string()
});

const headers = {
    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
}

const gridData = {
    personalizations: [{ to: [{ email: process.env.TO_EMAIL }] }],
    from: { email: process.env.FROM_EMAIL },
    subject: "New Contact Application!"
}


export default async function handler(req, res) {
    try {
        console.log(process.cwd())
        fs.readFile(`${htmlDirectory}/email-template.html`, (error, data) => {
            if (error) {
                return res.status(500).json({ err })
            }
            const view = {
                name: 'Rakan Aljamal',
                email: 'rakanaljamal@gmail.com',
                description: "This is a valid description"
            }

            const validation = templateValidation.validate(view);

            if (validation.error) {
                return res.status(422).json({
                    message: 'Validation error.',
                    error: validation.error,
                });
            }
            const output = mustache.render(data.toString(), view);

            axios.post('https://api.sendgrid.com/v3/mail/send',
                {
                    ...gridData,
                    content: [{
                        type: "text/html",
                        value: output
                    }]
                }
                , {
                    headers
                }).then(_=>{
                return res.status(200).json({
                    send:'Succesfully'
                })
            }).catch(err => {
                return res.status(403).json({ err })
            })
        });

    } catch (err) {
        console.log(err);
        return  res.status(403).json({ err })
    }
}
