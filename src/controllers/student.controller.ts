// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';


export class StudentController {
  constructor() { }
  @get('/getStudent')
  getStudent(): string {
    return 'student details'
  }
}
