# amazon-star-rating

Amazon star rating component. 

---
### Demo

<p align="center">
  <img src="./demo.gif" width="100%" title="Demo">
</p>


---
### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install amazon-star-rating

Using [yarn](https://yarnpkg.com/):

    $ yarn add amazon-star-rating

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// Using ES6 Modules
import {StarRating} from 'amazon-star-rating';
// using CommonJS modules
const StarRating = require('amazon-star-rating').StarRating;
```

---
### Running it

#### Clone the repository.

    $ git clone https://github.com/babangsund/amazon-star-rating

#### Install dependencies 

Using [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/):

    $ npm/yarn install

---
### Details

#### Notable DevDependencies

- [**`Prettier`**](https://prettier.io/): Code formatting.
- [**`Typescript`**](https://github.com/microsoft/typeScript): Static type checker, etc.
- [**`Rollup`**](https://github.com/rollup/rollup): ES module bundler.

#### src/

- **`Modules`**: Available package modules
    - `Star`: A single star component.
    - `StarRating`: Displays the star rating.
    - `useStars`: A simple hook to manage stars state.
- **`Icons`**: Svg icons.
    - `star-filled.svg`: Filled star.
    - `star-outline.svg`: Outlined star.

---
### Credits

amazon-star-rating is built and maintained by **babangsund**.  
[@blog](https://babangsund.com/).  
[@github](https://github.com/babangsund).  
[@twitter](https://twitter.com/babangsund). 
