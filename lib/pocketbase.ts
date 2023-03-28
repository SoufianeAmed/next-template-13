import PocketBase from "pocketbase"

export async function GetFullList() {
  const client = new PocketBase("https://ripe-eventide.pockethost.io")

  const result = await client.collection("wallpapers").getList(1, 100)
  return result
}

export const BaseURL = "http://localhost:8090" //https://ripe-eventide.pockethost.io"

export const imageUrl = "http://127.0.0.1:8090/api/files/"
