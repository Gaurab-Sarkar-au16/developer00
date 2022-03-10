const neighbours = ['pakistan', 'bangladesh', 'nepal','srilanka']

neighbours.push('utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

neighbours.includes('germany')?console.log('Probably a central European country :D'):console.log('Probably not a central European country :D')

neighbours[neighbours.indexOf('pakistan')] = 'pokistan'

console.log(neighbours)