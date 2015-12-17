'use strict';

exports.__esModule = true;

var _typesXyz = require('./types-xyz');

var types = [_typesXyz.POSITION, _typesXyz.SCALE, _typesXyz.ROTATION];
var dimensions = ['X', 'Y', 'Z'];
var dictionary = {};

types.forEach(function (type) {
    return dimensions.forEach(function (dimension, i) {
        return dictionary['' + type + dimension] = {
            prop: type,
            position: i
        };
    });
});

exports.default = dictionary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sS0FBSyxHQUFHLFdBRkwsUUFBUSxZQUFFLEtBQUssWUFBRSxRQUFRLENBRU8sQ0FBQztBQUMxQyxJQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtXQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLEVBQUUsQ0FBQztlQUFLLFVBQVUsTUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFHLEdBQUc7QUFDN0YsZ0JBQUksRUFBRSxJQUFJO0FBQ1Ysb0JBQVEsRUFBRSxDQUFDO1NBQ2Q7S0FBQSxDQUFDO0NBQUEsQ0FBQyxDQUFDOztrQkFFVyxVQUFVIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQT1NJVElPTiwgU0NBTEUsIFJPVEFUSU9OIH0gZnJvbSAnLi90eXBlcy14eXonO1xuXG5jb25zdCB0eXBlcyA9IFtQT1NJVElPTiwgU0NBTEUsIFJPVEFUSU9OXTtcbmNvbnN0IGRpbWVuc2lvbnMgPSBbJ1gnLCAnWScsICdaJ107XG5sZXQgZGljdGlvbmFyeSA9IHt9O1xuXG50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiBkaW1lbnNpb25zLmZvckVhY2goKGRpbWVuc2lvbiwgaSkgPT4gZGljdGlvbmFyeVtgJHt0eXBlfSR7ZGltZW5zaW9ufWBdID0ge1xuICAgIHByb3A6IHR5cGUsXG4gICAgcG9zaXRpb246IGlcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZGljdGlvbmFyeTsiXX0=