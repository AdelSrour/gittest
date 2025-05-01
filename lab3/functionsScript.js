//1. Function accept a full name string and convert each letter of
function question1(text) {
  let words = text.split(" ");
  let result = [];
  words.forEach((word) => {
    word = word[0].toUpperCase() + word.slice(1);
    result.push(word);
  });

  return result.join(" ");
}

//2. Function that accept a sentence and return the longest word
function question2(text) {
  let words = text.split(" ");
  let largest = 0;
  let largets_str = "";
  words.forEach((word) => {
    let len = word.length;
    if (len >= largest) {
      largest = len;
      largets_str = word;
    }
  });
  return largets_str;
}

//3. Write a JavaScript Function that returns a passed string with
function question3(text) {
  text = [...text];
  text = text.sort();
  text = text.join("");
  return text;
}

//4. Write a function that takes two arrays and returns an array of common
function question4(arr1, arr2) {
  return arr1.filter((element) => {
    if (arr2.includes(element)) {
      return true;
    }
  });
}

//5. make Array of duplicates numbers and remove it in new array
function question5(arr) {
  let mem = [];
  arr.map((element) => {
    if (!mem.includes(element)) {
      mem.push(element);
    }
  });
  return mem;
}
