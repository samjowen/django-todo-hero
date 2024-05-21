import 'dotenv/config'

function getEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing env var: ${key}`);
    }
    return value;
}

const CONFIG = {
    TODOHERO_API_URL: getEnv('TODOHERO_API_URL'),
};

export default CONFIG;