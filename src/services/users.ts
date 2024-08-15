import { privateApi, publicApi } from "@/API/apiUrl"

class User {

  static async getUsers() {
    try {
      const { data } = await privateApi.get('/users')
      return data
    } catch (error) {
      throw error
    }
  }

}

export default User