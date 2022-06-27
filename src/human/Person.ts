enum Gender {
    FEMALE,
    MALE,
}
class Person {
    constructor(
        protected name: string,
        protected age: number,
        protected gender: Gender,
        protected address: string) { }
}