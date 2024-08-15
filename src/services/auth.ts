import { publicApi } from "@/API/apiUrl"

class Auth {

  static async signIn(email: string, password: string) {
    try {
      const { data } = await publicApi.post('/auth/login', { email, password })
      return data
    } catch (error) {
      throw error
    }
  }

}

export default Auth