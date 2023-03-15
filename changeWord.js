function changeWord(selectedText, changeText, text){ 
  const modifiedText = text.replace(selectedText, changeText);
  return modifiedText;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak mampu menggambarkan besarnya cintaku padamu'

//When the function is called with variable kalimat1
console.log(changeWord('mencintai','membenci', kalimat1))
//Output => 'Andini sangat membenci kamu selamanya'

//When the function is called with variable kalimat2
console.log(changeWord('bromo','semeru', kalimat2))
//Output => 'Gunung semeru tak mampu menggambarkan besarnya cintaku padamu'
