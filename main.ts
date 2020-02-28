controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprite_list) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 120))
    }
})
let sprite_list: Sprite[] = []
sprite_list = [sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 d d 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 d d d d d b d b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 d d d d d d d b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 d d d d d d d b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 d d d d d d d b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 d d d d d d b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b d d d 3 d d d b d . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b d d d d d d d d . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b d b d d d d d d d . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b d d d d d d b 
. . . . . . . 4 3 e e e 5 5 8 8 5 5 5 5 5 d 4 e e b d d d d d d 
. . . . . . b 4 e e e e e d d d 5 5 5 e e e d 4 e e d d d d d d 
. . . . . . b e e e e e e e d 5 5 5 e e e e e d b 4 e d d d d d 
. . . . . b d e e e e e e e 5 5 5 e e e e e e e d d 4 d d d d d 
. . . . . b 5 2 e e e e e 3 5 5 5 e e e e e e e d d d 4 e d d d 
. . . . b d 5 5 2 e e e 3 5 5 5 5 2 e e e e e 3 5 5 5 4 4 d d d 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d d d d 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 d d 
. . . 4 8 8 5 e e e 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 d d d 
. . b 4 5 5 e e e e e 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d d d d . 
. . 4 d 5 e e e e e e e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 d d d . . 
. b d d 5 e e e e e e e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 d d . . . . 
. b 5 5 d 2 e e e e e e 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 2 e e e e d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 2 2 2 a a . . 
. . . b d d d 2 2 2 2 2 2 a a . 
. . b d d 2 2 2 2 2 2 2 2 2 a . 
. b 2 d 2 2 2 2 2 b 2 2 2 2 a b 
. b 2 2 2 2 2 a a 2 2 2 2 2 a b 
b 2 2 2 2 2 a a 2 2 2 2 d a 4 b 
b 2 2 2 2 b a 2 2 2 2 2 d a 4 b 
b 2 2 2 2 2 2 2 2 2 2 d a 4 4 e 
a 2 2 2 2 2 2 2 2 2 d a 4 4 4 e 
a 2 2 2 2 2 2 2 d d a 4 4 4 e . 
a a 2 2 2 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c a a a a a a a a a a 6 6 6 . . . . . . . . 
. . . . . . c c a a a a a a a a a b b a a a a a 6 6 . . . . . . 
. . . . . c b a a a a b b a a a a b 5 b a a a a a a b . . . . . 
. . . . e b a a a a b 5 b a a a a a b a a a a a a a a b . . . . 
. . . e b b a a a a a b a a a a a a a a a a b a a a a a 6 . . . 
. . e b 6 b b a a a a a a a a a b b a a a b 5 b a a a a a 6 . . 
. . e 6 b b 5 b a a a a a a a a b 5 b a a a b a a b b a a e . . 
. e 6 6 b a b a a a a a a a a a a b a a a a a a a b 5 b a a e . 
. e 6 b b a a a a a a a a a a a a a a a a a a a a a b b a a e . 
e b 6 6 b a a a a a b b a a a a a a a a a a a a a a a a a a b e 
e b 6 6 b b a a a b 5 b a a a a a a a a b b a a a a a a a a b e 
f b 6 6 6 b a a a b b a a a a a a a a a b 5 b a a a a a a a b f 
f c b 6 6 6 b a a a a a a a a a a a a a a b b a a a a a a b c f 
. f b b 6 6 6 6 b a a a a a a a a a a a a a a a a a a a a b f . 
. e f b b 6 6 6 6 6 b b a a a a a a a a a a a a a a a a b f e . 
. 8 6 f c b b 6 6 6 6 6 b b b a a a a a a a a a a a b c c 6 8 8 
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b a 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b a a a e e . 
. . f f 6 b b a a a a a a a a a a a a a a a a a a a a a e e . . 
. . . . f f b b b b a a a a a a a a a a a a a a a a e e . . . . 
. . . . . . f f e b b b b b b a a a a a a a a e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . . b b b 9 9 9 9 9 9 b b . . . . . . . . . . . . . . 
. . . . . 2 2 9 9 9 9 9 d d d 9 9 9 b . . . . . . . . . . . . . 
. . . . 2 9 9 9 9 9 9 9 9 d d d d 9 9 e . . . . . . . . . . . . 
. . . 2 9 9 9 9 9 9 9 9 9 9 9 d d d 9 b e . . . . . . . . . . . 
. . 2 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 b e . . . . . . . . . . 
. 2 b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 b e . . . . . . . . . . 
. 2 b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b e . . . . . . . . . 
2 b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b e . . . . . . . . . 
2 b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b e . . . . . . . . . 
2 b b 9 b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b e . . . . . . . . 
2 b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b e . . . . . . . . 
2 b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e . . . . . . . . 
2 b b b 9 9 9 b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 e . . . . . . . . 
2 2 b b b 9 9 9 b b 9 b b 9 9 9 9 9 9 9 9 9 b e . . . . . . . . 
. 2 b b b b b 9 9 b b b b 9 9 9 9 9 9 9 9 b b e . . . . . . . . 
. 2 2 b b b b b b b b 9 9 b b b 9 9 9 9 9 9 b b e . . . . . . . 
. . e e e b b b b b b b 9 9 b b b 9 9 9 9 9 9 b e . . . . . . . 
. . . e e e e e b b b b b b b b 9 9 b 9 9 9 9 b e . . . . . . . 
. . . . . e e e e e e 2 2 2 b b 9 9 b b b 9 b b e . . . . . . . 
. . . . . . . e e e e e 2 2 2 b b 9 9 b b b b e e . . . . . . . 
. . . . . . . . . . . . e 2 2 2 b b b b b b b e c . . . . . . . 
. . . . . . . . . . . . . . e e 2 b b b b e e b d b . . . . . . 
. . . . . . . . . . . . . . . . . e e e e e c d d d b . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c d 1 1 b b b b . 
. . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 1 d b b 
. . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 d d 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c d 1 d b c . 
. . . . . . . . . . . . . . . . . . . . . . . . . c b 1 1 c . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . 3 3 3 3 b b . . b b 3 3 3 3 3 . . . . . 
. . . . . . . . 3 b b 3 1 1 1 1 d 3 b 3 1 1 d 1 1 1 d 3 3 . . . 
. . . . . . . 3 b d d 1 1 1 1 1 d b d 1 1 d 1 1 1 1 1 1 1 3 . . 
. . . . . . . b d d d d 1 1 1 1 b d 1 1 d 1 1 1 a a 1 1 1 1 3 . 
. . . . . . 3 d a a a d d 1 1 1 b 1 1 d 1 1 1 a a 3 3 d 1 1 d 3 
. . . . . . 3 d a a a a a d d 1 d 1 1 d 1 1 1 a 1 1 a 3 3 1 1 3 
. . . . b b 3 d a a a a a a d d 1 3 d d 1 1 1 a 1 a a 3 b 3 1 b 
. . . b 3 d 3 d d a a a a a a d d 1 3 d d 1 1 a 1 a a a b b d b 
. . . 3 d d d 3 1 d a a a a a a d d 1 3 3 a a a a a a a b . b . 
. . 3 a a a a a d 1 d d d a a a a d d 1 1 a a a a a a 3 3 . . . 
. . 3 a a a a a a d 1 1 1 d d a a a d d 1 1 1 1 a a 3 3 1 3 . . 
. . b d d d a a a a d d d 1 1 d d a a a a 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 d d d a a a d d d d a a d d a a d d d 1 1 1 1 d d b . 
. . 3 1 1 1 1 d d a a a d d d d a a d d a a a d d d d d d d b . 
. . . b d 1 1 1 1 d a a a 3 d d d a a d d a a a a a a a d 3 b . 
. . . 4 d d 1 1 1 1 d a a a 3 d d d a a d d d a a a d 3 3 3 b . 
. . 4 d b d d d d 1 1 a a a a 3 3 d d d d d d d d d d d d b . . 
. 4 d d b d d d d d 1 1 d a a a d 3 3 d d d d d d d d d 3 b . . 
. 4 d d d b 1 1 d d d 1 1 a a a a a d 3 3 3 d d d d 3 b b . . . 
. 4 d d 5 5 b 1 1 1 d 1 1 a a a a a a a d 3 3 3 3 b b b . . . . 
. 4 4 5 5 5 5 b 1 1 1 d 1 1 a a a a a a a a a a a a b . . . . . 
. 4 4 5 5 5 5 5 b d 1 d 3 1 1 a a a a a a a a a a a 3 . . . . . 
. 4 5 4 5 5 5 5 5 b b 1 d 3 1 1 1 a a a a a a a 1 1 3 . . . . . 
. 4 5 5 4 5 5 5 5 5 5 b 3 3 3 d 1 1 1 1 1 1 1 1 1 3 . . . . . . 
4 5 5 5 5 4 5 5 5 5 5 5 b b b 3 3 d 1 1 1 1 1 d 3 3 . . . . . . 
4 d 5 5 5 5 4 5 5 5 5 5 5 5 d b b b 3 d 1 1 d 3 3 . . . . . . . 
4 d d 5 5 5 5 4 5 5 5 5 5 d d d d d 4 3 3 3 3 . . . . . . . . . 
4 5 d d 5 5 5 5 4 4 d d d d d d d 4 . . . . . . . . . . . . . . 
. 4 5 d d 5 5 5 5 d 4 4 d d d d 4 . . . . . . . . . . . . . . . 
. . 4 5 d d 5 5 d d d d 4 4 4 4 . . . . . . . . . . . . . . . . 
. . . 4 5 d d 5 5 4 4 4 . . . . . . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)]
