import popmotion, { Role, utils } from 'popmotion';
import build from './inc/build';
import { POSITION } from './inc/types-xyz';

const SCALE = 'scale';

const aframeRole = new Role({

    _map: {
        x: POSITION + 'X',
        y: POSITION + 'Y',
        z: POSITION + 'Z'
    },

    _typeMap: {
        scale: SCALE,
        scaleX: SCALE,
        scaleY: SCALE,
        scaleZ: SCALE,
        color: 'color'
    },

    update: function (state) {
        utils.each(build(state), (key, value) => this.element.setAttribute(key, value));
    }

});

module.exports = aframeRole;