import { DB_PATH } from '../config.ts'
import { User } from '../models/user.ts'

export const fetchData = async (): Promise<User[]> => {
  let data: Uint8Array;
  try {
    data = await Deno.readFile(DB_PATH)
  } catch (e) {
    console.error(e)
    throw e
  }

  if (!data) {
    return []
  }
  const decoder = new TextDecoder()
  const decodedData = decoder.decode(data)

  return JSON.parse(decodedData)
}

export const persistData = async (data: User[]): Promise<void> => {
  const encoder = new TextEncoder()
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)))
}
