var docs = {
  'align-content': {
    'en': '<p>Aligns a flex container\'s lines within the flex container when there is extra space on the cross-axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'de': '<p>Richtet die Zeilen innerhalb eines flex-Containers aus, wenn auf der Querachse Platz ist.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'pt-br': '<p>Alinha as linhas dentro de um container flex quando há espaço sobrando no eixo cruzado.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>',
    'ir-fa': '<p>فرض کنید که ارتفاع flex-container بیشتر از فضایی است که flex-lineها گرفته اند و اصطلاحا مقداری فضای خالی در flex-container وجود دارد. به کمک خاصیت align-content شما می‌توانید محل قرارگیری این flex-line ها را مشخص کنید که از نظر محور عمودی در کجا قرار گیرند.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>stretch</code>'
  },
  'align-items': {
    'en': '<p>Aligns flex items along the cross axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Querachse aus.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pt-br': '<p>Alinha itens flex ao longo do eixo cruzado.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ir-fa': '<p>این خاصیت نحوه چینش Flex itemها را در محور Cross مشخص می کند. این خاصیت مانند justify-content  است تنها تفاوت آنها در مقادیرشان است.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'align-self': {
    'en': '<p>Aligns a flex item along the cross axis, overriding the <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Querachse aus, und &uuml;berschreibt den Wert von <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'pt-br': '<p>Alinha um item flex ao longo do eixo cruzado, substituindo o valor de <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ir-fa': '<p>با استفاده از این خاصیت می‌توانید نحوه قرار گرفتن عمودی هر flex-item را مشخص کنید. مقادیر این خاصیت دقیقا همان مقادیر خاصیت align-items است. <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'flex-direction': {
    'en': '<p>Defines the direction of the main axis.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'de': '<p>Legt die Ausrichtung der Hauptachse fest.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'es': '<p>Define la dirección del eje principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'pt-br': '<p>Define a direção do eixo principal.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ir-fa': '<p>جهت آیتم ها را مشخص می کند.</p><code>row</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>'
  },
  'flex-flow': {
    'en': '<p>Shorthand property for <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'de': '<p>Kurzschreibweise f&uuml;r <code>flex-direction</code> und <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'pt-br': '<p>Propriedade abreviada para <code>flex-direction</code> e <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ir-fa': '<p>اکنون به کمک flex-flow شما می‌توانید مقادیری که برای <code>flex-direction</code> و <code>flex-wrap</code> در نظر دارید را در یک خاصیت بنویسید.</p>'
  },
  'flex-wrap': {
    'en': '<p>Specifies whether flex items are forced on a single line or can be wrapped on multiple lines.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'de': '<p>Legt fest, ob die flex-Element in eine Zeile gezw&auml;ngt werden oder auf mehrere Zeilen umgebrochen werden k&ouml;nnen.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'pt-br': '<p>Especifica se os itens flex são forçados em um linha única ou podem quebrar em múltiplas linhas.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ir-fa': '<p>در حالت عادی همه flex-item ها در یک خط قرار می‌گیرند. به کمک خاصیت flex-wrap شما می‌توانید مشخص کنید که flex-item ها در چندین خط قرار بگیرند.</p><code>nowrap</code> <code>wrap</code> <code>wrap-reverse</code>'
  },
  'justify-content': {
    'en': '<p>Aligns flex items along the main axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'de': '<p>Richtet die flex-Elemente entlang der Hauptachse aus.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'pt-br': '<p>Alinha os itens flex ao longo do eixo principal.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
    'ir-fa': '<p>با استفاده از این خاصیت می‌توانید نحوه چیدمان آیتم‌ها بر روی محور اصلی را تعیین کنید (به یاد داشته باشید همانطور که گفتیم اگر خاصیت flex-direction برابر column یا column-reverse باشد، محور اصلی عمودی خواهد بود) ..</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>',
  },
  'order': {
    'en': '<p>Specifies the order of the flex item.</p><code>&lt;integer&gt;</code>',
    'de': '<p>Legt die Reihenfolge der flex-Elemente fest.</p><code>&lt;integer&gt;</code>',
    'pt-br': '<p>Especifica a ordem de um item flex.</p><code>&lt;integer&gt;</code>',
    'ir-fa': '<p>به کمک خاصیت order شما می‌توانید ترتیب چینش Flex itemها را مشخص کنید. مقادیر این خاصیت اعداد می‌باشند و هرچه عدد کوچکتر باشد اولویت آیتم بالاتر خواهد بود..</p><code>&lt;integer&gt;</code>'
  }
};
