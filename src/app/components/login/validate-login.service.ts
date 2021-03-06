
import { Injectable } from '@angular/core';
@Injectable()
export class ValidateLoginService {

  constructor() { }

  /**
   * Used to match the pattern
   * Password should contains like  abc , cde , fgh
   * @param  {string} password : Test string
   * @returns boolean
   */
  isPasswordContainPattern = (password: string): boolean => {

    return this.getArrayOfThreeCharString(password)
      .map((x: string) => this.getCharCodeFromString(x))
      .map((y: number[]) => this.isCharCodeInSequence(y))
      .filter((z: boolean) => z === true)[0];
  }

  /**
   * Validate that password should contains 'aa','cc','zz' letter twice
   * @param  {string} password>: string to be test
   * @returns boolean : Result
   */
  isPasswordContainSameLetterTwice = (password: string): boolean => {
    return this.getArrayOfThreeCharString(password)
      .map((x: string) => this.getCharCodeFromString(x))
      .map((y: number[]) => this.isSameCharCoderRepeatTwoTimes(y))
      .filter((z: boolean) => z === true).length >= 2;
  }

  /**
   * Check if three char code in sequence
   * @param  {number[]} code : Three code char
   * @returns boolean
   */
  private isCharCodeInSequence = (code: number[]): boolean => ((code[0] === (code[1] - 1)) && (code[1] === (code[2] - 1))) ? true : false;
  /**
   * Check if same letter repeated again
   * param  {number[]} code
   * returns boolean
   */
  private isSameCharCoderRepeatTwoTimes = (code: number[]): boolean => ((code[0] === code[1]) || (code[1] === code[2])) ? true : false;
  /**
   * Used to return the Char code array
   * param  {String} str
   * returns number
   */
  private getCharCodeFromString = (str: String): number[] => {
    return str
      .split('')
      .map((x: string, i: number) => str.charCodeAt(i));
  }

  /**
   * Used to return the split the string in [x,y,z]
   * param  {string} pass
   * returns string
   */
  private getArrayOfThreeCharString = (pass: string): string[] => Array.from(pass.slice(2), (_, i) => pass.slice(i, i + 3));
}
