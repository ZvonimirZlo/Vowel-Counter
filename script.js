let btn = document.getElementById('btn');

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


btn.onclick = function countVowels() {
  let sentence = document.getElementById("input").value;
  let counts = 0;
  for(let i = 0; i < sentence.length; i++) {
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  return alert('Number of vowels is ' + counts);
  
};

