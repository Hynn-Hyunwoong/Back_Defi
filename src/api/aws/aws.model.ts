import {S3,GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl} from "@aws-sdk/s3-request-presigner";
import { config } from "../../../config";
import { AwsConfig, S3Params } from "./interface.aws";

const awsConfig : AwsConfig = {
    credentials : {
        accessKeyId : config.awss3.AccessKeyID,
        secretAccessKey : config.awss3.SecretAccessKey
    },
    region : config.awss3.Region
}

const defaultParams : S3Params = {
    Bucket : config.awss3.BucketName,
    ACL : config.awss3.ACL
}

const AWSs3 = new S3(awsConfig);



export const createSignedURL = async (filename : string) => {
    const params = {
        ...defaultParams,
        Key: `images/${filename}`,
        Expires : 60 * 5
    }

    try{
        const command = new GetObjectCommand(params);
        const signedUrl = await getSignedUrl(AWSs3, command, { expiresIn: 60 * 5 });
        return signedUrl;
    }catch(e){
        console.log(`This error occured createSignedURL from aws.model.ts. The Error message is ${e}`)
        throw e;
    }
}