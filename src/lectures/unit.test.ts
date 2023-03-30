
function creatStudent(student :{id : number,name : string , age : number}){
    const{id,name,age} = student;
    console.log(id,name,age)
}
creatStudent({
    id : 1,
    name : "Anh",
    age : 18,
})
enum Name{
    Nguyen,
    Huy,
    Quan,
    Hai,
}
let name = Name.Anh;
console.log(name)
enum Name {
    Anh = 200,
    Quang ,
    Hau,
    Nam,
}
console.log(Name.Quang)




interface Student {
    id : number ,
    name : string,
}
const numberStudent : Array<number> = [1,2,3,3,4,5,6];
const stringStudent : Array<string> = [ "Anh","Yeu","Em"];
const addStudent : Array<Student> = [{
    id : 1 ,
    name :"Anh",
}
,{id : 2 ,name : "Quang"}]
console.log(numberStudent)
console.log(stringStudent)
console.log(addStudent)
interface List<T>{
    id : number,
    name : T,
}
const nameList =["Anh","Ngoc"];
console.log(nameList)
console.log(typeof nameList)
interface CatInfo {
    age: number;
    numberPhone:string;
  }
   
  type CatName = "Nguyen" | "Ngoc" | "Anh";
   
  const cats: Record<CatName, CatInfo> = {
    Nguyen: { age: 19, numberPhone:"0337221906" },
    Ngoc: { age: 5, numberPhone: "Nguyen" },
    Anh: { age: 16, numberPhone: "Anh dddddzzzzzzzzzzzz" },
  };
   
  cats.Nguyen;

