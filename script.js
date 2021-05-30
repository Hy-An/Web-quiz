const QUESTION = [
  {
    prompt: "El color de las manzanas es:\n (a)rojo \n(b)violeta \n(c)naranja",
    answer: "a",
  },
  {
    prompt: "El color de las naranjas es:\n(a)rojo \n(b)violeta \n(c)naranja",
    answer: "c",
  },
  {
    prompt: "El color de las bananas es:\n(a)amarillo \n(b)marron \n(c)celeste",
    answer: "a",
  },
  {
    prompt: "El color del coco es:\n (a)marron \n(b) rojo \n(c)azul",
    answer: "a",
  },
  {
    prompt:
      "El caballo blanco de San Martin es:\n (a)Rojo \n(b)blanco \n(c)marron",
    answer: "b",
  },
];
let score = 0;
let I = 0;
for (let I = 0; I < QUESTION.length; I++) {
  let RESPONSE = window.prompt(QUESTION[I].prompt);
  if (RESPONSE == QUESTION[I].answer) {
    score++;
    alert("Correcto!");
  } else {
    alert("Error!");
  }
}
alert("Puntaje total: " + score + "/" + QUESTION.length);
