/**
 * In order to use import instead of require, just go ahead and add [  "type": "module",] in the package.json
 * 
 */

import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
}
)