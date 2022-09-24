-> _Status of project_: Done

# Slider collection

## Description

<p>This project is a small person project, it consists in an slider collection.</p>

## Project contents

<ol>
   <li><a href='#sliderScroll'>Slider Scroll</a> :heavy_check_mark:</li>
   <li><a href='#sliderInfinite'>Slider Infinite</p> :heavy_check_mark:</li>
   <li>Slider :heavy_check_mark:</li>
</ol>

## Technologies

<ul>
   <li>HTML</li>
   <li>CSS</li>
   <ul>
      <li>Sass</li>
   </ul>
   <li>JavaScript</li>
</ul>

<hr>
<hr>

<h2 id = 'main'>Main</h2>

_schema main.js_

<pre>
<code>
import SliderScroll from './scripts/slider-scroll.js';
import SliderInfinite from './scripts/slider-infinite.js';
import SliderNavigator from './scripts/slider-show.js';

// // Slider Scroll
const slider_scroll = new SliderScroll(
   '[data-slider=scroll]',
   '.__slider-items',
);
slider_scroll.init();

// // Slider Infinite
const slider_infinite = new SliderInfinite(
   '[data-slider=infinite]',
   '.__slider-contents .__items',
);
slider_infinite.init();

// Slider
const slider_show = new SliderNavigator(
   '[data-slider=show]',
   '.__content',
   '.__slider-wrapp',
);
slider_show.init();

slider_show.addArrow(
   '.__arrows-or-buttons .__previous',
   '.__arrows-or-buttons .__next',
);
slider_show.addCounters();
</code>
</pre>

<h2 id = 'sliderScroll'>Slider Scroll</h2>

<a href="https://github.com/AlvesPHGA/slider/blob/main/scripts/slider-scroll.js" >slider-scroll.js</a>

### Schema html

<pre>
<code>
&lt;section aria-label="galeria digimon In Training" class="__slider-container" data-slider='scroll'&gt;
&lt;section class="__slider-items"&gt; {get content in an API extern}  &lt;/section&gt;
&lt;div class="__prev-next"&gt;
&lt;button type="button" class="__button __previous"&gt; Back &lt;/button&gt;
&lt;button type="button" class="__button __next"&gt; Next &lt;/button&gt;
&lt;/div&gt;
&lt;/section&gt;
</pre>
</code>

\*Obs.: Its get content in an API

<h2 id = 'sliderInfinite'>Slider Infinite</h2>

<a href="https://github.com/AlvesPHGA/slider/blob/main/scripts/slider-infinite.js" >slider-infinite.js</a>

### Schema html

<pre>
<code>
&lt;section aria-label="galeria digimons Rookie" class="**slider-container" data-slider='infinite'&gt;
&lt;section class="**slider-contents"&gt;
&lt;section class="**items"&gt;
&lt;section class="**item **list-01"&gt;
{get content in an API extern}
&lt;/section&gt;
&lt;section class="**item **list-02"&gt;
{get content in an API extern}
&lt;/section&gt;
&lt;section class="**item \_\_list-03"&gt;
{get content in an API extern}
&lt;/section&gt;
&lt;/section&gt;
&lt;/section&gt;

&lt;div class="**prev-next"&gt;
&lt;button type="button" class="**btn-prev **previous"&gt;
Back
&lt;/button&gt;
&lt;button type="button" class="**btn-next \_\_next"&gt;
Next
&lt;/button&gt;
&lt;/div&gt;
&lt;/section&gt;
</pre>
</code>

\*Obs.: Its get content in an API
