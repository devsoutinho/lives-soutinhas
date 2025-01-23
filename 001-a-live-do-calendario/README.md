## Por que essa live teve esse tema?

- Uma pessoa chamada Tarcisio, tava com problemas com o React Calendar do Material UI
  - Eu resolvi inicialmente pedir pra ele me mandar um link com o problema
  - Porém, mudei de ideia e resolvi ajudar sem ele mandar nada


## Aprendizados da live:

- Material UI é sofrido
- Não aprendi a usar o React Calendar do Material UI
```js
  const dayOfWeekFormatter = (weekday) => {
    console.log("weekday", weekday);
    return `${weekday.format('dd')}.`;
  }
```
> Ajuda você a formatar o dia da semana dentro do calendário

- Para mudar os valores "texto" que não fazem parte do componente calendário em si, tu usa o adapter da lib de data que você tiver trabalhando ex:

```js
import "dayjs/locale/pt-br";
import "dayjs/locale/de";
<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
```

- **Conclusão**: Não me parece muito performático, é bem acoplado de um jeito estranho com a lib de data e imagino que outras libs tenham formas melhores para lidar com isso, porém se você já está usando Material UI e precisa de um calendário, talvez seja uma boa opção isso aqui pode te ajudar.


PS: O geminai, ajudou, mas nem o geminai entendeu a documentação do material.