document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    var camposAdicionais = document.getElementById("campos_adicionais");
  
    var tipoProfessor = document.getElementById("tipo_professor");
    var tipoAluno = document.getElementById("tipo_aluno");
  
    tipoProfessor.addEventListener("click", function() {
      camposAdicionais.innerHTML = `
        <label for="area">Área:</label>
        <input type="text" id="area" name="area" required><br>
  
        <label for="matricula_professor">Matrícula:</label>
        <input type="text" id="matricula_professor" name="matricula_professor" required><br>
  
        <label for="lattes">Lattes:</label>
        <input type="text" id="lattes" name="lattes" required><br>
      `;
    });
  
    tipoAluno.addEventListener("click", function() {
      camposAdicionais.innerHTML = `
        <label for="curso">Curso:</label>
        <input type="text" id="curso" name="curso" required><br>
  
        <label for="matricula_aluno">Matrícula:</label>
        <input type="text" id="matricula_aluno" name="matricula_aluno" required><br>
      `;
    });
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var dadosFormulario = new FormData(form);
  
      var dados = {};
      for (var [chave, valor] of dadosFormulario.entries()) {
        dados[chave] = valor;
      }
  
      console.log(dados);
    });
  });
  