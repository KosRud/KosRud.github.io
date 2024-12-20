import{_ as n,c as a,a as l,o as p}from"./chunks/framework.CBd7paq1.js";const h=JSON.parse('{"title":"Clean code advice","description":"","frontmatter":{"head":[["link",{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}]],"title":"Clean code advice"},"headers":[],"relativePath":"students/js/clean.md","filePath":"students/js/clean.md","lastUpdated":1703351458000}'),o={name:"students/js/clean.md"};function e(t,s,c,r,i,y){return p(),a("div",null,s[0]||(s[0]=[l(`<p>Some advice for keeping your code clean and manageable</p><h2 id="long-functions" tabindex="-1">Long functions <a class="header-anchor" href="#long-functions" aria-label="Permalink to &quot;Long functions&quot;">​</a></h2><p>When a function becomes too long, extract parts of it into separate functions.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> DrawEverything</span><span style="color:#24292E;">(</span><span style="color:#E36209;">canvas</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// lots of code</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Becomes:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> DrawEverything</span><span style="color:#24292E;">(</span><span style="color:#E36209;">canvas</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">	drawBackground</span><span style="color:#24292E;">(canvas);</span></span>
<span class="line"><span style="color:#6F42C1;">	drawEnemies</span><span style="color:#24292E;">(canvas);</span></span>
<span class="line"><span style="color:#6F42C1;">	drawPlayer</span><span style="color:#24292E;">(canvas);</span></span>
<span class="line"><span style="color:#6F42C1;">	drawProjectiles</span><span style="color:#24292E;">(canvas);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="long-classes" tabindex="-1">Long classes <a class="header-anchor" href="#long-classes" aria-label="Permalink to &quot;Long classes&quot;">​</a></h2><p>Same as long functions, try to break them up.</p><h2 id="too-many-arguments" tabindex="-1">Too many arguments <a class="header-anchor" href="#too-many-arguments" aria-label="Permalink to &quot;Too many arguments&quot;">​</a></h2><p>If you have a function with many arguments, create a class to group the related values into a single package.</p><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> printDocument</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#E36209;">	paperSize</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	marginLeft</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	marginRight</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	marginTop</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	marginBotton</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	numCopies</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	resolution</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	text</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	fontColor</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	fontSize</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	fontFamily</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	lineSpacing</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">	paragraphIndentation</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// do the printing</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Becomes:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Margin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">left</span><span style="color:#24292E;">, </span><span style="color:#E36209;">right</span><span style="color:#24292E;">, </span><span style="color:#E36209;">top</span><span style="color:#E36209;"> bottom</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> left;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> right;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> top;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.bottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> bottom;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> PrintParameters</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">paperSize</span><span style="color:#24292E;">, </span><span style="color:#E36209;">margin</span><span style="color:#24292E;">, </span><span style="color:#E36209;">numCopies</span><span style="color:#24292E;">, </span><span style="color:#E36209;">resolution</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.paperSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> paperSize;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.margin </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> margin;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.numCopies </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> numCopies;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.resolution </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> resolution;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Font</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">color</span><span style="color:#24292E;">, </span><span style="color:#E36209;">size</span><span style="color:#24292E;">, </span><span style="color:#E36209;">family</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.color </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> color;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.family </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> family;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> DocumentFormat</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">font</span><span style="color:#24292E;">, </span><span style="color:#E36209;">lineSpacing</span><span style="color:#24292E;">, </span><span style="color:#E36209;">paragraphIndentation</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.font </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> font;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.lineSpacing </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lineSpacing;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.paragraphIndentation </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> paragraphIndentation;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> TextDocument</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">text</span><span style="color:#24292E;">, </span><span style="color:#E36209;">format</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> text;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.format </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> format;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> printDocument</span><span style="color:#24292E;">(</span><span style="color:#E36209;">printParameters</span><span style="color:#24292E;">, </span><span style="color:#E36209;">textDocument</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">	// do the printing</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="too-many-attributes" tabindex="-1">Too many attributes <a class="header-anchor" href="#too-many-attributes" aria-label="Permalink to &quot;Too many attributes&quot;">​</a></h2><p>Similar to the previous issue, but instead of having too many function arguments, you have too many properties in a class.</p><p>When a class has too many properties, group them into new classes.</p><h2 id="data-duplication" tabindex="-1">Data duplication <a class="header-anchor" href="#data-duplication" aria-label="Permalink to &quot;Data duplication&quot;">​</a></h2><p>Avoid having multiple variables holding copies of the same value. If certain value can be trivially computed from existing variables, it&#39;s usually better to provide a function for computing it instead of storing it in a variable.</p><h4 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Player</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">health</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> health;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.isDead </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	receiveDamage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> amount;</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.isDead </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	heal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> amount;</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">&gt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.isDead </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Becomes:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Player</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">health</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> health;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	receiveDamage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> amount;</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	heal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> amount;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	getIsDead</span><span style="color:#24292E;"> ( ) {</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">&lt;=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><ul><li>Second variant is shorter, because there is no need to update <code>this.isDead</code> every time health changes.</li><li>In the second variant, it is impossible for the value to be incorrect as long as the function <code>isDead( )</code> is correct. In the first variant, forgetting to update <code>this.isDead</code> (or updating it incorrectly) will introduce a bug which can be difficult to find.</li></ul></div><h2 id="code-duplication-in-classes" tabindex="-1">Code duplication in classes <a class="header-anchor" href="#code-duplication-in-classes" aria-label="Permalink to &quot;Code duplication in classes&quot;">​</a></h2><p>If you have multiple classes with similar methods and/or attributes, consider extracting the common part into a base class and using inheritance.</p><h4 id="example-3" tabindex="-1">Example <a class="header-anchor" href="#example-3" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Vector2</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Player</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Vector2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	move</span><span style="color:#24292E;">(</span><span style="color:#E36209;">offset</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.x </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.x;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.y </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.y;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// Player-related methods</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Skeleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Vector2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &quot;Skeleton&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	move</span><span style="color:#24292E;">(</span><span style="color:#E36209;">offset</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.x </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.x;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.y </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.y;</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;rattling of bones echoes through the dungeon&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// Skeleton-related methods</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Slime</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Vector2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &quot;Slime&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	move</span><span style="color:#24292E;">(</span><span style="color:#E36209;">offset</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.x </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.x;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.y </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.y;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// Slime-related methods</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Becomes:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Vector2</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Character</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Vector2</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	move</span><span style="color:#24292E;">(</span><span style="color:#E36209;">offset</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.x </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.x;</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.position.y </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> offset.y;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Player</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Character</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		super</span><span style="color:#24292E;">(name);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// Player-related methods</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Skeleton</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Character</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#005CC5;">		super</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Skeleton&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	move</span><span style="color:#24292E;">(</span><span style="color:#E36209;">offset</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		super</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">move</span><span style="color:#24292E;">(offset);</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;rattling of bones echoes through the dungeon&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// Skeleton-related methods</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Slime</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Character</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#005CC5;">		super</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Slime&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">	// Slime-related methods</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#6A737D;">	// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="code-duplication-in-functions" tabindex="-1">Code duplication in functions <a class="header-anchor" href="#code-duplication-in-functions" aria-label="Permalink to &quot;Code duplication in functions&quot;">​</a></h2><p>If you have multiple functions with similar code, consider extracting the common part into a separate function.</p><h4 id="example-4" tabindex="-1">Example <a class="header-anchor" href="#example-4" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> castFireball</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;preparing to cast...&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// accidental inconsistency</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;reading the spell scroll: Fireball...&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;a massive sphere of flame flies towards the enemy!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> castHeal</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;preparing to cast a spell...&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// accidental inconsistency</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;reading the spell scroll: Heal...&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;you summon healing energies, which make you feel better&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Becomes:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> readSpell</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;preparing to cast a spell...&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`reading the spell scroll: \${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}...\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> castFireball</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6F42C1;">	readSpell</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Fireball&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;a massive sphere of flame flies towards the enemy!&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> castHeal</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6F42C1;">	readSpell</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Heal&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;you summon healing energies, which make you feel better&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>In the first version you could modify one of the functions and forget to modify the other, introducing an inconsistency.</p><p>The second version protects you from this.</p></div><h2 id="panic-early" tabindex="-1">Panic early <a class="header-anchor" href="#panic-early" aria-label="Permalink to &quot;Panic early&quot;">​</a></h2><p>If you have a feeling that something might go wrong in your code, implement a sanity check to receive an immediate warning. Javascript is particularly notorious for pretending like everything is fine and continuing the execution with corrupt data (undefined, etc).</p><p>MDN link: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw" target="_blank" rel="noreferrer">throw statement</a>.</p><h4 id="example-5" tabindex="-1">Example <a class="header-anchor" href="#example-5" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Player</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">health</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> health;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	receiveDamage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">-=</span><span style="color:#24292E;"> amount;</span></span>
<span class="line"><span style="color:#24292E;">		</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">			this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	heal</span><span style="color:#24292E;">(</span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> amount;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#6F42C1;">	getIsDead</span><span style="color:#24292E;"> ( ) {</span></span>
<span class="line"><span style="color:#D73A49;">		if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">		   throw</span><span style="color:#032F62;"> &quot;health should never be negative!&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">		   // something clearly went wrong, no reason to continue execution!</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.health </span><span style="color:#D73A49;">==</span><span style="color:#005CC5;"> 0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="magic-numbers" tabindex="-1">Magic numbers <a class="header-anchor" href="#magic-numbers" aria-label="Permalink to &quot;Magic numbers&quot;">​</a></h2><p>When using numeric constants (for example, <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>π</mi></mrow><annotation encoding="application/x-tex">\\pi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.43056em;"></span><span class="strut bottom" style="height:0.43056em;vertical-align:0em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.03588em;">π</span></span></span></span>), create named constants instead of writing the values directly in your code.</p><h4 id="example-6" tabindex="-1">Example <a class="header-anchor" href="#example-6" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Circle</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">radius</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> radius;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	getCircumference</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.radius </span><span style="color:#D73A49;">*</span><span style="color:#005CC5;"> 2.0</span><span style="color:#D73A49;"> *</span><span style="color:#005CC5;"> 3.1415</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	getArea</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> 3.14</span><span style="color:#D73A49;"> *</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.radius </span><span style="color:#D73A49;">**</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Becomes:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> PI</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 3.1415</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Circle</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">	constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">radius</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#005CC5;">		this</span><span style="color:#24292E;">.radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> radius;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	getCircumference</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.radius </span><span style="color:#D73A49;">*</span><span style="color:#005CC5;"> 2.0</span><span style="color:#D73A49;"> *</span><span style="color:#005CC5;"> PI</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">	getArea</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#D73A49;">		return</span><span style="color:#005CC5;"> PI</span><span style="color:#D73A49;"> *</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.radius </span><span style="color:#D73A49;">**</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>In the first variant different precision was used for <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>π</mi></mrow><annotation encoding="application/x-tex">\\pi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.43056em;"></span><span class="strut bottom" style="height:0.43056em;vertical-align:0em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.03588em;">π</span></span></span></span> in different places. This can create confusion.</p><p>Creating a constant ensures the value is always the same throughout the code.</p></div>`,50)]))}const u=n(o,[["render",e]]);export{h as __pageData,u as default};
