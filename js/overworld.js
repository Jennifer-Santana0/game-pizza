export class Overworld {
    constructor(config) {
        this.element = config.element
        this.canvas = this.element.querySelector('.game-canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    init() {
        
        const image = new Image()
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        }
        image.src = './images/maps/DemoLower.png'


        const x = 6
        const y = 6

        const shadow = new Image()
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,   //corte na horizontal
                0,   //corte na vertical
                32,   //quanto ele vai cortar na horizontal
                32,   //quanto ele vai cortar na vertical
                x * 16 - 8,    //posicao da imagem na horizontal
                y * 16 - 18,    //posicao da imagem na vertical
                32,   //largura
                32    //altura
            )
        }
        shadow.src = './images/characters/shadow.png'

        const hero = new Image()
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0,   //corte na horizontal
                0,   //corte na vertical
                32,   //quanto ele vai cortar na horizontal
                32,   //quanto ele vai cortar na vertical
                x * 16 - 8,    //posicao da imagem na horizontal
                y * 16 - 18,    //posicao da imagem na vertical
                32,   //largura
                32    //altura
            )
        }
        hero.src = './images/characters/people/hero.png'

    }

    
}

