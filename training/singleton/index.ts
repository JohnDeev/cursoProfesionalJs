import Singleton from './Singleton';

const a = Singleton.geInstance();
const b = Singleton.geInstance();

console.log(`A es igual a B?`, a === b);