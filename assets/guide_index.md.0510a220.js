import{_ as n,c as a,o as s,a as t}from"./app.ed298d7e.js";const g='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Integration","slug":"integration"},{"level":2,"title":"Creating your first Chart","slug":"creating-your-first-chart"},{"level":2,"title":"Using with Nuxt","slug":"using-with-nuxt"},{"level":2,"title":"Updating Charts","slug":"updating-charts"},{"level":2,"title":"Access to Chart instance","slug":"access-to-chart-instance"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Chart with props","slug":"chart-with-props"},{"level":3,"title":"Chart with local data","slug":"chart-with-local-data"},{"level":3,"title":"Chart with API data","slug":"chart-with-api-data"},{"level":3,"title":"Chart with dynamic styles","slug":"chart-with-dynamic-styles"},{"level":3,"title":"Custom / New Charts","slug":"custom-new-charts"},{"level":2,"title":"Resources","slug":"resources"}],"relativePath":"guide/index.md","lastUpdated":1664807396000}',p={},o=t(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p><strong>vue-chartjs</strong> is a wrapper for <a href="https://github.com/chartjs/Chart.js" target="_blank" rel="noopener noreferrer">Chart.js</a> in vue. You can easily create reuseable chart components.</p><p>Supports Chart.js v3.</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p><code>vue-chartjs</code> lets you use Chart.js without much hassle inside Vue. It&#39;s perfect for people who need simple charts up and running as fast as possible.</p><p>It abstracts the basic logic but exposes the Chart.js object to give you maximal flexibility.</p><div class="tip custom-block"><p class="custom-block-title">Need an API to fetch data?</p><p>Please consider <a href="https://cube.dev/?ref=eco-vue-chartjs" target="_blank" rel="noopener noreferrer">Cube</a>, an open-source API for data apps.</p></div><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>You can install <code>vue-chartjs</code> over <code>yarn</code> or <code>npm</code> or <code>pnpm</code>. However, you also need to add <code>chart.js</code> as a dependency to your project because <code>Chart.js</code> is a peerDependency. This way you can have full control over the versioning of <code>Chart.js</code>.</p><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> vue-chartjs chart.js
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue-chartjs chart.js
<span class="token comment"># or</span>
<span class="token function">npm</span> i vue-chartjs chart.js
</code></pre></div><h2 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-hidden="true">#</a></h2><p>Every chart type that is available in Chart.js is exported as a named component and can be imported as such. These components are normal Vue components.</p><p>The idea behind vue-chartjs is to provide easy-to-use components, with maximal flexibility and extensibility.</p><h2 id="creating-your-first-chart" tabindex="-1">Creating your first Chart <a class="header-anchor" href="#creating-your-first-chart" aria-hidden="true">#</a></h2><p>First, you need to import the base chart.</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
</code></pre></div><p>For Vue 2 projects, you need to import from <code>vue-chartjs/legacy</code>.</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs/legacy&#39;</span>
</code></pre></div><p>Check out the official <a href="http://www.chartjs.org/docs/latest/#creating-a-chart" target="_blank" rel="noopener noreferrer">Chart.js docs</a> to see the object structure you need to provide.</p><p>Just create your own component.</p><p><strong>BarChart.vue</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span>
    <span class="token attr-name">:chart-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:chart-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartId<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:dataset-id-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>datasetIdKey<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:plugins</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>plugins<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:css-classes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cssClasses<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>height<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chartId</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;bar-chart&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasetIdKey</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">400</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">400</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cssClasses</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chartData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;March&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chartOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>or in TypeScript:</p><p><strong>BarChart.ts</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> h<span class="token punctuation">,</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">,</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    chartId<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;bar-chart&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">400</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">400</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    cssClasses<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Partial<span class="token operator">&lt;</span>CSSStyleDeclaration<span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Plugin<span class="token operator">&lt;</span><span class="token string">&#39;bar&#39;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chartData <span class="token operator">=</span> <span class="token punctuation">{</span>
      labels<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;March&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      datasets<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> chartOptions <span class="token operator">=</span> <span class="token punctuation">{</span> responsive<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">h</span><span class="token punctuation">(</span>Bar<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        chartData<span class="token punctuation">,</span>
        chartOptions<span class="token punctuation">,</span>
        chartId<span class="token operator">:</span> props<span class="token punctuation">.</span>chartId<span class="token punctuation">,</span>
        width<span class="token operator">:</span> props<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
        height<span class="token operator">:</span> props<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
        cssClasses<span class="token operator">:</span> props<span class="token punctuation">.</span>cssClasses<span class="token punctuation">,</span>
        styles<span class="token operator">:</span> props<span class="token punctuation">.</span>styles<span class="token punctuation">,</span>
        plugins<span class="token operator">:</span> props<span class="token punctuation">.</span>plugins
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><p>Use it in your vue app:</p><p><strong>App.vue</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BarChart</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> BarChart <span class="token keyword">from</span> <span class="token string">&#39;path/to/component/BarChart&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BarChart <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="using-with-nuxt" tabindex="-1">Using with Nuxt <a class="header-anchor" href="#using-with-nuxt" aria-hidden="true">#</a></h2><p><strong>/plugins/chart.js</strong></p><div class="language-javascript"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Line <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-chartjs/legacy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span>
  Title<span class="token punctuation">,</span>
  Tooltip<span class="token punctuation">,</span>
  Legend<span class="token punctuation">,</span>
  BarElement<span class="token punctuation">,</span>
  CategoryScale<span class="token punctuation">,</span>
  LinearScale<span class="token punctuation">,</span>
  LineElement<span class="token punctuation">,</span>
  PointElement<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;chart.js&quot;</span><span class="token punctuation">;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>
  Title<span class="token punctuation">,</span>
  Tooltip<span class="token punctuation">,</span>
  Legend<span class="token punctuation">,</span>
  PointElement<span class="token punctuation">,</span>
  BarElement<span class="token punctuation">,</span>
  CategoryScale<span class="token punctuation">,</span>
  LinearScale<span class="token punctuation">,</span>
  LineElement<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;line-chart&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> Line<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>nuxt.config.js</strong></p><div class="language-javascript"><pre><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;~/plugins/chart/chart.js&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;client&#39;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
</code></pre></div><p>Then you can use it in your pages or components:</p><div class="language-"><pre><code>&lt;line-chart
  :chart-options=&#39;chartOptions&#39;
  :chart-data=&#39;chartData&#39;
  chart-id=&#39;myCustomId&#39;
/&gt;
</code></pre></div><h2 id="updating-charts" tabindex="-1">Updating Charts <a class="header-anchor" href="#updating-charts" aria-hidden="true">#</a></h2><p>v4 charts have data change watcher and options change watcher by default. v4 will update or re-render the chart if new data or new options is passed. Mixins have been removed.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:chart-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartOptions<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// DataPage.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">chartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token comment">/* mutable chart data */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">chartOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token comment">/* mutable chart options */</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="access-to-chart-instance" tabindex="-1">Access to Chart instance <a class="header-anchor" href="#access-to-chart-instance" aria-hidden="true">#</a></h2><p>You can get access to chart instance via template refs.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BarChart</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In Vue3 projects:</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> chartInstance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>chart
</code></pre></div><p>In Vue2 projects:</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> chartInstance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>getCurrentChart
</code></pre></div><p>Also you can get access to <strong>updateChart</strong> function</p><div class="language-javascript"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>bar<span class="token punctuation">.</span><span class="token function">updateChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>Charts will emit events if the data changes. You can listen to them in the chart component. The following events are available:</p><ul><li><code>chart:rendered</code> - if the chart object instance rendered</li><li><code>chart:destroyed</code> - if the chart object instance removed</li><li><code>chart:updated</code> - if the update handler performs an update instead of a re-render</li><li><code>labels:updated</code> - if new labels were set</li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="chart-with-props" tabindex="-1">Chart with props <a class="header-anchor" href="#chart-with-props" aria-hidden="true">#</a></h3><p>Your goal should be to create reusable chart components. For this purpose, you should utilize Vue.js props to pass in chart options and chart data. This way, the parent component itself does not hold an opinion about fetching data and is only for presentation.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:chart-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartOptions<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">chartData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chartOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="chart-with-local-data" tabindex="-1">Chart with local data <a class="header-anchor" href="#chart-with-local-data" aria-hidden="true">#</a></h3><p>You can handle your chart data directly in your parent component.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chartData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;March&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Data One&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f87979&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="chart-with-api-data" tabindex="-1">Chart with API data <a class="header-anchor" href="#chart-with-api-data" aria-hidden="true">#</a></h3><p>A common pattern is to use an API to retrieve your data. However, there are some things to keep in mind. The most common problem is that you mount your chart component directly and pass in data from an asynchronous API call. The problem with this approach is that Chart.js tries to render your chart and access the chart data synchronously, so your chart mounts before the API data arrives.</p><p>To prevent this, a simple <code>v-if</code> is the best solution.</p><p>Create your chart component with a data prop and options prop, so we can pass in our data and options from a container component.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loaded<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:chart-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">loaded</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chartData</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> userlist <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/userlist&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>chartdata <span class="token operator">=</span> userlist

      <span class="token keyword">this</span><span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="chart-with-dynamic-styles" tabindex="-1">Chart with dynamic styles <a class="header-anchor" href="#chart-with-dynamic-styles" aria-hidden="true">#</a></h3><p>You can set <code>responsive: true</code> and pass in a styles object which gets applied as inline styles to the outer <code>&lt;div&gt;</code>. This way, you can change the height and width of the outer container dynamically, which is not the default behaviour of Chart.js. It is best to use computed properties for this.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You need to set <code>position: relative</code></p></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Bar</span> <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myStyles<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token keyword">as</span> ChartJS<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

ChartJS<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>Title<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Legend<span class="token punctuation">,</span> BarElement<span class="token punctuation">,</span> CategoryScale<span class="token punctuation">,</span> LinearScale<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BarChart&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Bar <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">myStyles</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token operator">/</span><span class="token operator">*</span> mutable height <span class="token operator">*</span><span class="token operator">/</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;relative&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="custom-new-charts" tabindex="-1">Custom / New Charts <a class="header-anchor" href="#custom-new-charts" aria-hidden="true">#</a></h3><p>Sometimes you need to extend the default Chart.js charts. There are a lot of <a href="http://www.chartjs.org/docs/latest/developers/charts.html" target="_blank" rel="noopener noreferrer">examples</a> on how to extend and modify the default charts. Or, you can create your own chart type.</p><p>In <code>vue-chartjs</code>, you can do this pretty much the same way:</p><div class="language-js"><pre><code><span class="token comment">// 1. Import Chart.js so you can use the global Chart object</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>
<span class="token comment">// 2. Import the \`generateChart()\` method to create the vue component.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> generateChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token comment">// 3. Import needed controller from Chart.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LineController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;chart.js&#39;</span>

<span class="token comment">// 3. Extend one of the default charts</span>
<span class="token comment">// http://www.chartjs.org/docs/latest/developers/charts.html</span>
<span class="token keyword">class</span> <span class="token class-name">LineWithLineController</span> <span class="token keyword">extends</span> <span class="token class-name">LineController</span> <span class="token punctuation">{</span> <span class="token comment">/* custom magic here */</span><span class="token punctuation">}</span>

<span class="token comment">// 4. Generate the vue-chartjs component</span>
<span class="token comment">// The first argument is the chart-id, the second the chart type, third is the custom controller</span>
<span class="token keyword">const</span> CustomLine <span class="token operator">=</span> <span class="token function">generateChart</span><span class="token punctuation">(</span><span class="token string">&#39;custom-line&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> LineWithLineController<span class="token punctuation">)</span>

<span class="token comment">// 5. Extend the CustomLine Component just like you do with the default vue-chartjs charts.</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CustomLine <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-hidden="true">#</a></h2><p>Here are some resources, such as tutorials, on how to use <code>vue-chartjs</code>:</p><ul><li><a href="https://medium.com/@apertureless/wordpress-vue-and-chart-js-6b61493e289f" target="_blank" rel="noopener noreferrer">Using vue-chartjs with WordPress</a></li><li><a href="https://hackernoon.com/creating-stunning-charts-with-vue-js-and-chart-js-28af584adc0a" target="_blank" rel="noopener noreferrer">Create stunning Charts with Vue and Chart.js</a></li><li><a href="https://hackernoon.com/lets-build-a-web-app-with-vue-chart-js-and-an-api-544eb81c4b44" target="_blank" rel="noopener noreferrer">Let\u2019s Build a Web App with Vue, Chart.js and an API Part I</a></li><li><a href="https://hackernoon.com/lets-build-a-web-app-with-vue-chart-js-and-an-api-part-ii-39781b1d5acf" target="_blank" rel="noopener noreferrer">Let\u2019s Build a Web App with Vue, Chart.js and an API Part II</a></li><li><a href="https://blog.pusher.com/build-realtime-chart-with-vuejs-pusher/" target="_blank" rel="noopener noreferrer">Build a realtime chart with VueJS and Pusher</a></li></ul>`,73),e=[o];function c(l,r,u,i,k,d){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
