import { Text } from "@devsoutinho/ui";

export default function Screen() {

  // const exemploDeTituloViaCMSHTML = `
  //   Hello <strong>world</strong>!
  // `;

  const exemploDeTituloViaCMSMarkdown = `
    Hello **world**!

    <img src="https://github.com/omariosouto.png" onload="alert('Você pegou virus!')" />
  `;

  return (
    <div>
      <Text markdown>{exemploDeTituloViaCMSMarkdown}</Text>
      <button>
        oi
      </button>
    </div>
  );
}