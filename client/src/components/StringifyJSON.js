// convert a javascript object to json....
// Why do I want to do this?
// quickly render some data(an object) with out an error
// data is a javascript object
const StringifyJSON = ({data}) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default StringifyJSON;

// objects in javascript Hashes in ruby, Dictonary in java key value pairs
// convert to JSON
// let person = {name:'bob',age:21, favNums:[1,2,3,4]}


// json in javascript (Javascript object notation)

// convert JS object to JSON (you can do this in other langs to with there own methods)
// JSON.stringify(obj)
// JSON.stringify(person) => '{"name":"bob","age":21}'


// TAKE JSON convert to javascript OBJECT
// json param must be valid json
// JSON.parse(json)

// let personString =  '{"name":"bob","age":21}'
// // JSON.parse(personString) => { name: 'bob', age: 21 }

// let personString1 =  '{name:"bob",age:21}'
// JSON.parse(personString1) //SYNTAX ERROR INVALID JSON 
