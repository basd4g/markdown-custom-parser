import parse from './parse'
import fs from 'fs/promises'

fs.readFile('input.md')
  .then((a: any) => parse(a))
  .then( (hay:string) => console.log(hay) );

