interface vehicle {
    name: string,
    year: number,
    broken: boolean,
    summary(): string
}

var oldCivivc:vehicle = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() {
        return "testing testing one two three"
    }
}

const printvehicle = (vehicle: vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Name: ${vehicle.year}`)
    console.log(`Name: ${vehicle.broken}`)
}

printvehicle(oldCivivc);

