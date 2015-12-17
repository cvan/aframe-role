'use strict';

var _popmotion = require('popmotion');

var _popmotion2 = _interopRequireDefault(_popmotion);

var _build = require('./inc/build');

var _build2 = _interopRequireDefault(_build);

var _typesXyz = require('./inc/types-xyz');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCALE = 'scale';

var aframeRole = new _popmotion.Role({

    _map: {
        x: _typesXyz.POSITION + 'X',
        y: _typesXyz.POSITION + 'Y',
        z: _typesXyz.POSITION + 'Z'
    },

    _typeMap: {
        scale: SCALE,
        scaleX: SCALE,
        scaleY: SCALE,
        scaleZ: SCALE,
        color: 'color'
    },

    update: function (state) {
        var _this = this;

        _popmotion.utils.each((0, _build2.default)(state), function (key, value) {
            return _this.element.setAttribute(key, value);
        });
    }

});

module.exports = aframeRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZnJhbWUtcm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7QUFFdEIsSUFBTSxVQUFVLEdBQUcsZUFOQyxJQUFJLENBTUk7O0FBRXhCLFFBQUksRUFBRTtBQUNGLFNBQUMsRUFBRSxVQVBGLFFBQVEsR0FPSyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxVQVJGLFFBQVEsR0FRSyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxVQVRGLFFBQVEsR0FTSyxHQUFHO0tBQ3BCOztBQUVELFlBQVEsRUFBRTtBQUNOLGFBQUssRUFBRSxLQUFLO0FBQ1osY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUUsS0FBSztBQUNiLGNBQU0sRUFBRSxLQUFLO0FBQ2IsYUFBSyxFQUFFLE9BQU87S0FDakI7O0FBRUQsVUFBTSxFQUFFLFVBQVUsS0FBSyxFQUFFOzs7QUFDckIsbUJBdkJrQixLQUFLLENBdUJqQixJQUFJLENBQUMscUJBQU0sS0FBSyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSzttQkFBSyxNQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNuRjs7Q0FFSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMiLCJmaWxlIjoiYWZyYW1lLXJvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9wbW90aW9uLCB7IFJvbGUsIHV0aWxzIH0gZnJvbSAncG9wbW90aW9uJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2luYy9idWlsZCc7XG5pbXBvcnQgeyBQT1NJVElPTiB9IGZyb20gJy4vaW5jL3R5cGVzLXh5eic7XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcblxuY29uc3QgYWZyYW1lUm9sZSA9IG5ldyBSb2xlKHtcblxuICAgIF9tYXA6IHtcbiAgICAgICAgeDogUE9TSVRJT04gKyAnWCcsXG4gICAgICAgIHk6IFBPU0lUSU9OICsgJ1knLFxuICAgICAgICB6OiBQT1NJVElPTiArICdaJ1xuICAgIH0sXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzY2FsZTogU0NBTEUsXG4gICAgICAgIHNjYWxlWDogU0NBTEUsXG4gICAgICAgIHNjYWxlWTogU0NBTEUsXG4gICAgICAgIHNjYWxlWjogU0NBTEUsXG4gICAgICAgIGNvbG9yOiAnY29sb3InXG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHV0aWxzLmVhY2goYnVpbGQoc3RhdGUpLCAoa2V5LCB2YWx1ZSkgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZnJhbWVSb2xlOyJdfQ==