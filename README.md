# Fallout-76-Nuke-Codes-API-Node.js
some basic lines of code in node.js that read the https://nukacrypt.com/home web page and returns all the nuke code data.
<br><hr>

<hr />
<span> Example Code </span>
<hr />
<br>
first install the dependency
<code>npm install node-fetch</code>
<br>
<code><br />
const fetch = require('node-fetch');
<br /><br />
async function getFallout76NukeCodes(){<br />
try{<br />
const nukacrypt = await(fetch('https://nukacrypt.com/home').then(res => {return res.text();}));<br />
const editString = String(nukacrypt).trim().split('<div id=\'nuclearcodess\'>')[1].split('</div>')[0]<br />
.split('>').join('\n')<br />
.split('<').join('\n')<br />
.trim().split('\n');<br />
const result = [];<br />
for(const str of editString){<br />
if(str.length > 4 && str.includes('class') === false && str.includes('  ') === false && str.includes('t') === false){result.push(str)}<br />
}<br />
if(result.length < 7 || !result)return console.error('The Return Data is missing');<br />
const object = {<br />
  title: result[0],<br />
  week: result[1],<br />
  Alpha: { name: `Alpha`, code: result[5] },<br />
  Bravo: { name: `Bravo`, code: result[6] },<br />
  Charlie: { name: `Charlie`, code: result[7] },<br />
}
return object;
}catch(error){<br />
console.error(error);<br />
}<br />
</code><hr />
if you have any questions feel free to email me at <a href="https://mail.google.com/mail/?tab=rm&authuser=0&ogbl">skellymclane@gmail.com</a>



