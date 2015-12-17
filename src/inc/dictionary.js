import { POSITION, SCALE, ROTATION } from './types-xyz';

const types = [POSITION, SCALE, ROTATION];
const dimensions = ['X', 'Y', 'Z'];
let dictionary = {};

types.forEach((type) => dimensions.forEach((dimension, i) => dictionary[`${type}${dimension}`] = {
    prop: type,
    position: i
}));

export default dictionary;