import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;

import { greetA } from './ModuleA.js';
import { greetB } from './ModuleB.js';
import { greetC } from './ModuleC.js';

export function rootGreet() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();
}
