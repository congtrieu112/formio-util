# Installation

```sh
$ npm install ssh://git@bitbucket.org/vinasource/wam-frontend.git
```

Install a specific branch

```sh
$ npm install ssh://git@bitbucket.org/vinasource/wam-frontend.git#{branch_name}
```

Install a specific commit

```sh
$ npm install ssh://git@bitbucket.org/vinasource/wam-frontend.git#{commit_hash}
```

# Usage

Basic usage

```js
import container, { Util } from "@devblock/formio-helpers";

const util = container.get<Util>('util');
console.log('convert string', util.formatString('home/{routerId}', {routerId:'123456789'}));
```



