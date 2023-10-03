# vite-plugin-copy

Vitejs plguin: copy files and folders

This guy is lazy and has not had time to write the document

## Installation

```bash
# npm
npm install vite-plugin-copy -D
```

## Usage

```javascript
import copy from 'vite-plugin-copy'

export default {
    input: "index.js",
    output: {
        file: "bundler.js",
        format: 'es',
    },
    plugins: [
        copy([
            { src: './data.js', dest: 'dist/' },
        ]),
    ],
};
```
