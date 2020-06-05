const env: { [index: string]: string } = Deno.env.toObject()

export const APP_HOST = env.APP_HOST || 'localhost'
export const APP_PORT = env.APP_PORT || 8888
export const DB_PATH = env.DB_PATH || './db/users.json'
