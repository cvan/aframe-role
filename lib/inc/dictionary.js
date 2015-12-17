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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvZGljdGlvbmFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFNLEtBQUssR0FBRyxXQUZMLFFBQVEsWUFBRSxLQUFLLFlBQUUsUUFBUSxDQUVPLENBQUM7QUFDMUMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7V0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUyxFQUFFLENBQUM7ZUFBSyxVQUFVLE1BQUksSUFBSSxHQUFHLFNBQVMsQ0FBRyxHQUFHO0FBQzdGLGdCQUFJLEVBQUUsSUFBSTtBQUNWLG9CQUFRLEVBQUUsQ0FBQztTQUNkO0tBQUEsQ0FBQztDQUFBLENBQUMsQ0FBQzs7a0JBRVcsVUFBVSIsImZpbGUiOiJkaWN0aW9uYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTiB9IGZyb20gJy4vdHlwZXMteHl6JztcblxuY29uc3QgdHlwZXMgPSBbUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTl07XG5jb25zdCBkaW1lbnNpb25zID0gWydYJywgJ1knLCAnWiddO1xubGV0IGRpY3Rpb25hcnkgPSB7fTtcblxudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gZGltZW5zaW9ucy5mb3JFYWNoKChkaW1lbnNpb24sIGkpID0+IGRpY3Rpb25hcnlbYCR7dHlwZX0ke2RpbWVuc2lvbn1gXSA9IHtcbiAgICBwcm9wOiB0eXBlLFxuICAgIHBvc2l0aW9uOiBpXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpY3Rpb25hcnk7Il19