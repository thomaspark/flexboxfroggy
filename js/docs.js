var docs = {
  'align-content': {
    'en': '<p>Aligns a flex container\'s lines within the flex container when there is extra space on the cross-axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'de': '<p>Richtet die Zeilen innerhalb eines flex-Containers aus, wenn auf der Querachse Platz ist.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'pt-br': '<p>Alinha as linhas dentro de um container flex quando há espaço sobrando no eixo cruzado.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'es': '<p>Alinea las líneas de un contenedor flex cuando exista más espacio en el eje transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'fr': '<p>Aligne les lignes d\'un conteneur flex à l\'intérieur du conteneur flex quand il y a de l\'espace superflu sur l\'axe transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ru': '<p>Выравнивает ряды flex-контейнера внутри него (работает только, если элементы расположены больше чем в один ряд).</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'fa': '<p>فرض کنید که ارتفاع flex-container بیشتر از فضایی است که flex-lineها گرفته اند و اصطلاحا مقداری فضای خالی در flex-container وجود دارد. به کمک خاصیت align-content شما می‌توانید محل قرارگیری این flex-line ها را مشخص کنید که از نظر محور عمودی در کجا قرار گیرند.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ko': '<p>세로선 상에 여분의 공간이 있는 경우 Flex 컨테이너 사이의 간격을 조절합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>'
  },
  'align-items': {
    'en': '<p>Aligns flex items along the cross axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Querachse aus.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pt-br': '<p>Alinha itens flex ao longo do eixo cruzado.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'es': '<p>Alinea elementos Flex a lo largo del eje transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fr': '<p>Aligne les éléments flex selon l\'axe transversal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль пересекаемой оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fa': '<p>این خاصیت نحوه چینش Flex itemها را در محور Cross مشخص می کند. این خاصیت مانند justify-content  است تنها تفاوت آنها در مقادیرشان است.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ko': '<p>Flex 요소를 세로선 상에서 정렬합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'align-self': {
    'en': '<p>Aligns a flex item along the cross axis, overriding the <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Querachse aus, und &uuml;berschreibt den Wert von <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pt-br': '<p>Alinha um item flex ao longo do eixo cruzado, substituindo o valor de <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'es': '<p>Alinea un elemento flex a lo largo del eje transversal, anulando el valor de <code>align-items</code></p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fr': '<p>Aligne un élément flex selon l\'axe transversal, outrepassant la valeur de <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элемент вдоль пересекаемой оси, перекрывая значения свойства <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'fa': '<p>با استفاده از این خاصیت می‌توانید نحوه قرار گرفتن عمودی هر flex item را مشخص کنید. مقادیر این خاصیت دقیقا همان مقادیر خاصیت align-items است. <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ko': '<p>지정된 <code>align-items</code> 값을 무시하고 Flex 요소를 세로선 상에서 정렬합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'flex-direction': {
    'en': '<p>Defines the direction of the main axis.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'de': '<p>Legt die Ausrichtung der Hauptachse fest.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'es': '<p>Define la dirección del eje principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'pt-br': '<p>Define a direção do eixo principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'fr': '<p>Définit la direction de l\'axe principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ru': '<p>Задает направление основной оси.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'fa': '<p>جهت آیتم ها را مشخص می کند.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ko': '<p>정렬할 방향을 지정합니다.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>'
  },
  'flex-flow': {
    'en': '<p>Shorthand property for <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'de': '<p>Kurzschreibweise f&uuml;r <code>flex-direction</code> und <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'pt-br': '<p>Propriedade abreviada para <code>flex-direction</code> e <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'es': '<p>Abreviación de las propiedades de <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code></p>',
    'fr': '<p>Raccourci pour <code>flex-direction</code> et <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ru': '<p>Свойство для быстрой записи <code>flex-direction</code> и <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'fa': '<p>اکنون به کمک flex-flow شما می‌توانید مقادیری که برای <code>flex-direction</code> و <code>flex-wrap</code> در نظر دارید را در یک خاصیت بنویسید.</p>',
    'ko': '<p>다음의 속성들을 간략히 한 속성입니다: <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>'
  },
  'flex-wrap': {
    'en': '<p>Specifies whether flex items are forced on a single line or can be wrapped on multiple lines.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'de': '<p>Legt fest, ob die flex-Element in eine Zeile gezw&auml;ngt werden oder auf mehrere Zeilen umgebrochen werden k&ouml;nnen.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'pt-br': '<p>Especifica se os itens flex são forçados em um linha única ou podem quebrar em múltiplas linhas.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'es': '<p>Especifica si los elementos flex son forzados a una sola línea o pueden ser envueltos en multiples líneas.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'fr': '<p>Spécifie si les éléments flex sont forcés à être sur une seule ligne ou peuvent être enveloppés sur plusieurs lignes.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ru': '<p>Указывает, нужно ли чтоб элементы принудительно находились в одном ряду или автоматически переносились.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'fa': '<p>در حالت عادی همه flex item ها در یک خط قرار می‌گیرند. به کمک خاصیت flex-wrap شما می‌توانید مشخص کنید که flex item ها در چندین خط قرار بگیرند.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ko': '<p>Flex 요소들을 한 줄 또는 여러 줄에 걸쳐 정렬합니다.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>'
  },
  'justify-content': {
    'en': '<p>Aligns flex items along the main axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Hauptachse aus.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'pt-br': '<p>Alinha os itens flex ao longo do eixo principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'es': '<p>Alinea los elementos flex a lo largo del eje principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'fr': '<p>Aligne les éléments flex selon l\'axe principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль главной оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'fa': '<p>با استفاده از این خاصیت می‌توانید نحوه چیدمان آیتم‌ها بر روی محور اصلی را تعیین کنید (به یاد داشته باشید همانطور که گفتیم اگر خاصیت flex-direction برابر column یا column-reverse باشد، محور اصلی عمودی خواهد بود).</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ko': '<p>Flex 요소들을 가로선 상에서 정렬합니다.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>'
  },
  'order': {
    'en': '<p>Specifies the order of the flex item.</p><code>&lt;integer&gt;</code>',
    'de': '<p>Legt die Reihenfolge der flex-Elemente fest.</p><code>&lt;integer&gt;</code>',
    'pt-br': '<p>Especifica a ordem de um item flex.</p><code>&lt;integer&gt;</code>',
    'es': '<p>Especifica el orden de los elementos flex.</p><code>&lt;integer&gt;</code>',
    'fr': '<p>Spécifie l\'ordre de l\'élément flex.</p><code>&lt;integer&gt;</code>',
    'ru': '<p>Указывает порядок flex-элемента.</p><code>&lt;integer&gt;</code>',
    'fa': '<p>به کمک خاصیت order شما می‌توانید ترتیب چینش Flex itemها را مشخص کنید. مقادیر این خاصیت اعداد می‌باشند و هرچه عدد کوچکتر باشد اولویت آیتم بالاتر خواهد بود..</p><code>&lt;integer&gt;</code>',
    'ko': '<p>Flex 요소의 순서를 지정합니다.</p><code>&lt;integer&gt;</code>'
  }
};
