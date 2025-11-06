import {RegularCache} from "./cache/RegularCache";
import { SingletonCache } from "./cache/SingleCache";

console.log("==== Demonstracao sem singleton (RegularCache) =====")
const regularCache1 = new RegularCache();
const regularCache2 = new RegularCache();

regularCache1.set("user", "Joao");

console.log(regularCache1.get("user")); // Joao
console.log(regularCache2.get("user")); // undefined

console.log("=== Demosntracao com Singleton (SingletonCache) ====")
const singleCache1 = SingletonCache.getInstance();
const singleCache2 = SingletonCache.getInstance();

singleCache1.set("user", "Joao");

console.log(singleCache1.get("user")); // Joao
console.log(singleCache2.get("user")); // Joao