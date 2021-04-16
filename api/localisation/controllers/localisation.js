'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    Add :async (ctx)=>{ 
    const body = ctx.request.body;
    const ip = ctx.header.origin;

      await strapi.query("localisation").create({
         hacker:body.hacker,
         infos : {
             position: JSON.parse(body.position),
             ip:ip 
            }
        });


    }

};
