import dotenv from 'dotenv';
import joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = joi
    .object()
    .keys({
        LINKEDIN_URL: joi
            .string()
            .uri()
            .required(),
        GITHUB_URL: joi
            .string()
            .uri()
            .required()
    })
    .unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    apiSecret: envVars.API_SECRET,
};