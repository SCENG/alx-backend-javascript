export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

export interface Director extends Teacher {
  numberOfReports: number;
}

export type PrintTeacherFunction = (firstName: string, lastName: string) => string;

export const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class Student implements StudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

export function createStudent(
  ctor: StudentClassConstructor,
  firstName: string,
  lastName: string
): StudentClass {
  return new ctor(firstName, lastName);
}
