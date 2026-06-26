class Chip8{
    constructor(){
        this.memory = new Uint8Array(4096)
        this.registers = new Uint8Array(16)
        this.pc = 0x200
        this.I = 0
        this.stack = []
        this.sp = 0
        this.delayTimer = 0
        this.soundTimer = 0

    }

}

const chip8 = new Chip8()
console.log(chip8)
