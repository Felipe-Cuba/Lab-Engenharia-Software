document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const camposAdicionais = document.getElementById("campos_adicionais");

  const tipoProfessor = document.getElementById("tipo_professor");
  const tipoAluno = document.getElementById("tipo_aluno");

  tipoProfessor.checked = true;

  const carregarAtributosProfessor = () => {
    camposAdicionais.innerHTML = `
      <label for="area">Área:</label>
      <input type="text" id="area" name="area" required><br>

      <label for="matricula_professor">Matrícula:</label>
      <input type="text" id="matricula_professor" name="matricula_professor" required><br>

      <label for="lattes">Lattes:</label>
      <input type="text" id="lattes" name="lattes" required><br>
    `;
  };

  tipoProfessor.addEventListener("click", carregarAtributosProfessor);

  tipoAluno.addEventListener("click", () => {
    camposAdicionais.innerHTML = `
      <label for="curso">Curso:</label>
      <input type="text" id="curso" name="curso" required><br>

      <label for="matricula_aluno">Matrícula:</label>
      <input type="text" id="matricula_aluno" name="matricula_aluno" required><br>
    `;
  });

  carregarAtributosProfessor();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dadosFormulario = new FormData(form);

    const dados = {};
    for (const [chave, valor] of dadosFormulario.entries()) {
      dados[chave] = valor;
    }

    console.log(dados);
  });
});
