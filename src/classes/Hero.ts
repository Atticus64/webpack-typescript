import powers,{ Power } from "../data/powers"


/**
 * Class to intance a Hero
 * @param {string} name - Name of the hero
 * @param {number} powerId - Id of power
 * @param {number} age - Age of the hero
 */
export class Hero {


    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(): string { // return string
        const power: Power | undefined = powers.find( power => power.id === this.powerId )
        if ( !power ) return 'not found'

        return power.desc;

        // con nullcheck
        // return powers.find( power => power.id === this.powerId )?.desc ?? 'not found';
        
        // con admiracion le dices a typescript que siempre va a haber un valor 
        // return powers.find( power => power.id === this.powerId )!.desc ?? 'not found';
    }

}

