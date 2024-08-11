
class ValidateForm {

  private static min: number = 3
  private static readonly regex: RegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  static notIsEmpy(
    fieldValue: string,
    callback: ( message: string ) => void,
    message: string = 'Required field'
  ) {
    if( fieldValue === "" ) {
      callback( message )
      return false
    }
    return true
  }

  static isValidEmail(
    email: string,
    callback: ( message: string ) => void,
    message: string = 'Invalid email'
  ) {
    if( !this.regex.test( email ) ) {
      callback( message )
      return false
    }
    return true
  }

  static isMinLength(
    fieldValue: string,
    min: number = this.min,
    callback: ( message: string ) => void,
    message?: string,
  ) {
    this.setMin( min )
    message = message ? message : `Minimum of ${ this.min } characters required`
    if( fieldValue.length < min ) {
      callback( message! )
      return false
    }
    return true
  }

  // Methods
  private static setMin( min: number ) {
    this.min = min
  }

}

export default ValidateForm