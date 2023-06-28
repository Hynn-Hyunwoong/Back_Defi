const path = require('path');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
})

export const config = {
    development : {
        database : "",
        username : "",
        password : "",
        host : "",
        port : "",
        dialect : "mysql",
        define : {
            frezeTableName : true,
            timestamps : true
        },
        timezone : "+09:00",
        dialectOptions : {
            charset : "utf8mb4",
            dateStrings : true,
            typeCast : true
        },
    },

    production : {
        database : "",
        username : "",
        password : "",
        host : "",
        port : "",
        dialect : "",
        define : {
            frezeTableName : true,
            timestamps : true
        },
        timezone : "+09:00",
        dialectOptions : {
            charset : "utf8mb4",
            dateStrings : true,
            typeCast : true
        },
        },
        awss3: {
            AccessKeyID: process.env.AWS_ACCESS_KEY || 'error' ,
            SecretAccessKey: process.env.AWS_SECRET_KEY || 'error',
            Region: process.env.AWS_REGION || 'error',
            BucketName: process.env.AWS_BUCKET_NAME || 'error',
            ACL: process.env.AWS_ACL || 'error',
          },
          domain : {
            domain : process.env.DOMAIN || 'error',
          },
        server : {
            httpport : process.env.HTTPPORT || 'error',
            httpsport : process.env.HTTPSPORT || 'error',
        },
        coinMarketCap : {
            apiKey : process.env.COINMARKETCAP_API || 'error',
        }
    }
