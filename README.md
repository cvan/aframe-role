# A-Frame plugin for Popmotion

Popmotion Actor role to enable A-Frame animation, physics and input tracking.

## Examples

- [Physics](http://codepen.io/popmotion/pen/pgyoYx?editors=101)
- Some rather obnoxious-yet-demonstrative animation](http://codepen.io/popmotion/pen/GoZpjo?editors=101)

## Use

```html
<a-cube width="3" color="red"></a-cube>
```

```javascript
import ui from 'popmotion';
import aframeRole from 'popmotion-aframe-role';

const cube = new ui.Actor({
    element: document.querySelector('a-cube'),
    as: aframeRole
});
```

`cube` is now a standard Popmotion `Actor`, except with an applied A-Frame Role.

This allows you to run a standard `Tween`, `Simulate` or `Track` action:

```javascript
const moveBackAndForth = new ui.Tween({
    values: {
        x: 5
    },
    duration: 600,
    ease: 'easeInOut',
    yoyo: true
});

cube.start(moveBackAndForth);
```

### Create many A-Frame Actors

As A-Frame elements are DOM elements, you can use `ui.select` to create multiple `Actors` at once. For instance:

```javascript
ui.select('a-cube', {
    as: aframeRole
});
```

Will return an `Iterator` of `Actor` elements (see [full documentation](http://popmotion.io/api/popmotion/select)). You must remember to set `as` on Actor initialisation.

## Supported properties

All numerical properties can be set with Popmotion.

- `position` properties can be set with `x`, `y`, and `z`.
- `scale` and `rotation` properties can be set eg `scaleX` and `rotateY`.
- Dash-case characters are set as camelCase, eg `radius-bottom` becomes `radiusBottom`.

## Advanced: create an A-Frame Actor

If you're creating a lot of A-Frame Actors and don't want to set `as` each time, you could make something like this:

```javascript
import { Actor } from 'popmotion';
import aframeRole from 'popmotion-aframe-role';

class AFrameActor extends Actor {
    constructor(props, ...args) {
        props.as = aframeRole;
        super(props, ...args);
    }
}

const cube = new AFrameActor(document.querySelector('a-cube'));
```
