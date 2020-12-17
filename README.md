# Installation

Install basic

```
$ npm i https://github.com/congtrieu112/formio-util
```

```sh
$ npm install ssh://git@github.com:congtrieu112/formio-util.git
```


# Usage

Basic usage

```js
import container, { Util } from "@devblock/formio-helpers";

const util = container.get<Util>('util');
console.log('convert string', util.formatString('home/{routerId}', {routerId:'123456789'}));
```



