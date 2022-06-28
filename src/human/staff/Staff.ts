
export class Staff extends Person{
   private salary: number;
   constructor (protected name: string,protected age: number,protected gender: Gender, protected address: string){
    super(name,age,gender,address);
   }
   
   getSalary(){
      
   }

   setSalary(){

   }

   getCategory(){

   }

}