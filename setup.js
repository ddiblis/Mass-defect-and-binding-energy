//Initially for helium, will add functionality for rest of the periodic table later

function calcMassDefect() {
const atomicNumber = 2

const massNumber = 4

const massOfProton = 1.00727647 // amU units

const massOfNeutron = 1.00866490 // amU units

const predictedMassOfNucleus = ( massOfProton * atomicNumber ) + ( massOfNeutron * massNumber )

const actualMassOfNucleus = 4.00150608 

const massDefect = predictedMassOfNucleus - actualMassOfNucleus
}



