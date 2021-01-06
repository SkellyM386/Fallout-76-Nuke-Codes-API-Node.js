const fetch = require('node-fetch');

async function getFallout76NukeCodes(){try{
const nukacrypt = await(fetch('https://nukacrypt.com/home').then(res => {return res.text();}));
const editString = String(nukacrypt).trim().split('<div id=\'nuclearcodess\'>')[1].split('</div>')[0]
.split('>').join('\n')
.split('<').join('\n')
.trim().split('\n');
const result = [];
for(const str of editString){
if(str.length > 4 && str.includes('class') === false && str.includes('  ') === false && str.includes('t') === false){result.push(str)}
}
if(result.length < 7 || !result)return console.error('The Return Data is missing');
const object = {
  title: result[0],
  week: result[1],
  Alpha: { name: `Alpha`, code: result[5] },
  Bravo: { name: `Bravo`, code: result[6] },
  Charlie: { name: `Charlie`, code: result[7] },
}
return object;
}catch(e){console.error(e)}
};
