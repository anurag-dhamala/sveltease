
# sveltease

Seamlessly integrate svelte components with any frontend frameworks made with **vue**, **react with vite**, **react with cra**, **webpack** and **next.js** too.

If you update local state in your react/vue, then that update will reflect on svelte component too !!!

## Installation

```bash
npm install -g pnpm
pnpm install sveltease
```

If you do not want to use pnpm that's fine. You can use package manager of your choice: npm, yarn etc.



## Package configuration

Yay! Configuration is automatic.

You can install [sveltease-cli](https://github.com/anurag-dhamala/sveltease-cli). CLI tool made specifically for sveltease. Go check it out!

```bash
npm i -g sveltease-cli
```

**For Vue:**


```bash
sveltease-cli init vue
```

**For React with Vite:**

```bash
sveltease-cli init react-vite
```

**For React with CRA:**

```bash
sveltease-cli init react-cra
```


**For NextJS:**

```bash
sveltease-cli init next
```


**For Webpack:**

```bash
sveltease-cli init webpack webpack.config.js
```

_sveltease-cli init webpack <webpack_config_file_name>_


**And just answers the questions ! It's that simple.**



## Usages

let's take ```Test.svelte``` as example: 

```typescript
<script lang="ts">
    export let firstProp: string = "ra,";
    export let counter: number = 0;

    let localState = 0;
</script>

<div>
  
FirstProp: {firstProp}
<br/>
SecondProp: {counter}
</div>

<br/>

<p>--------Svelte Component-----</p>
<span>{localState}</span>
<button on:click={()=> localState = localState + 1}>
    Update Local State
</button>

```

<br/>

**With React**:

In your react component:

1. Import the svelte component that you want to integrate.
2. Import the sveltease package and pass it three arguments: 

    i. **svelte component** (required)

    ii. **id of the element where you want to insert svelte**. (required and must of unique for every sveltease function call)

    ii. **options parameter**. If your svelte component needs props you can pass through options.

3. Look at the sample implementation below and use it according to your need.

```typescript

import { useEffect, useState } from "react"
import { SvelteaseComponent, sveltease } from "sveltease"
import Test from "./Test.svelte";

export default function Sample() {
    const [count, setCount] = useState(0)

    let sc: SvelteaseComponent;
    
    sveltease(Test, "test-id",{
      props: {
         firstProp: "test string",
         counter: count
      }
    }).then((res: SvelteaseComponent)=>{
      sc = res;
    })

   useEffect(()=> {
    return ()=> {
        sc && sc.cleanup();
        }
    },[])

    const updateReactState=()=> {
        setCount(prevState => prevState + 1)
    }

    return (
        <>
        <div id="test-id"></div>
        <button onClick={updateReactState}>Update</button>
      </>
    )
}
```


**With NextJS**:

In your react component:

1. Import the svelte component that you want to integrate.
2. Import the sveltease package and pass it three arguments: 

    i. **svelte component** (required)

    ii. **id of the element where you want to insert svelte**. (required and must of unique for every sveltease function call)

    ii. **options parameter**. If your svelte component needs props you can pass through options.

3. Look at the sample implementation below and use it according to your need.

```typescript

import { useEffect, useState } from "react"
import { SvelteaseComponent, sveltease } from "sveltease"
import Test from "./Test.svelte";

export default function Sample() {
    const [count, setCount] = useState(0)

    let sc: SvelteaseComponent;

    useEffect(()=> {
       sveltease(Test, "test-id",{
          props: {
             firstProp: "test string",
             counter: count
          }
       }).then((res: SvelteaseComponent)=>{
          sc = res;
       })
       
        return ()=> {
        sc && sc.cleanup();
        }
    },[])

    const updateReactState=()=> {
        setCount(prevState => prevState + 1)
    }

    return (
        <>
        <div id="test-id"></div>
        <button onClick={updateReactState}>Update</button>
      </>
    )
}
```



_Note: For NextJS, you can only use this library inside the client component i.e. components with **use client** at the top. And it is **mandatory** to keep sveltease call inside **useEffect** for next._

_Notice that we are updating the react state, but it will update the svelte component too !!_

**Do not forget to clean up the svelte component on component unmount.**

<br/>

**With Vue**

```typescript

<script setup lang="ts">
import { onUnmounted, onUpdated, ref } from 'vue'
import { SvelteaseComponent, sveltease} from "sveltease"
import Test from "./Test.svelte";


defineProps<{ msg: string }>()

const count = ref(0)
let sc: SvelteaseComponent;

const activateSveltease=()=> {
  sveltease(Test, "vue-svelte-container", {
    props: {
      firstProp: "some test data",
      counter: count.value
    }
    }).then(res=> {
      sc = res
    })
}


activateSveltease(); // you can call it inside onMounted too. It's your choice.


onUpdated(()=> {
  activateSveltease();
})

onUnmounted(()=> {
  sc.cleanup();
})

</script>

<template>
  <div id="vue-svelte-container"></div>
    <div>
    <button type="button" @click="count++">count is {{ count }}</button>
    </div>
</template>
```

In case of vue, when you update the vue states, ```activateSveltease()``` won't be called again, unlike react where we just placed the function call inside the component, and it worked. So, we need to re-trigger it on component update i.e. ```onUpdated()```. 


**Don't worry, sveltease won't create new object and overload the memory. It will just update the props. That is why the id where the svelte element is inserted must be unique for every sveltease function call.**


## sveltease function arguments

Find more details about the arguments here:

| Arguments | Type    | Usages    |
| :---:   | :---: | :---: |
| Svelte Component | ComponentType<any>   | **First Argument**.  Component to insert. Just import your svelte component and pass it here.   |
| HTMLElement id | string   | **Second Argument**. Element of the id inside which the svelte will be injected. **Note**: this id must be unique for every such element.   |
| options | SvelteaseComponentOpts   | **Third Argument** Addtional options to pass. You can only pass props object for this initial release. **props** are the props required for your svelte component.   |


<br/>

In some cases, you may need to add ts-ignore. This project is still in active development and just in v1.

Raise the issues and improve this project.
