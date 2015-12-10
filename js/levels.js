var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right.</p>',
      'de': '<p>Willkommen bei Flexbox Froggy, einem Spiel, in dem du Froggy und seinen Freunden hilfst, indem du CSS-Code schreibst! F&uuml;hre diesen Frosch zum Seerosenblatt auf der rechten Seite, indem du die <code>justify-content</code>-Eigenschaft verwendest, die Elemente horizontal ausrichtet, und die folgenden Werte akzeptiert:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul><p>Mit <code>justify-content: flex-end;</code> bewegst du den Frosch beispielsweise nach rechts.</p>',
      'es': '<p>Bienvenido a Flexbox Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad <code>justify-content</code>, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contendor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul><p>Por ejemplo, <code>justify-content: flex-end;</code> moverá la rana a la derecha.</p>',   
      'pt-br': '<p>Bem-vindo ao Flexbox Froggy, um jogo onde você pode ajudar Froggy e seus amigos ao escrever código CSS! Guie o sapo à vitória-régia na direita usando a propriedade <code>justify-content</code>, que alinha itens horizontalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul><p>Por exemplo, <code>justify-content: flex-end;</code> moverá o sapo para a direita.</p>',
      'fr': '<p>Bienvenue à Flexbox Froggy, un jeu où vous aidez Froggy la grenouille et ses amis en écrivant du code CSS! Guidez cette grenouille au nénuphar à la droite de l\'étang en utilisant la propriété <code>justify-content</code>, qui aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s\'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s\'affichent avec un espacement égal à l\'entour d\'eux.</li></ul><p>Par exemple,  <code>justify-content: flex-end;</code> bougera la grenouille vers la droite.</p>',
      'ru': '<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>',
      'fa': '<p>به آموزش فکس باکس  خوش آمدید, این قورباغه به شما کمک میکنه که بهتر فلکس باکس رو درک کنید! با استفاده از خصوصیت <code>justify-content</code> می‌تونید نحوه چیدمان آیتم‌ها بر روی محور اصلی را تعیین کنید, این خصوصیت مقادیر زیر را می پذیرد:</p><ul><li><code>flex-start</code>: آیتم‌ها از ابتدای <span class="en-font"><span class="en-font">flex-line</span></span> ها چیده می‌شوند.</li><li><code>flex-end</code>:  آیتم‌ها از انتهای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها از وسط <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>space-between</code>: آیتم اول در ابتدا و آیتم آخر در انتهای <span class="en-font">flex-line</span> قرار می گیرند و بقیه آیتم ها در بین آنها با یک فاصله ی برابر قرار می‌گیرند.</li><li><code>space-around</code>: آیتم ها با فضای برابر در کنار یکدیگر قرار می‌گیرند.</li></ul><p> برای مثال , <bdi><code style="direction:ltr;">justify-content: flex-end;</code></bdi> قورباغه رو به سمت راست جا به جا میکنه',
      'zh-cn': '<p>欢迎来到Flexbox Froggy。在游戏中你会靠写CSS代码来帮助青蛙和他的朋友们！请用<code>justify-content</code>属性指引青蛙到右边的荷叶上。这个属性可以水平对齐元素，并且接受以下几个参数：</p><ul><li><code>flex-start</code>: 元素和容器的左端对齐。</li><li><code>flex-end</code>: 元素和容器的右端对齐。</li><li><code>center</code>: 元素在容器里居中。</li><li><code>space-between</code>:元素之间保持相等的距离。</li><li><code>space-around</code>:元素周围保持相等的距离。</li></ul><p>举个例子，<code>justify-content: flex-end;</code>会将青蛙移到右边</p>',
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
      'es': '<p>Nuevamente, utiliza <code>justify-content</code> para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:<ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul>',
      'fr': '<p>Utilisez encore <code>justify-content</code> pour aider ces grenouilles à se rendre à leurs nénuphars. Souvenez-vous que cette propriété CSS aligne les items horizontalement et accepte les valeurs suivantes&nbsp;: </p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s\'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s\'affichent avec un espacement égal à l\'entour d\'eux.</li></ul>',
      'ru': '<p>Используй <code>justify-content</code> еще раз, чтоб помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul>',
      'fa': '<p>با استفاده از خصوصیت <code>justify-content</code> به این قورباغه ها کمک کنید تا روی نیلفرهای آبی قرار بگیرند. فراموش نکنید که این خاصیت در محور افقی کار میکند.</p><ul><li><code>flex-start</code>:  آیتم‌ها از ابتدای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>flex-end</code>: آیتم‌ها از انتهای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها از وسط <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>space-between</code>: آیتم اول در ابتدا و آیتم آخر در انتهای <span class="en-font">flex line</span> قرار می گیرند و بقیه آیتم ها در بین آنها با یک فاصله ی برابر قرار می‌گیرند. </li><li><code>space-around</code>: آیتم ها با فضای برابر در کنار یکدیگر قرار می‌گیرند.</li></ul>',
        'zh-cn': '<p>再用<code>justify-content</code>一次来帮助这些青蛙到他们的荷叶上。记住这个CSS属性能水平对齐元素，并接受这些参数：</p><ul><li><code>flex-start</code>: 元素和容器的左端对齐。</li><li><code>flex-end</code>: 元素和容器的右端对齐。</li><li><code>center</code>: 元素在容器里居中。</li><li><code>space-between</code>:元素之间保持相等的距离。</li><li><code>space-around</code>:元素周围保持相等的距离。</li>',

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
      'es': '<p>Ayuda a las tres ranas a encontrar sus hojas de lirio usando <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen mucho espacio a su alrededor.</p><p>Si usted no recuerda los valores de una propiedad, puede pasar el cursor sobre el nombre de una e inmediatamente se mostraran los valores. Prueba pasando el cursor sobre <code>justify-content</code>.</p>',
      'fr': '<p>Aidez les trois grenouilles à trouver leurs nénuphars en utilisant seulement <code>justify-content</code>. Cette fois-ci, les nénuphars ont beaucoup d\'espace tout autour d\'eux.</p><p>Si vous oubliez les valeurs possibles pour une propriété, vous pouvez survoler le nom de cette propriété pour les voir. Essayez de survoler <code>justify-content</code>.</p>',
      'ru': '<p>Помоги всем трем лягушатам найти их лилии, просто используя <code>justify-content</code>. В этот раз, у лилий много пространства вокруг.</p><p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтоб посмотреть их. Попробуй навести курсор на <code>justify-content</code>.</p>',
      'fa': '<p>با استفاده از <code>justify-content</code> به این سه قورباغه کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. حواستون به این نکته باشه که نیلوفرهای آبی با فاصبه برابر کنار هم قرار گرفتند.</p><p>اگر مقادیر این خاصیت را فراموش کردید, میتونید با قرار دادن ماوس روی خاصیت مقادیر را ببینید. <code>justify-content</code>.</p>',
      'zh-cn': '<p>仅靠<code>justify-content</code>来帮助全部三只青蛙找到他们的荷叶。这次荷叶周边都有很多的空地。</p><p>如果你忘了一个CSS属性可选的值的话，你可以将鼠标移到参数名上面来查看。试试将鼠标移到<code>justify-content</code>。</p>',
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
      'es': '<p>Ahora las hojas de lirio de los bordes se han desplazado a un costado, aumentando así el espacio entre ellas. Usa <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen el mismo espacio entre ellas.</p>',
      'fr': '<p>Maintenant, les nénuphars sur les côtés ont dérivé jusqu\'à la rive, augmentant l\'espace entre eux. Utilisez <code>justify-content</code>. Cette fois-ci, l\'espace entre chaque nénuphar est équivalent.</p>',
      'ru': '<p>Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <code>justify-content</code>. В этот раз, у лилий одинаковое расстояние между ними.</p>',
      'fa': '<p>در حال حاضر نیلوفر های آبی به سمت لبه های ساحل حرکت کرده اند و فضای بین آنها افزایش پیدا کرده پس با استفاده از <code>justify-content</code> قورباغه ها رو کمک کنید. نیلوفرهای آبی دارای فضای مساوی هستن.</p>',
      'zh-cn': '<p>现在边上的荷叶都漂到了岸上，使得他们之间的间距变大了。使用<code>justify-content</code>。这次荷叶之间有相等的距离。</p>',

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
      'es': '<p>Ahora usa <code>align-items</code> para ayudar a las ranas a llegar al fondo del estanque. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos a la parte superior del contenedor.</li><li><code>flex-end</code>: Alinea elementos a la parte inferior del contenedor.</li><li><code>center</code>: Alinea elementos en el centro (verticalmente hablando) del contenedor.</li><li><code>baseline</code>: Muestra elementos en la línea base del contenedor</li><li><code>stretch</code>: Elementos se estirán para ajustarse al contenedor.</li></ul>',
      'fr': '<p>Maintenant, utilisez <code>align-items</code> pour aider les grenouilles à se rendre au bas de l\'étang. Cette propriété CSS aligne les éléments verticalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au haut du conteneur.</li><li><code>flex-end</code>&nbsp;: Les éléments s\'alignent au bas du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre vertical du conteneur.</li><li><code>baseline</code>&nbsp;: Les éléments s\'alignent à la ligne de base du conteneur.</li><li><code>stretch</code>&nbsp;: Les éléments sont étirés pour s\'adapter au conteneur.</li></ul>',
      'ru': '<p>Теперь используй <code>align-items</code> чтоб помочь лягушатам добратся к нижней части пруда. Это CSS свойство выравнивает элементы вертикально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по верхнему краю контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по нижнему краю контейнера.</li><li><code>center</code>: Элементы выравниваются вертикально по центру контейнера.</li><li><code>baseline</code>: Элементы отображаются на базовой линии контейнера.</li><li><code>stretch</code>: Элементы растягиваются, чтоб заполнить контейнер.</li></ul>',
      'fa': '<p>در حال حاضر با استفاده از <code>align-items</code> به قورباغ ها کمک کنید تا به پایین برکه برسند.این خاصیت ایتم ها را در محور عمودی تراز بندی می کند و مقادیر آن عبارتند از :</p><ul><li><code>flex-start</code>: آیتم‌ها از نقطه ابتدایی محور عمودی چیده می‌شوند.</li><li><code>flex-end</code>: آیتم‌ها از نقطه انتهایی محور عمودی چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها در وسط محور عمودی چیده می‌شوند.</li><li><code>baseline</code>: آیتم ها بر اساس <span class="en-font">Baseline</span>شان هم‌تراز می‌شوند</li><li><code>stretch</code>: در صورتی که ارتفاع آیتم‌ها مشخص نشده باشد، آیتم ها کشیده میشوند و Flex line را پر میکنند.</li></ul>',
      'zh-cn': '<p>现在用<code>align-items</code>来帮助青蛙们到池塘的底部。这个CSS属性纵向对齐元素并且可选以下几个值：</p><ul><li><code>flex-start</code>: 元素与容器的顶部对齐。</li><li><code>flex-end</code>: 元素与容器的底部对齐。</li><li><code>center</code>: 元素纵向居中。</li><li><code>baseline</code>: 元素在容器的基线位置显示。</li><li><code>stretch</code>: 元素被拉伸以填满整个容器。</li></ul>',

    },
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'de': '<p>F&uuml;hre den Frosch zur Mitte des Teichs, indem du <code>justify-content</code> und <code>align-items</code> in kombinierst.</p>',
      'pt-br': '<p>Leve o sapo ao cento da lagoa usando uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
      'es': '<p>Mueve a la rana al centro del estanque, usando una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
      'fr': '<p>Dirigez la grenouille au centre de l\'étang en utilisant une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>',
      'ru': '<p>Направь лягушонка в центр пруда, используя <code>justify-content</code> и <code>align-items</code> вместе.</p>',
      'fa': '<p>قورباغه را به وسط برکه هدایت کنید برای این کار از ترکیب خاصیت های <code>justify-content</code> و <code>align-items</code> استفاده کنید.</p>',
      'zh-cn': '<p>使用<code>justify-content</code>和<code>align-items</code>的组合来指引青蛙们到池塘中央。</p>',

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
      'es': '<p>Nuevamente, las ranas necesitan cruzar el estanque. En esta oportunidad, las hojas de lirio tienen mucho espacio alrededor de ellas. Debes usar una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
      'fr': '<p>Les grenouilles doivent encore traverser l\'étang. Cette fois-ci, les nénuphars ont beaucoup d\'espace autour d\'eux. Utilisez une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>',
      'ru': '<p>Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.</p>',
      'fa': '<p>قروباغه ها نیاز دارند که به انتهای برکه برسند, دقت داشته باشید که فضای خالی اطراف نیلوفر های آبی وجود دارد. برای این کار از خاصیت های <code>justify-content</code> و <code>align-items</code> استفاده کنید.</p>',
       'zh-cn': '<p>这些青蛙又需要穿过池塘了。这次有些荷叶周围有充足的距离。用<code>justify-content</code>和<code>align-items</code>的组合。</p>',
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
      'es': '<p>Las ranas necesitan ponerse en el mismo orden que sus hojas de lirio usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
      'fr': '<p>Les grenouilles doivent se rendre dans le même ordre que leurs nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
      'ru': '<p>Лягушатам нужно выстроится в порядке их лилий, используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
      'fa': '<p>قورباه ها نیاز دارند که روی نیلوفرهای آبی خود قرار بگیرند پس با استفاده از <code>flex-direction</code> این کار را انجام دهید. این خاصیت جهت ایتم ها را تعیین می کند و مقادیر زیر را می پذیرد:</p><ul><li><code>row</code>: این مقدار برای چیدمان افقی آیتم ها به کار میرود.</li><li><code>row-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li><li><code>column</code>: این مقدار برای چیدمان عمودی آیتم ها به کار میرود.</li><li><code>column-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li></ul>',
      'zh-cn': '<p>青蛙们需要和他们的荷叶保持对应的顺序。我们可以用<code>flex-direction</code>属性。这个CSS属性定义了元素在容器里摆放的方向，并且接受这些值：</p><ul><li><code>行</code>: 元素摆放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素摆放的方向和文字方向相反。</li><li><code>column</code>: 元素从上放到下。</li><li><code>column-reverse</code>: 元素从下放到上。</li></ul>',
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
      'es': '<p>Ayuda a las ranas a encontrar su hoja de lirio en la columna usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
      'fr': '<p>Aidez les grenouilles à trouver leurs colonnes de nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
      'ru': '<p>Помоги лягушатам расположиться на своих лилиях используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
      'fa': '<p>به قورباغه ها کمک کنید تا به صورت ستونی روی نیلوفرهای آبی قرار می گیرند با استفاده از <code>flex-direction</code> این کار را انجام دهید. این خاصیت جهت قرار گیری آیتم ها را مشخص می کند, مقادیر این خاصیت عبارتند از :</p><ul><li><code>row</code>: این مقدار برای چیدمان افقی آیتم ها به کار میرود.</li><li><code>row-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li><li><code>column</code>: این مقدار برای چیدمان عمودی آیتم ها به کار میرود.</li><li><code>column-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li></ul>',
       'zh-cn': '<p>使用<code>flex-direction</code>属性，帮助青蛙们找到它们该去的列。这个CSS属性定义了元素在容器里摆放的方向，并且接受这些值：</p><ul><li><code>行</code>: 元素摆放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素摆放的方向和文字方向相反。</li><li><code>column</code>: 元素从上放到下。</li><li><code>column-reverse</code>: 元素从下放到上。</li></ul>',
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
      'es': '<p>Ayuda a las ranas a llegar a sus hojas de lirio. A pesar de que ellas parecen estar cerca, tomará <code>flex-direction</code> y <code>justify-content</code> para llegar hasta allí.</p><p>Nota que cuando estableces la dirección a una  fila invertida o columna, el inicio y el final también se invierten.</p>',
      'fr': '<p>Aidez les grenouilles à arriver à leur propre nénuphar. Bien qu\'elles semblent près, il faudra autant <code>flex-direction</code> que <code>justify-content</code> pour y arriver.</p><p>Remarquez que quand vous mettez la direction inversée, le début et la fin sont aussi inversés.</p>',
      'ru': '<p>Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, все же придется применить и <code>flex-direction</code> и <code>justify-content</code>, чтоб поместить их на свои лилии.</p><p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>',
      'fa': '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. برای این کار از خاصیت های <code>flex-direction</code> و <code>justify-content</code> استفاده کنید.</p><p>توجه داشته باشید وقتی که <span class="en-font">flex-direction</span> مقادیر <span class="en-font">row-reverse</span> یا <span class="en-font">column-reverse</span> داشته باشد شروع و پایان معکوس می شود. </p>',
      'zh-cn': '<p>帮助青蛙们回到它们的荷叶上。尽管它们看上去离的很近，需要用<code>flex-direction</code>和<code>justify-content</code>来帮它们到那里。</p><p>注意当你调转行或列的方向后，flex-start和flex-end对应的方向也被调转了。</p>',
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
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p><p>Nota que cuando es una columna, <code>justify-content</code> cambia a vertical y <code>align-items</code> a horizontal.</p>',
      'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p><p>Remarquez que quand la direction est en colonne, <code>justify-content</code> change pour la verticale et <code>align-items</code> pour l\'horizontale.</p>',
      'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p><p>Заметь, когда в качестве направления выбрана колонка, то <code>justify-content</code> влияет на вертикальное выравнивание, а <code>align-items</code> на горизонтальное.</p>',
      'fa': '<p> به قورباغه ها کمک کنید تا بخ نیلوفرهای آبی خود برسند برای این کار از خاصیت های <code>flex-direction</code> و <code>justify-content</code> استفاده کنید.</p><p>توجه داشته باشید وقتی <span class="en-font">flex-direction</span> مقدار <span class="en-font">column</span> داشته باشد, محور <code>justify-content</code> عمودی و <code>align-items</code> افقی می شود.</p>',
      'zh-cn': '<p>用<code>flex-direction</code>和<code>justify-content</code>来帮助青蛙找到他们的方向</p><p>注意当flex以列为方向时，<code>justify-content</code>控制纵向对齐，<code>align-items</code>控制横向对齐。</p>',
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
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p>',
      'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p>',
      'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p>',
      'fa': '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. با استفاده از <code>flex-direction</code> و <code>justify-content</code> این کار را انجام دهید.</p>',
      'zh-cn': '<p>用<code>flex-direction</code>和<code>justify-content</code>来帮助青蛙回到他们的荷叶上。</p>',
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
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code>, <code>justify-content</code>, y <code>align-items</code>.</p>',
      'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code>, <code>justify-content</code>, et <code>align-items</code>.</p>',
      'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>',
      'fa': '<p>به قورباغه ها کمک کنید با استفاده از خاصیت های <code>flex-direction</code>, <code>justify-content</code> و <code>align-items</code> این کار را انجام دهید.</p>',
      'zh-cn': '<p>用<code>flex-direction</code>，<code>justify-content</code>，以及，<code>align-items</code>来帮助青蛙回到他们的荷叶上。</p>',
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
      'de': '<p>Manchmal reicht es nicht aus, die horizontale oder vertikale Ausrichtung eines Containers umzukehren. In so einem Fall k&ouml;nnen wir die <code>order</code>-Eigenschaft f&uuml;r einzelne Elemente verwenden. Standardm&auml;&szlig;ig haben alle Element den Wert 0, aber wir k&ouml;nnen die Eigenschaft verwenden, um ihn auf eine positive oder negative ganze Zahl zu setzen.</p><p>Benutze die <code>order</code>-Eigenschaft, um die Fr&ouml;schen entsprechend ihrer Seerosenbl&auml;tter anzuordnen.</p>',
      'pt-br': '<p>Às vezes, reverter a ordem de uma coluna ou de um container não é suficiente. Nesses casos, podemos aplicar a propriedade <code>order</code> para itens individuais. Por padrão, itens tem um valor de 0, mas nós podemos usar essa propriedade para alterar para um valor inteiro positivo ou negativo.</p><p>Use a propriedade <code>order</code> para reordenar os sapos de acordo com suas vitórias-régias.</p>',
      'es': '<p>A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad <code>order</code> para elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.</p><p>Usa la propiedad <code>order</code> para reordenar las ranas de acuerdo a sus hojas de lirio.</p>',
      'fr': '<p>Parfois, inverser l\'ordre de la rangée ou la colonne ne suffit pas. Dans ces cas, on peut appliquer la propriété <code>order</code> à des éléments individuels. Par défaut, les éléments ont une valeur de 0, mais on peut utiliser cette propriété pour changer la valeur à un entier positif ou négatif.</p><p>Utilisez la propriété <code>order</code> pour réorganiser les grenouilles par rapport à leurs nénuphars.</p>',
      'ru': '<p>Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code>order</code> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.</p><p>Используй свойство <code>order</code>, чтоб разместить лягушат на своих лилиях.</p>',
      'fa': '<p>گاهی اوقات ما نیاز داریم فقط ایتم ها را جابه جا کنیم. برای این کار خاصیت <code>order</code> استافده می کنیم. به صورت پیشفرض آیتم ها مقدار <span class="en-font">0</span> دارند, اما با استفاده از این خاصیت شما می توانید مقدار مثبت و منفی برای آیتم ها تعیین کنید. <p>با استفاده از خاصیت <code>order</code> می توانید ترتیب نشستن قورباغه ها روی نیلوفرهای آبی خود را تعیین کنید.</p>',
      'zh-cn': '<p>有时候仅仅调转行或列的方向是不够的。在这些情况，我们可以设置单个元素的<code>order</code>属性。元素的属性默认值为0，但是我们设置这个属性为正数或负数。</p><p>用<code>order</code>来调整青蛙的顺序。</p>',
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
      'es': '<p>Usa la propiedad <code>order</code> para enviar la rana de color rojo a su hoja de lirio.</p>',
      'fr': '<p>Utilisez la propriété <code>order</code> pour envoyer la grenouille rouge à son nénuphar.</p>',
      'ru': '<p>Используй свойство <code>order</code>, чтоб отправить красного лягушонка на его лилию.</p>',
      'fa': '<p>با استفاده از خاصیت <code>order</code> قورباغه قرمز را به نیلوفر آبی خود بفرستید.</p>',
      'zh-cn': '<p>用<code>order</code>属性来把红青蛙送回它的荷叶去。</p>',

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
      'es': '<p>Otra propiedad que puedes aplicar a elementos individuales es <code>align-self</code>. Esta propiedad acepta los mismos valores de <code>align-items</code> y sus valores son usados para un elemento específico</p>',
      'fr': '<p>Une autre propriété que vous pouvez appliquer sur des éléments individuels est <code>align-self</code>. Cette propriété accepte les mêmes valeurs que <code>align-items</code>, mais s\'applique seulement à l\'élément ciblé.</p>',
      'ru': '<p>Еще одно свойство, которое ты можешь применить к определенному элементу это <code>align-self</code>. Это свойство принимает те же значения, что и <code>align-items</code>.</p>',
      'fa': '<p>خاصیت دیگری وجود دارد که به شما امکان تراز بندی فردی (یک ایتم) را می دهد، این خاصت <code>align-self</code> نام دارد. مقادیر این خاصیت دقیقا هما مقادیر خاصیت <code>align-items</code> است.</p>',
      'zh-cn': '<p>另一个你可以使用的控制单个元素的属性是<code>align-self</code>。这个属性接受和<code>align-items</code>一样的那些值。</p>',
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
      'es': '<p>Combina <code>order</code> con <code>align-self</code> para ayudar a las ranas a llegar a sus destinos</p>',
      'fr': '<p>Combinez <code>order</code> et <code>align-self</code> pour aider les grenouilles à arriver à destination.</p>',
      'ru': '<p>Используй <code>order</code> и <code>align-self</code> вместе, чтоб помочь лягушатам добраться к своим целям.</p>',
      'fa': '<p>با استفاده از خاصیت های <code>order</code> و <code>align-self</code> به قورباغه ها کمک کنید به نیلوفر آبی خود برسند.</p>',
      'zh-cn': '<p>用<code>order</code>和<code>align-self</code>的组合来帮助青蛙们到他们的目的地。</p>',
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
      'es': '<p>¡Oh, no! Todas las ranas están apretadas en una sola fila de hojas de lirio. Manos a la obra, vamos a distribuirlas correctamente usando la propiedad <code>flex-wrap</code>, la cual acepta los siguientes valores:</p><ul><li><code>nowrap</code>: Cada elemento se ajusta en una sola línea.</li><li><code>wrap</code>: los elementos se envuelven alrededor de líneas adicionales.</li><li><code>wrap-reverse</code>: Los elementos se envuelven alrededor de líneas adicionales en reversa.</li></ul>',
      'fr': '<p>Oh non! Les grenouilles sont écrasées dans une seule rangée de nénuphars. Distribuez-les en utilisant la propriété <code>flex-wrap</code>, qui accepte les valeurs suivantes&nbsp;:</p><ul><li><code>nowrap</code>&nbsp;: Tous les éléments sont tenus sur une seule ligne.</li><li><code>wrap</code>&nbsp;: Les éléments s\'enveloppent sur plusieurs lignes au besoin.</li><li><code>wrap-reverse</code>&nbsp;: Les éléments s\'enveloppent sur plusieurs lignes dans l\'ordre inversé.</li></ul>',
      'ru': '<p>О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства <code>flex-wrap</code>, которое принимает следующие значения:</p><ul><li><code>nowrap</code>: Размеры элементов устанавливаются автоматически, чтоб они поместились в один ряд.</li><li><code>wrap</code>: Элементы автоматически переносятся на новую строку.</li><li><code>wrap-reverse</code>: Элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li></ul>',
      'fa': '<p>همه قورباغه ها بر روی یک سطر از نیلوفر های آبی به صورت فشرده نشسته اند . با استفاده از خاصیت <code>flex-wrap</code> با آنها کمک کنید, این خاصیت مقادیر ریر را می پذیرد:</p><ul><li><code>nowrap</code>:  این مقدار پیشفرض است و تمامی آیتم ها در یک خط و در کنار هم قرار می‌گیرند.</li><li><code>wrap</code>:  با استفاده از این مقدار آیتم ها در چند خط قرار میگیرند.</li><li><code>wrap-reverse</code>: ین مقدار شبیه به wrap است اما به جای اینکه چیدمان آیتم ها از بالا به پایین باشد از پایین به بالا است.</li></ul>',
      'zh-cn': '<p>哦不！这些青蛙都挤到一行了。用<code>flex-wrap</code>属性把他们分散看。这个属性接受这些值：</p><ul><li><code>nowrap</code>: 所有的元素都在一行。</li><li><code>wrap</code>: 元素自动换成多行。</li><li><code>wrap-reverse</code>: 元素自动换成逆序的多行</li></ul>',

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
      'es': '<p>Ayuda a este ejercito de ranas a ordenarse en tres columnas usando una combinación de <code>flex-direction</code> y <code>flex-wrap</code>.</p>',
      'fr': '<p>Aidez cette armée de grenouille à former trois belles colonnes en utilisant une combinaison de <code>flex-direction</code> et <code>flex-wrap</code>.</p>',
      'ru': '<p>Помоги этой армии лягушат выстроится в три колонки с помощью комбинации <code>flex-direction</code> и <code>flex-wrap</code>.</p>',
      'fa': '<p>به ارتش قورباغه ها کمک کنید تا به صورت منظم در ستون های خود قرار بگیرند با استفاده از خاصیت های <code>flex-direction</code> و <code>flex-wrap</code> این کار را انجام دهید.</p>',
      'zh-cn': '<p>帮这些青蛙们排成整齐的散列。使用<code>flex-direction</code>和<code>flex-wrap</code>的组合。</p>'
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
      'es': '<p>Las dos propiedades <code>flex-direction</code> y <code>flex-wrap</code> son usadas a menudo en conjunto con la propiedad abreviada <code>flex-flow</code>, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio</p><p>Por ejemplo, puedes usar <code>flex-flow</code> para establecer filas y envolverlas.</p><p>Trata de usar <code>flex-flow</code> para volver a realizar el nivel anterior.</p>',
      'fr': '<p>Les deux propriétés <code>flex-direction</code> et <code>flex-wrap</code> sont utilisées tellement souvent ensembles que le raccourci <code>flex-flow</code> a été créé pour les combiner. Ce raccourci accepte les valeurs des deux propriétés séparées par un espace.</p><p>Par exemple, vous pouvez utiliser <code>flex-flow: row wrap</code> pour configurer les colonnes et les faire s\'envelopper.</p><p>Essayez d\'utiliser <code>flex-flow</code> pour répéter le niveau précédent.</p>',
      'ru': '<p>Два свойства <code>flex-direction</code> и <code>flex-wrap</code> используются так часто вместе, что было создано свойство <code>flex-flow</code> для их комбинирования. Это свойство принимает значения двух этих свойств, разделеные пробелом.</p><p>Например, ты можешь использовать <code>flex-flow: row wrap</code>, чтоб элементы располагались в ряд и автоматически переносились на новую строку.</p><p>Попробуй использовать <code>flex-flow</code>, чтоб повторить предыдущий уровень.</p>',
      'fa': '<p>مطمئنا با قابیل مختصر نویسی در <span class="en-font">css</span> آشنا هستید شما می تواندی خاصیت های <code>flex-direction</code> و <code>flex-wrap</code> را در خاصیت <code>flex-flow</code> بنویسید.</p><p>برای مثال, شما می توانید برای این خاصیت به این صورت <code>flex-flow: row wrap</code> مقدار دهید.</p><p>دوباره برای مرحله قبل از خاصیت <code>flex-flow</code> استفاده کنید.</p>',
      'zh-cn': '<p><code>flex-direction</code>和<code>flex-wrap</code>两个属性经常会一起使用。所以有缩写属性<code>flex-flow</code>。这个缩写属性接受两个属性的值，两个值中间以空格隔开。</p><p>举个例子，你可以用<code>flex-flow: row wrap</code>。</p><p>试着用<code>flex-flow</code>来重复上一关的任务</p>'
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
      'es': '<p>Las ranas están repartidas por todo el estanque, pero las hojas de lirio estan agrupadas en la parte superior. Puedes usar <code>align-content</code> para establecer como multiples líneas están separadas una de otra. Esta propiedad acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Las líneas se posicionan en la parte superior del contenedor.</li><li><code>flex-end</code>: Las líneas se posicionan en la parte inferior del contenedor.</li><li><code>center</code>: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.</li><li><code>space-between</code>: Las líneas se muestran con la misma distancia entre ellas.</li><li><code>space-around</code>: Las líneas se muestran con la misma separación alrededor de ellas.</li><li><code>stretch</code>: Las líneas se estiran para ajustarse al contenedor.</li></ul><p>Esto puede ser confuso, pero <code>align-content</code> determina el espacio entre las líneas, mientras que <code>align-items</code> determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, <code>align-content</code> no tiene efecto.</p>',
      'fr': '<p>Les grenouilles sont éparpillées partout dans l\'étang, mais les nénuphars sont amassés dans le haut. Vous pouvez utiliser <code>align-content</code> pour définir comment plusieurs lignes sont espacées de l\'une à l\'autre. Cette propriété prend les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les lignes sont amassées dans le haut du conteneur.</li><li><code>flex-end</code>: Les lignes sont amassées dans le bas du conteneur.</li><li><code>center</code>&nbsp;: Les lignes sont amassées dans le centre vertical du conteneur.</li><li><code>space-between</code>&nbsp;: Les lignes s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les lignes s\'affichent avec un espace égal autour d\'eux.</li><li><code>stretch</code>&nbsp;: Les lignes sont étirées pour s\'adapter au conteneur.</li></ul><p>Ceci peut être mélangeant, mais <code>align-content</code> détermine l\'espace entre les lignes, alors que <code>align-items</code> détermine comment les éléments dans leur ensemble sont alignées à l\'intérieur du conteneur. Quand il n\'y a qu\'une seule ligne, <code>align-content</code> n\'a aucun effet.</p>',
      'ru': '<p>Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать <code>align-content</code>, чтоб указать, как несколько рядов, должны отделятся друг от друга. Данное свойство принимает следующие значения:</p><ul><li><code>flex-start</code>: Ряды группируются в верхней части контейнера.</li><li><code>flex-end</code>: Ряды группируются в нижней части контейнера.</li><li><code>center</code>: Ряды группируются вертикально по центру контейнера.</li><li><code>space-between</code>: Ряды отображаются с одинаковыми расстояниями между ними.</li><li><code>space-around</code>: Ряды отображаются с одинаковыми расстояниями вокруг них.</li><li><code>stretch</code>: Ряды расстягиваются, чтоб заполнить контейнер равномерно.</li></ul><p>Это может запутатать, но <code>align-content</code> отвечает за расстоянием между рядами, пока <code>align-items</code> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <code>align-content</code> ни на что не влияет.</p>',
      'fa': '<p>قورباغه ها در سراسر برکه پخش شده اند, اما نیلوفر های آبی در بالای برکه هستند. شما با استفاده از <code>align-content</code> آن ها را به صورت ردیفی به بالا هدایت کنید. این خاصیت مقادیر زیر را می پذیرد:</p><ul><li><code>flex-start</code>: با این مقدار <span class="en-font">flex-line</span> ها در ابتدای <span class="en-font">flex-container</span> جمع می‌شوند.</li><li><code>flex-end</code>: با این مقدار <span class="en-font">flex-line</span> ها در انتهای <span class="en-font">flex-container</span> جمع می‌شوند.</li><li><code>center</code>: با این مقدار <span class="en-font">flex-line</span> ها در وسط <span class="en-font">flex-container</span> جمع میشوند.</li><li><code>space-between</code>: با این مقدار فضای خالی به طور مساوی بین <span class="en-font">flex line</span> ها توزیع میشود. خط اول در ابتدا و خط آخر در انتهای <span class="en-font">flex container</span> قرار می‌گیرند و بقیه خطوط در بین این ۲ خطر قرار می‌گیرند.</li><li><code>space-around</code>: فضای خالی به طور مساوی بین <span class="en-font">flex-line</span> ها تقسیم می‌شود.</li><li><code>stretch</code>:  با این مقدار <span class="en-font">flex-line</span> ها کشیده می‌شوند و فضای خالی را پر می کنند (این مقدار پیشفرض است).</li></ul>',
      'zh-cn': '<p>青蛙们在池塘里到处都是，然而荷叶都在顶部。你可以使用<code>align-content</code>来决定行与行之间隔多远。这个属性接受这些值：</p><ul><li><code>flex-start</code>: 多行都集中在顶部。</li><li><code>flex-end</code>: 多行都集中在底部。</li><li><code>center</code>: 多行居中。</li><li><code>space-between</code>: 行与行之间保持相等距离。</li><li><code>space-around</code>: 每行的周围保持相等距离。</li><li><code>stretch</code>: 每一行都被拉伸以填满容器。</li></ul><p>这可能有些容易混淆，但<code>align-content</code>决定行之间的间隔，而<code>align-items</code>决定元素整体在容器的什么围着。只有一行的时候<code>align-content</code>没有任何效果。</p>',
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
      'es': '<p>Ahora, la corriente ha agrupado las hojas de lirio en la parte inferior. Usa <code>align-content</code> para guiar las ranas hasta allí.</p>',
      'fr': '<p>Maintenant, le courant a amassé tous les nénuphars dans le bas de l\'étang. Utilisez <code>align-content</code> pour guider les grenouilles vers le bas.</p>',
      'ru': '<p>Теперь течение сгруппировало лилии в нижней части. Используй <code>align-content</code>, чтоб направить лягушат туда.</p>',
      'fa': '<p>در حال حاضر نیلوفر های آبی به پایین برکه حرکت کرده اند. با استفاده از <code>align-content</code> قورباغه ها را هدایت کنید.</p>',
      'zh-cn': '<p>现在水流把荷叶都推到底部了。用<code>align-content</code>来指引青蛙到那里。</p>'
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
      'es': '<p>Las ranas han tenido una fiesta, pero es momento de volver a casa. Usa una combinación de <code>flex-direction</code> y <code>align-content</code> para llevarlas a sus hojas de lirio.</p>',
      'fr': '<p>Les grenouilles ont fait la fête, mais elles doivent maintenant retourner à la maison. Utilisez une combinaison de <code>flex-direction</code> et <code>align-content</code> pour les ramener à leurs nénuphars.</p>',
      'ru': '<p>Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию <code>flex-direction</code> и <code>align-content</code>, чтоб отправить их к своим лилиям.</p>',
      'fa': '<p>قورباغه ها یک مهمونی داشتند, اما الان دیگه زمان رفتن به خانه است. با استفاده از خاصیت های <code>flex-direction</code> و <code>align-content</code> کمک کنید به نیلوفر های آبی خود برسند.</p>',
      'zh-cn': '<p>青蛙们开完了派对，现在该回家了。用<code>flex-direction</code>和<code>align-content</code>的组合来把他们带回各自的家</p>'
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
      'zh-cn': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'de': '<p>Bringe die Fr&ouml;sche ein letztes Mal mit allen gelernten CSS-Eigenschaften nach Hause:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'pt-br': '<p>Leve os sapos para casa uma última vez utilizando as propriedades CSS que você aprendeu:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'es': '<p>Traiga a las ranas a su casa una vez más usando las propiedades CSS que aprendiste:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'fr': '<p>Ramenez les grenouilles à la maison une dernière fois en utilisant les propriétés CSS que vous avez apprises&nbsp;:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'ru': '<p>Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'fa': '<p>برای آخرین بار با استفاده از <span class="en-font">Css</span> به قورباغه ها کمک کنید تا به مقصد خود برسند. برای انجام این کار از خاصیت های زیر استفاده کنید :</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'zh-cn': '<p>用这些你所学的CSS属性，最后一次把青蛙们带回家:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
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
    'es': '<p>¡Tú ganas! gracias a su dominio de flexbox, fuiste capaz de ayudar a todas las ranas a ir a sus hojas de lirio. ¡Basta mirar lo felices que son!</p><p>Si tu encontras esto divertido, revisa mis otros projectos en mi <a href="http://thomaspark.co">blog</a> o <a href="http://twitter.com/thomashpark">Twitter</a> y asegurese de compartir Flexbox Froggy con tus amigos.</p>',
    'fr': '<p>Vous avez gagné! Grâce à votre maîtrise des flexbox, vous avez été capable d\'aider toutes les grenouilles à trouver leurs nénuphars. Regardez comment elles sautent de joie!</p><p>Si vous avez trouver cela amusant, regardez mes autres projets sur mon <a href="http://thomaspark.co">blog</a> ou mon <a href="http://twitter.com/thomashpark">Twitter</a>, et assurez-vous de partager Flexbox Froggy avec vos amis!</p>',
    'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделится этой игрой со своими друзьями!</p>',
    'fa': '<p>شما برنده شدید! به همه قورباغه ها کمک کردید تا به نیلوفر های آبی خود برسند. آن ها خیلی خوشحال هستن و از شما تشکر می کنن!</p><p>برای مشاهده پروژه های دیگر از طریق <a href="http://thomaspark.co">وبلاگ</a> یا <a href="http://twitter.com/thomashpark">تویتتر</a> مرا دنبال کنید, و حتما بازی آموزش فلکس باکس توسط قورباغه را با دوستان خود به اشتراک بگذارید !</p>',
    'zh-cn': '<p>你赢了!正因为你对flexbox的了解，你帮助所有的青蛙回到了他们的荷叶上！看看他们跳的多开心！</p><p>如果你觉得这个网站很有趣，也来看看我<a href="http://thomaspark.co">博客</a>或<a href="http://twitter.com/thomashpark">Twitter</a>上的其他项目，而且记得和朋友分享Flexbox Froggy哦!</p>',
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
