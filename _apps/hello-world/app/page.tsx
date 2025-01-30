import { Text } from "@devsoutinho/ui";

export default function Screen() {

  // const exemploDeTituloViaCMSHTML = `
  //   Hello <strong>world</strong>!
  // `;

  const exemploDeTituloViaCMSMarkdown = `
    Hello **world**!
  `;

  const injectionCode = `
    <script>
      console.log("Seu site foi hackeado!!! hahahahahah");
    </script>
  `; 

  return (
    <div>
      <Text markdown>{exemploDeTituloViaCMSMarkdown}</Text>
      {/* <Text>{exemploDeTituloViaCMSMarkdown}</Text> */}
      {/* <Text>{exemploDeTituloViaCMSHTML}</Text> */}
      <button>
        oi
      </button>
      {injectionCode}
    </div>
  );
}