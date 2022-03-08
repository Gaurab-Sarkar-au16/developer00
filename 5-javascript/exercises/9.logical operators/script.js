const country = 'India'
const language = 'english'
const population = 10
const island = false

if(language === 'english' && population < 50 && !island){
  console.log(`${country} is right country for you :)`)
} else {
  console.log(`${country} does not meet your criteria :('`)
}