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
        z: _typesXyz.POSITION + 'Z',
        rotateX: _typesXyz.ROTATION + 'X',
        rotateY: _typesXyz.ROTATION + 'Y',
        rotateZ: _typesXyz.ROTATION + 'Z'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZnJhbWUtcm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7QUFFdEIsSUFBTSxVQUFVLEdBQUcsZUFOQyxJQUFJLENBTUk7O0FBRXhCLFFBQUksRUFBRTtBQUNGLFNBQUMsRUFBRSxVQVBGLFFBQVEsR0FPSyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxVQVJGLFFBQVEsR0FRSyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxVQVRGLFFBQVEsR0FTSyxHQUFHO0FBQ2pCLGVBQU8sRUFBRSxVQVZFLFFBQVEsR0FVQyxHQUFHO0FBQ3ZCLGVBQU8sRUFBRSxVQVhFLFFBQVEsR0FXQyxHQUFHO0FBQ3ZCLGVBQU8sRUFBRSxVQVpFLFFBQVEsR0FZQyxHQUFHO0tBQzFCOztBQUVELFlBQVEsRUFBRTtBQUNOLGFBQUssRUFBRSxLQUFLO0FBQ1osY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUUsS0FBSztBQUNiLGNBQU0sRUFBRSxLQUFLO0FBQ2IsYUFBSyxFQUFFLE9BQU87S0FDakI7O0FBRUQsVUFBTSxFQUFFLFVBQVUsS0FBSyxFQUFFOzs7QUFDckIsbUJBMUJrQixLQUFLLENBMEJqQixJQUFJLENBQUMscUJBQU0sS0FBSyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSzttQkFBSyxNQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNuRjs7Q0FFSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMiLCJmaWxlIjoiYWZyYW1lLXJvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9wbW90aW9uLCB7IFJvbGUsIHV0aWxzIH0gZnJvbSAncG9wbW90aW9uJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2luYy9idWlsZCc7XG5pbXBvcnQgeyBQT1NJVElPTiwgUk9UQVRJT04gfSBmcm9tICcuL2luYy90eXBlcy14eXonO1xuXG5jb25zdCBTQ0FMRSA9ICdzY2FsZSc7XG5cbmNvbnN0IGFmcmFtZVJvbGUgPSBuZXcgUm9sZSh7XG5cbiAgICBfbWFwOiB7XG4gICAgICAgIHg6IFBPU0lUSU9OICsgJ1gnLFxuICAgICAgICB5OiBQT1NJVElPTiArICdZJyxcbiAgICAgICAgejogUE9TSVRJT04gKyAnWicsXG4gICAgICAgIHJvdGF0ZVg6IFJPVEFUSU9OICsgJ1gnLFxuICAgICAgICByb3RhdGVZOiBST1RBVElPTiArICdZJyxcbiAgICAgICAgcm90YXRlWjogUk9UQVRJT04gKyAnWidcbiAgICB9LFxuXG4gICAgX3R5cGVNYXA6IHtcbiAgICAgICAgc2NhbGU6IFNDQUxFLFxuICAgICAgICBzY2FsZVg6IFNDQUxFLFxuICAgICAgICBzY2FsZVk6IFNDQUxFLFxuICAgICAgICBzY2FsZVo6IFNDQUxFLFxuICAgICAgICBjb2xvcjogJ2NvbG9yJ1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB1dGlscy5lYWNoKGJ1aWxkKHN0YXRlKSwgKGtleSwgdmFsdWUpID0+IHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpO1xuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYWZyYW1lUm9sZTsiXX0=