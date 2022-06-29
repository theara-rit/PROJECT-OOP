
export enum Gender {
    FEMALE="Female",
    MALE="Male",
}
export class Person {
    constructor(
        protected name: string,
        protected age: number,
        protected gender: Gender,
        protected address: string) { }
}