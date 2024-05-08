import React, { useState } from 'react';

function App() {
  // Declarar o estado e a função para atualizá-lo
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Cauã teste</h1>
      <h2></h2>
      {/* Botão para incrementar o contador */}
      <button onClick={() => setCount(count + 1)}>adiconar</button>
      {/* Exibir o valor do contador */}
      <p>vc clicou {count} vezes</p>
      {/* Botão para decrementar o contador */}
      <button onClick={() => setCount(count - 1)}>retirar</button>
    </div>
  );
}

export default App;
