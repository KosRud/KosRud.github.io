# OOP example docs

## Vector2

Represents a 2-dimensional vector, or a point.

### Attributes

x: number
:	Horizontal component.

y: number
:	Vertical component.

## Color

RGB (red, green, blue) color.
Each component is a number within range [0, 1].

### Attributes

r: number
:	Red component.

g: number
:	Green component.

b: number
:	Blue component.

## CollidableRectangle

An object with collision detection. Regardless of the object's real shape, it is represented by a rectangle for the purpose of simplifying collision detection. The rectangles never rotate, only move.

### Attributes

position: [Vector2](#class-vector2)
:	Position of the rectangle on screen.

size: [Vector2](#class-vector2)
:	Size of the rectangle.

### Methods

isColliding([CollidableRectangle](#class-collidablerectangle) other)
:	Returns `true` if the objects collide, otherwise returns `false`.

## Ball extends [CollidableRectangle](#class-collidablerectangle)

The ball. If the ball falls off the screen, the player looses a life. The ball can destroy bricks when it hits them.

### Attributes

speed: [Vector2](#class-vector2)
:	Distance traveled by the ball per second.

!!! note
	The ball does not need a dedicated position attribute, because it inherited one from [CollidableRectangle](#class-collidablerectangle).

### Methods

render( )
:	Draw the ball.

updatePosition( )
:	Updates the ball's position according to its current speed.

	If the ball hits a brick, it bounces (changes `Ball.speed` direction) and destroys the brick.

## Brick extends [CollidableRectangle](#class-collidablerectangle)

A brick. All bricks must be destroyed by the ball to complete the level.

* The bricks do not move.
* Each brick has a different color.
* The bricks are destroyed when hit by the ball.
* Some bricks give a power-up, when destroyed.

### Attributes

Color: [Color](#class-color)
:	Color of the brick

hasPowerup: boolean
:	Set to `true` if the brick gives a power-up when destroyed, otherwise `false`.


### Methods

render( ) : void
:	Draw the brick.

destroy( ) : void
:	Destroy the brick, so that it is no longer visible.