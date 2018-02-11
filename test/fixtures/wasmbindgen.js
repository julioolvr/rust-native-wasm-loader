import { add } from './mywasmbindgenlib/src/lib.rs';

export const run = async () => {
  return add('Hello, ', 'World!');
};
