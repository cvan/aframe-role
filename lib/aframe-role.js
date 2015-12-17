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
        scaleZ: SCALE
    },

    update: function (state) {
        var _this = this;

        _popmotion.utils.each((0, _build2.default)(state), function (key, value) {
            return _this.element.setAttribute(key, value);
        });
    }

});

module.exports = aframeRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZnJhbWUtcm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7QUFFdEIsSUFBTSxVQUFVLEdBQUcsZUFOQyxJQUFJLENBTUk7O0FBRXhCLFFBQUksRUFBRTtBQUNGLFNBQUMsRUFBRSxVQVBGLFFBQVEsR0FPSyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxVQVJGLFFBQVEsR0FRSyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxVQVRGLFFBQVEsR0FTSyxHQUFHO0tBQ3BCOztBQUVELFlBQVEsRUFBRTtBQUNOLGFBQUssRUFBRSxLQUFLO0FBQ1osY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUUsS0FBSztBQUNiLGNBQU0sRUFBRSxLQUFLO0tBQ2hCOztBQUVELFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRTs7O0FBQ3JCLG1CQXRCa0IsS0FBSyxDQXNCakIsSUFBSSxDQUFDLHFCQUFNLEtBQUssQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7bUJBQUssTUFBSyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDbkY7O0NBRUosQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDIiwiZmlsZSI6ImFmcmFtZS1yb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvcG1vdGlvbiwgeyBSb2xlLCB1dGlscyB9IGZyb20gJ3BvcG1vdGlvbic7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9pbmMvYnVpbGQnO1xuaW1wb3J0IHsgUE9TSVRJT04gfSBmcm9tICcuL2luYy90eXBlcy14eXonO1xuXG5jb25zdCBTQ0FMRSA9ICdzY2FsZSc7XG5cbmNvbnN0IGFmcmFtZVJvbGUgPSBuZXcgUm9sZSh7XG5cbiAgICBfbWFwOiB7XG4gICAgICAgIHg6IFBPU0lUSU9OICsgJ1gnLFxuICAgICAgICB5OiBQT1NJVElPTiArICdZJyxcbiAgICAgICAgejogUE9TSVRJT04gKyAnWidcbiAgICB9LFxuXG4gICAgX3R5cGVNYXA6IHtcbiAgICAgICAgc2NhbGU6IFNDQUxFLFxuICAgICAgICBzY2FsZVg6IFNDQUxFLFxuICAgICAgICBzY2FsZVk6IFNDQUxFLFxuICAgICAgICBzY2FsZVo6IFNDQUxFXG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHV0aWxzLmVhY2goYnVpbGQoc3RhdGUpLCAoa2V5LCB2YWx1ZSkgPT4gdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZnJhbWVSb2xlOyJdfQ==