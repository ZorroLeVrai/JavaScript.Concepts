//In JavaScript function are objects with the following properties
function function_properties() {
  function f() { }
  const obj = new f();

  console.log(f.constructor === Function);  //true
  console.log(f.prototype === Object.getPrototypeOf(obj));  //true
  console.log(f.prototype.constructor === f);  //true
  console.log(f.prototype !== Object.getPrototypeOf(f));  //true
}

//equivalent to calling new F();
function newObject(F, ...params) {
  const obj = {};
  Object.setPrototypeOf(obj, F.prototype);
  F.call(obj, ...params);
  return obj;
}

//equivalent to calling Object.create(source)
function createFrom(source) {
  const obj = {};
  return Object.setPrototypeOf(obj, source);
}

//equivalent to using extends in classes
function extend(Child, Parent) {
  //Object.setPrototypeOf(Child.prototype, Parent.prototype); is very slow
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//Displays the content of the object given in parameter
function display(obj, tag = 'obj') {
  console.log(tag, obj);
  if (obj === undefined || obj === null || obj === Object.prototype)
    return;

  display(Object.getPrototypeOf(obj), tag.concat('.proto'));
}

//Displays the type of the object given in parameter
function getType(obj) {
  if (obj === null)
    return 'null';

  const type = typeof (obj);
  if (type != 'object')
    return type;

  //obj.constructor.name doesn't work in some cases (Foo.prototype)
  const proto = Object.getPrototypeOf(obj);
  if (proto)
    return proto.constructor.name;
  else
    return obj.constructor.name.concat('.prototype');
}

function string_are_immutable() {
  let str = 'Hello';
  console.log(str[0]);  //H
  str[0] = 'X';
  console.log(str);     //Hello
}

function symbols_are_unique() {
  console.log(Symbol('1') === Symbol('1'));           //false
  //get the symbols from the global Symbol registry
  console.log(Symbol.for('1') === Symbol.for('1'));   //true
  console.log(Symbol.keyFor(Symbol.for('1')) === '1');//true
}