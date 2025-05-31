const translateNumbers = (string) => {
  return string
    .split("")
    .map((char) => {
      if (char == "3") {
        return "w";
      }
      if (char == "7") {
        return "l";
      }

      return char;
    })
    .join("");
};

const reverseString = (string) => {
  return string.split(" ").reverse().join(" ");
};

const shiftString = (string) => {
  return string
    .split("")
    .map((char, index) => {
      if (char.toLowerCase().match(/[a-z]/i)) {
        let newCode = string.charCodeAt(index) - 3;

        if (newCode < 65) {
          const leftover = 3 - (string.charCodeAt(index) - 65);
          newCode = 91 - leftover;
        }
        if (newCode < 97 && newCode > 90) {
          const diff = string.charCodeAt(index) - 97;

          const leftover = 3 - (string.charCodeAt(index) - 97);
          newCode = 123 - leftover;
        }

        return String.fromCharCode(newCode);
      }

      return char;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  setup();
});

const setup = () => {
  const decodeButton = document.getElementById("decodeButton");
  decodeButton.addEventListener("click", (e) => {
    const input = document.getElementById("encodedInput");
    const string = input.value;

    const decoded = shiftString(reverseString(translateNumbers(string)));

    if (decoded) {
      const decodedContainer = document.getElementById("decodedOutput");
      decodedContainer.innerHTML = " ";

      const paragraph = document.createElement("p");
      paragraph.textContent = decoded;

      decodedContainer.appendChild(paragraph);
    }
  });
};
