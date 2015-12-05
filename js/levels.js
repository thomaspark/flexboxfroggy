var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right.</p>',
      'de': '<p>Willkommen bei Flexbox Froggy, einem Spiel, in dem du Froggy und seinen Freunden hilfst, indem du CSS-Code schreibst! F&uuml;hre diesen Frosch zum Seerosenblatt auf der rechten Seite, indem du die <code>justify-content</code>-Eigenschaft verwendest, die Elemente horizontal ausrichtet, und die folgenden Werte akzeptiert:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul><p>Mit <code>justify-content: flex-end;</code> bewegst du den Frosch beispielsweise nach rechts.</p>',
      'pt-br': '<p>Bem-vindo ao Flexbox Froggy, um jogo onde você pode ajudar Froggy e seus amigos ao escrever código CSS! Guie o sapo à vitória-régia na direita usando a propriedade <code>justify-content</code>, que alinha itens horizontalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul><p>Por exemplo, <code>justify-content: flex-end;</code> moverá o sapo para a esquerda.</p>',
      'es': '<p>Bienvenido a Flexbox Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad <code>justify-content</code>, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contendor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul><p>Por ejemplo, <code>justify-content: flex-end;</code> moverá la rana a la derecha.</p>'    
    },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
      'de': '<p>Benutze erneut <code>justify-content</code>, um diese Fr&ouml;sche zu ihren Seerosenbl&auml;ttern zu f&uuml;hren. Wie du wei&szlig;t richtet diese Eigenschaft die Elemente horizontal aus, und akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul>',
      'pt-br': '<p>Use <code>justify-content</code> de novo para levar os sapos às suas vitórias-régias. Lembre-se que essa propriedade CSS alinha os itens horizontalmente e  aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul>',
      'es': '<p>Nuevamente, utiliza <code>justify-content</code> para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:<ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul>'
    },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>',
      'de': '<p>Hilf den drei Fr&ouml;schen, ihre Seerosenbl&auml;tter zu finden, indem du <code>justify-content</code> verwendest. Dieses Mal haben die Seerosenbl&auml;tter einen gro&szlig;en Au&szlig;enabstand.</p><p>Falls du die m&ouml;glichen Werte einer Eigenschaft vergessen haben solltest, kannst du den Mauszeiger &uuml;ber den Namen einer Eigenschaft bewegen. Versuche es bei <code>justify-content</code>.</p>',
      'pt-br': '<p>Ajude todos os três sapos a encontrar suas vitórias-régias usando <code>justify-content</code>. Desta vez, as vitórias-régias têm muito espaço em torno delas.</p><p>Caso você esqueça os possíveis valores de uma propriedade, passe o cursor sobre a propriedade para visualizá-los. Tente passar o cursor sobre <code>justify-content</code>.</p>',
      'es': '<p>Ayuda a las tres ranas a encontrar sus hojas de lirio usando <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen mucho espacio a su alrededor.</p><p>Si usted no recuerda los valores de una propiedad, puede pasar el cursor sobre el nombre de una e inmediatamente se mostraran los valores. Prueba pasando el cursor sobre <code>justify-content</code>.</p>'
    },
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
      'de': '<p>Inzwischen sind die &auml;u&szlig;eren Seerosenbl&auml;ter weiter nach au&szlig;en getrieben und haben so den Abstand noch weiter vergr&ouml;&szlig;ert. Benutze <code>justify-content</code>. Dieses Mal haben die Seerosenbl&auml;tter einen gleichm&auml;&szlig;igen Innenabstand.</p>',
      'pt-br': '<p>Agora as vitórias-régias nos cantos desviaram-se para a costa, aumentando o espaço em torno delas. Use <code>justify-content</code>. Desta vez, as vitórias-régias têm espaço igual entre elas.</p>',
      'es': '<p>Ahora las hojas de lirio de los bordes se han desplazado a un costado, aumentando así el espacio entre ellas. Usa <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen el mismo espacio entre ellas.</p>'
    },
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
      'de': '<p>Verwende nun <code>align-items</code>, um den Fr&ouml;schen zu helfen, das untere Ende des Teichs zu erreichen. Diese CSS-Eigenschaft richtet die Elemente vertikal aus und akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Elemente oben am Container ausrichten.</li><li><code>flex-end</code>: Elemente unten am Container ausrichten.</li><li><code>center</code>: Elemente mittig im Container ausrichten.</li><li><code>baseline</code>: Elemente an der Grundlinie des Containers ausrichten.</li><li><code>stretch</code>: Elemente strecken, um den Container auszuf&uuml;llen.</li></ul>',
      'pt-br': '<p>Agora use <code>align-items</code> para levar os sapos ao fundo da lagoa. Essa propriedade CSS alinha os itens verticalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham na parte de cima do container.</li><li><code>flex-end</code>: Itens se alinham na parte de baixo do container.</li><li><code>center</code>: Itens se alinham no centro vertical do container.</li><li><code>baseline</code>: Items se alinham na linha da base do container.</li><li><code>stretch</code>: Itens se esticam para preencher o container.</li></ul>',
      'es': '<p>Ahora usa <code>align-items</code> para ayudar a las ranas a llegar al fondo del estanque. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos a la parte superior del contenedor.</li><li><code>flex-end</code>: Alinea elementos a la parte inferior del contenedor.</li><li><code>center</code>: Alinea elementos en el centro (verticalmente hablando) del contenedor.</li><li><code>baseline</code>: Muestra elementos en la línea base del contenedor</li><li><code>stretch</code>: Elementos se estirán para ajustarse al contenedor.</li></ul>'
    },
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}",
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'de': '<p>F&uuml;hre den Frosch zur Mitte des Teichs, indem du <code>justify-content</code> und <code>align-items</code> in kombinierst.</p>',
      'pt-br': '<p>Leve o sapo ao cento da lagoa usando uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
      'es': '<p>Mueve a la rana al centro del estanque, usando una combinación de <code>justify-content</code> y <code>align-items</code>.</p>'
    },
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'de': '<p>Die Fr&ouml;sche m&uuml;ssen den Teich erneut &uuml;berqueren. Dieses Mal haben die Seerosenbl&auml;tter eine ganze Menge Abstand zueinander. Kombiniere <code>justify-content</code> und <code>align-items</code>.</p>',
      'pt-br': '<p>Os sapos precisam atravessar a lagoa de novo, desta vez para algumas vitórias-régias com bastante espaço em torno delas. Use uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
      'es': '<p>Nuevamente, las ranas necesitan cruzar el estanque. En esta oportunidad, las hojas de lirio tienen mucho espacio alrededor de ellas. Debes usar una combinación de <code>justify-content</code> y <code>align-items</code>.</p>'
    },
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'de': '<p>Die Fr&ouml;sche m&uuml;ssen mit Hilfe von <code>flex-direction</code> in die Reihenfolge der Seerosenbl&auml;tter gebracht werden. Diese CSS-Eigenschaft legt die Ausrichtung der Elemente in einem Container fest, und akzeptiert die folgenden Werte:</p><ul><li><code>row</code>: Elemente in Textrichtung ausrichten.</li><li><code>row-reverse</code>: Elemente entgegen der Textrichtung ausrichten.</li><li><code>column</code>: Elemente von oben nach unten ausrichten.</li><li><code>column-reverse</code>: Elemente von unten nach oben ausrichten.</li></ul>',
      'pt-br': '<p>Os sapos precisam ficar na mesma ordem das vitórias-régias usando <code>flex-direction</code>. Esta propriedade CSS define a direção em que os itens são posicionados no container e aceita os seguintes valores:</p><ul><li><code>row</code>: Itens são posicionados na mesma direção do texto.</li><li><code>row-reverse</code>: Itens são posicionados na direção oposta à do texto.</li><li><code>column</code>: Itens são posicionados de cima para baixo.</li><li><code>column-reverse</code>: Itens são posicionados de baixo para cima.</li></ul>',
      'es': '<p>Las ranas necesitan ponerse en el mismo orden que sus hojas de lirio usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>'
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'de': '<p>Hilf den Fr&ouml;schen dabei, die Seerosenbl&auml;tter zu erreichen, indem du <code>flex-direction</code> verwendest. Diese CSS-Eigenschaft legt die Richtung fest, in der die Elemente im Container platziert werden. Sie akzeptiert die folgenden Werte:</p><ul><li><code>row</code>: Elemente in Textrichtung ausrichten.</li><li><code>row-reverse</code>: Elemente entgegen der Textrichtung ausrichten.</li><li><code>column</code>: Elemente von oben nach unten ausrichten.</li><li><code>column-reverse</code>: Elemente von unten nach oben ausrichten.</li></ul>',
      'pt-br': '<p>Ajude os sapos a encontrar sua coluna de vitórias-régias usando <code>flex-direction</code>. Esta propriedade CSS define a direção em que os itens são posicionados no container e aceita os seguintes valores:</p><ul><li><code>row</code>: Itens são posicionados na mesma direção do texto.</li><li><code>row-reverse</code>: Itens são posicionados na direção oposta à do texto.</li><li><code>column</code>: Itens são posicionados de cima para baixo.</li><li><code>column-reverse</code>: Itens são posicionados de baixo para cima.</li></ul>',
      'es': '<p>Ayuda a las ranas a encontrar su hoja de lirio en la columna usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
      'de': '<p>Hilf den Fr&ouml;schen, ihr Seerosenblatt zu erreichen. Obwohl sie nah dran sind, ben&ouml;tigst du sowohl <code>flex-direction</code>, als auch <code>justify-content</code>, um sie ans Ziel zu f&uuml;hren.</p><p>Hinweis: Wenn du eine umgekehrte Ausrichtung verwendest, sind Start und Ende auch umgedreht.</p>',
      'pt-br': '<p>Ajude os sapos a encontrar suas próprias vitórias-régias. Elas parecem estar próximas, mas você precisará de ambas propriedades, <code>flex-direction</code> e <code>justify-content</code>, para levá-los lá.</p><p>Note que quando você define a direção para uma linha ou coluna reversa, start e end também são reversos.</p>',
      'es': '<p>Ayuda a las ranas a llegar a sus hojas de lirio. A pesar de que ellas parecen estar cerca, tomará <code>flex-direction</code> y <code>justify-content</code> para llegar hasta allí.</p><p>Nota que cuando estableces la dirección a una  fila invertida o columna, el inicio y el final también se invierten.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
      'de': '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code> und <code>justify-content</code>, ihr Seerosenblatt zu finden.</p><p>Hinweis: Wenn du eine vertikale Ausrichtung w&auml;hlst, beeinflusst <code>justify-content</code> die vertikale Ausrichtung, und <code>align-items</code> die horizontale.</p>',
      'pt-br': '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code> e <code>justify-content</code>.</p><p>Note que quando a direção é em coluna, <code>justify-content</code> muda para a vertical e <code>align-items</code> para a horizontal.</p>',
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p><p>Nota que cuando es una columna, <code>justify-content</code> cambia a vertical y <code>align-items</code> a horizontal.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
      'de': '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code> und <code>justify-content</code>, ihr Seerosenblatt zu finden.</p>',
      'pt-br': '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code> e <code>justify-content</code>.</p>',
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
      'de': '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code>, <code>justify-content</code> und <code>align-items</code>, ihr Seerosenblatt zu finden.</p>',
      'pt-br': '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code>, <code>justify-content</code> e <code>align-items</code>.</p>',
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code>, <code>justify-content</code>, y <code>align-items</code>.</p>'
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value. <p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
      'de': '<p>Manchmal reicht es nicht aus, die horizontale oder vertikale Ausrichtung eines Containers umzukehren. In so einem Fall k&ouml;nnen wir die <code>order</code>-Eigenschaft f&uuml;r einzelne Elemente verwenden. Standardm&auml;&szlig;ig haben alle Element den Wert 0, aber wir k&ouml;nnen die Eigenschaft verwenden, um ihn auf eine positive oder negative ganze Zahl zu setzen. <p>Benutze die <code>order</code>-Eigenschaft, um die Fr&ouml;schen entsprechend ihrer Seerosenbl&auml;tter anzuordnen.</p>',
      'pt-br': '<p>Às vezes, reverter a ordem de uma coluna ou de um container não é suficiente. Nesses casos, podemos aplicar a propriedade <code>order</code> para itens individuais. Por padrão, itens tem um valor de 0, mas nós podemos usar essa propriedade para alterar para um valor inteiro positivo ou negativo. <p>Use a propriedade <code>order</code> para reordenar os sapos de acordo com suas vitórias-régias.</p>',
      'es': '<p>A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad <code>order</code> para elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo. <p>Usa la propiedad <code>order</code> para reordenar las ranas de acuerdo a sus hojas de lirio.</p>'
    },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>',
      'de': '<p>Benutze die <code>order</code>-Eigenschaft, um den roten Frosch zu seinem Seerosenblatt zu f&uuml;hren.</p>',
      'pt-br': '<p>Use a propriedade <code>order</code> para levar o sapo vermelho à sua vitória-régia.</p>',
      'es': '<p>Usa la propiedad <code>order</code> para enviar la rana de color rojo a su hoja de lirio.</p>'
    },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: {
      'en': '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>',
      'de': '<p><code>align-self</code> ist eine weitere Eigenschaft f&uuml;r einzelne Elemente. Sie akzeptiert die glciehen Werte wie <code>align-items</code>.</p>',
      'pt-br': '<p>Outra propriedade que você pode aplicar para itens individuais é <code>align-self</code>. Esta propriedade aceita os mesmos valores que <code>align-items</code> e seus valores são usados para o item específico.</p>',
      'es': '<p>Otra propiedad que puedes aplicar a elementos individuales es <code>align-self</code>. Esta propiedad acepta los mismos valores de <code>align-items</code> y sus valores son usados para un elemento específico</p>'
    },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: {
      'en': '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>',
      'de': '<p>Kombiniere <code>order</code> mit <code>align-self</code>, um die Fr&ouml;sche zum Ziel zu bringen.</p>',
      'pt-br': '<p>Combine <code>order</code> e <code>align-self</code> para levar os sapos aos seus destinos.</p>',
      'es': '<p>Combina <code>order</code> con <code>align-self</code> para ayudar a las ranas a llegar a sus destinos</p>'
    },
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
      'de': '<p>Oh nein! Alle Fr&ouml;sche sind in eine Zeile Seerosenbl&auml;tter gequetscht. Verteile sie mit der <code>flex-wrap</code>-Eigenschaft, welche die folgenden Werte akzeptiert:</p><ul><li><code>nowrap</code>: Jedes Element in einer eigenen Zeile platzieren.</li><li><code>wrap</code>: Elemente auf zus&auml;tzliche Zeilen umbrechen.</li><li><code>wrap-reverse</code>: Elemente in umgekehrter Reihenfolge auf zus&auml;tzliche Zeilen umbrechen.</li></ul>',
      'pt-br': '<p>Ah, não! Os sapos estão todos apertados em uma única linha de vitórias-régias. Espalhe-os usando a propriedade <code>flex-wrap</code>, que aceita os seguintes valores:</p><ul><li><code>nowrap</code>: Todos os itens são apertados em uma única linha.</li><li><code>wrap</code>: Itens se separam em linhas adicionais.</li><li><code>wrap-reverse</code>: Itens se separam em linhas adicionais em reverso.</li></ul>',
      'es': '<p>¡Oh, no! Todas las ranas están apretadas en una sola fila de hojas de lirio. Manos a la obra, vamos a distribuirlas correctamente usando la propiedad <code>flex-wrap</code>, la cual acepta los siguientes valores:</p><ul><li><code>nowrap</code>: Cada elemento se ajusta en una sola línea.</li><li><code>wrap</code>: los elementos se envuelven alrededor de líneas adicionales.</li><li><code>wrap-reverse</code>: Los elementos se envuelven alrededor de líneas adicionales en reversa.</li></ul>'
    },
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>',
      'de': '<p>Hilf dieser Frosch-Armee, mit <code>flex-direction</code> und <code>flex-wrap</code> drei ordentliche Spalten zu formen.</p>',
      'pt-br': '<p>Ajude esse exército de sapos a formar três colunas ordenadas usando uma combinação de <code>flex-direction</code> e <code>flex-wrap</code>.</p>',
      'es': '<p>Ayuda a este ejercito de ranas a ordenarse en tres columnas usando una combinación de <code>flex-direction</code> y <code>flex-wrap</code>.</p>'
    },
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: {
      'en': '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
      'de': '<p>Die beiden Eigenschaften <code>flex-direction</code> und <code>flex-wrap</code> werden so oft gemeinsam verwendet, dass sie &uuml;ber die Kurzschreibweise <code>flex-flow</code> kombiniert werden k&ouml;nnen. Diese akzeptiert, durch ein Leerzeichen getrennt, die Werte beider Eigenschaften.</p><p>Du kannst zum Beispiel <code>flex-flow: row wrap</code> benutzen, um umbrechedne Zeilen zu verwenden.</p><p>Versuche das vorige Level einmal mit <code>flex-flow</code>.</p>',
      'pt-br': '<p>As duas propriedades <code>flex-direction</code> e <code>flex-wrap</code> são usadas tão frequentemente juntas que uma propriedade abreviada <code>flex-flow</code> foi criada para combiná-las. Essa propriedade aceita o valor das duas propriedades separados por um espaço.</p><p>Por examplo, você pode usar <code>flex-flow: row wrap</code> para aplicar a direção de linha e quebrar em múltiplas linhas.</p><p>Tente usar <code>flex-flow</code> para refazer o nível anterior.</p>',
      'es': '<p>Las dos propiedades <code>flex-direction</code> y <code>flex-wrap</code> son usadas a menudo en conjunto con la propiedad abreviada <code>flex-flow</code>, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio</p><p>Por ejemplo, puedes usar <code>flex-flow</code> para establecer filas y envolverlas.</p><p>Trata de usar <code>flex-flow</code> para volver a realizar el nivel anterior.</p>'
    },
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: {
      'en': '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
      'de': '<p>Die Fr&ouml;sche sind &uuml;ber den gesamten Teich verteile, aber die Seerosenbl&auml;tter befinden sich alle am oberen Ende. Du kannst <code>align-content</code> verwenden, um festzulegen, wie der Abstand zwischen mehreren Zeilen aussehen soll. Diese Eigenschaft akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Zeilen oben im Container ausrichten.</li><li><code>flex-end</code>: Zeilen unten im Container ausrichten.</li><li><code>center</code>: Zeilen in der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Zeilen mit gleichm&auml;&szlig;igem Innenabstand anordnen.</li><li><code>space-around</code>: Zeilen mit gleichm&auml;&szlig;igem Au&szlig;enabstand anordnen.</li><li><code>stretch</code>: Zeilen strecken, um den Container auszuf&uuml;llen.</li></ul><p>Das kann etwas verwirrend sein, aber <code>align-content</code> beeinflusst den Abstand zwischen den Zeilen, wobei <code>align-items</code> festlegt, wie alle Elemente als Ganzes im Container angeordnet werden. Gibt es nur eine Zeile, so hat <code>align-content</code> keine Auswirkung.</p>',
      'pt-br': '<p>Os sapos estão espalhados por toda a lagoa, mas as vitórias-régias estão agrupadas no topo. Você pode usar <code>align-content</code> para definir como múltiplas linhas devem ser espaçadas uma das outras. Essa propriedade recebe os seguintes valores:</p><ul><li><code>flex-start</code>: Linhas são agrupadas no topo do container.</li><li><code>flex-end</code>: Linhas são agrupadas no fundo do container.</li><li><code>center</code>:Linhas são agrupadas no centro vertical do container.</li><li><code>space-between</code>: Linhas são posicionadas com espaço igual entre elas.</li><li><code>space-around</code>: Linhas são posicionadas com espaço igual em torno delas.</li><li><code>stretch</code>: Linhas se esticam para preencher o container.</li></ul><p>Isso pode ser confuso, mas <code>align-content</code> determina o espaçamento entre linhas, enquanto <code>align-items</code> determina como as linhas como um todo são alinhadas dentro do container. Quando há só uma linha, <code>align-content</code> não tem nenhum efeito.</p>',
      'es': '<p>Las ranas están repartidas por todo el estanque, pero las hojas de lirio estan agrupadas en la parte superior. Puedes usar <code>align-content</code> para establecer como multiples líneas están separadas una de otra. Esta propiedad acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Las líneas se posicionan en la parte superior del contenedor.</li><li><code>flex-end</code>: Las líneas se posicionan en la parte inferior del contenedor.</li><li><code>center</code>: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.</li><li><code>space-between</code>: Las líneas se muestran con la misma distancia entre ellas.</li><li><code>space-around</code>: Las líneas se muestran con la misma separación alrededor de ellas.</li><li><code>stretch</code>: Las líneas se estiran para ajustarse al contenedor.</li></ul><p>Esto puede ser confuso, pero <code>align-content</code> determina el espacio entre las líneas, mientras que <code>align-items</code> determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, <code>align-content</code> no tiene efecto.</p>'
      
    },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-start'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: {
      'en': '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>',
      'de': '<p>Der Strom hat die Seerosenbl&auml;tter nach unten getrieben. Benutze <code>align-content</code>, um die Fr&ouml;sche dorthin zu f&uuml;hren.</p>',
      'pt-br': '<p>Agora a correnteza agrupou as vitórias-régias no fundo. Use <code>align-content</code> para guiar os sapos até lá.</p>',
      'es': '<p>Ahora, la corriente ha agrupado las hojas de lirio en la parte inferior. Usa <code>align-content</code> para guiar las ranas hasta allí.</p>'
    },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: {
      'en': '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>',
      'de': '<p>Die Fr&ouml;sche haben eine Party gefeiert, aber nun ist es Zeit, nach Hause zu gehen. Benutze eine Kombination von <code>flex-direction</code> und <code>align-content</code>, um sie zu ihren Seerosenbl&auml;ttern zu f&uuml;hren.</p>',
      'pt-br': '<p>Os sapos fizeram uma festa, mas é hora de ir para casa. Use uma combinação de <code>flex-direction</code> e <code>align-content</code> para levá-los até suas vitórias-régias.</p>',
      'es': '<p>Las ranas han tenido una fiesta, pero es momento de volver a casa. Usa una combinación de <code>flex-direction</code> y <code>align-content</code> para llevarlas a sus hojas de lirio.</p>'
    },
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'de': '<p>Bringe die Fr&ouml;sche ein letztes Mal mit allen gelernten CSS-Eigenschaften nach Hause:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'pt-br': '<p>Leve os sapos para casa uma última vez utilizando as propriedades CSS que você aprendeu:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'es': '<p>Traiga a las ranas a su casa una vez más usando las propiedades CSS que aprendiste:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>'
    },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, check out my other projects on my <a href="http://thomaspark.co">blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>, and be sure to share Flexbox Froggy with your friends!</p>',
    'de': '<p>Gewonnen! Dank deines flexbox-K&ouml;nnnens warst du in der Lage, alle Fr&ouml;sche zu ihrem Seerosenblatt zu f&uuml;hren. Sieh dir an wie gl&uuml;cklich sie sind!</p><p>Wenn dir das gefallen hat, schau dir meine anderen Projekte auf meinem <a href="http://thomaspark.co">Blog</a> oder <a href="http://twitter.com/thomashpark">Twitter</a> an, und teile Flexbox Froggy mit deinen Freunden!</p>',
    'pt-br': '<p>Você venceu! Graças à sua maestria de flexbox, você foi capaz de ajudar todos os sapos a chegar até suas vitórias-régias. Veja como eles estão felizes!</p><p>Se você achou isso coaxante, confira meus outros projetos no meu <a href="http://thomaspark.co">blog</a> ou <a href="http://twitter.com/thomashpark">Twitter</a>, e compartilhe Flexbox Froggy com seus amigos!</p>',
    'es': '<p>¡Tú ganas! gracias a su dominio de flexbox, fuiste capaz de ayudar a todas las ranas a ir a sus hojas de lirio. ¡Basta mirar lo felices que son!</p><p>Si tu encontras esto divertido, revisa mis otros projectos en mi <a href="http://thomaspark.co">blog</a> o <a href="http://twitter.com/thomashpark">Twitter</a> y asegurese de compartir Flexbox Froggy con tus amigos.</p>'
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
