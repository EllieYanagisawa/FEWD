![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Responsive Basics 

---

##Agenda

* Review
* Boxes Lab
* Responsive Layouts
* REM/EM
* Mobile Boxes
* Responsive Site
* Media Queries
* Startup Matchmaker

---

##Review

What questions do you have about CSS and layout?

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Boxes

---


##Responsive Layout

* What is responsive design?
* What makes a website responsive?
* What is an example of a responsive website?

--

##Fixed Layout

* Used up to this point

* Relies on a container of fixed width

* Usually between 960px and 1080px

--

##Responsive Layout

* Different styles for different screen widths

* Uses an elastic/fluid layout

* __Fluid__

  * Sized in percentages
  * Constantly changes with screen size

* __Elastic__

  * Generally sized in ems
  * Changes at specific screen sizes

* _Many responsive sites use both!_

--

##Fixed vs Responsive Examples

Checkout these __Fixed__ sites

* [Amazon.com](http://www.amazon.com)

* [Google.com](http://www.google.com)

* [Huffington Post](http://www.huffingtonpost.com/)


Checkout these __Responsive__ Sites

* [Starbucks](http://www.starbucks.com)

* [Media Temple](http://mediatemple.net/)

* [A List Apart](http://alistapart.com/)

* [Medium](https://medium.com/)

* [Clear Left](http://clearleft.com/)

* [Muumilaakso](http://muumilaakso.tampere.fi/)

---

##EMS vs REMs

__EM__

Sized based on the width of the letter "m"

Similar to percentages

1em=100% of the parent's `font-size`

```
parent { font-size:16px; }
child { font-size:2em; } /* 32px */
```

Creates a ratio relationship

--

##EMS vs REMs

__REM__

Measured the same as `em`, but always based on the `font-size` of the `html` element

```
html { font-size:16px; }
parent { font-size:2em; }
child-1 { font-size:2em; } /* 64px */
child-2 { font-size:2rem; } /* 32px */
```

http://j.eremy.net/confused-about-rem-and-em/

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Mobile Boxes

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Responsive Sites

---

##Media Queries

--

##Media Queries

Media queries do _not_ add specificity!


It's the same thing as adding another stylesheet.

--

##Media Queries

###Breakdown of rules

```
@media only screen and
(max-width: xPx)
(min-width: xPx)
(max-device-width:xPx)
(min-device-width:xPx)

For iPad
(orientation: portrait)
(orientation: landscape)
```

* Separate multiple clauses with "and"
* A media query creates a "breakpoint" where styles change

--

##Media Queries

```

@media (max-width: 700px) {
  html {
    font-size: 1.5em;
  }
}

```

Will use `font-size` of `1.5em` when the window is less than 700px wide

--

##Media Queries

```

@media screen and (max-width: 700px) {
  html {
    font-size: 1.5em;
  }
}

```

`screen` tells the browser to only apply this style to the `screen` media type (the most common other media type is `print`)

--

##Media Queries

```

@media only screen and (max-width: 700px) {
  html {
    font-size: 1.5em;
  }
}

```

`only` blocks this rule from being recognized by older browsers (i.e. IE6-8). In modern browsers, `only` has no effect (it's only real purpose is to weed out old browsers).

--

##Media Queries

```

@media screen and (max-width: 700px) and (min-width: 481px) {
  html {
    font-size: 1.5em;
  }
}

```

All together now!

* This targets screens that are above `480px` but below `700px`
* NOTE: `min-width` and `max-width` are __inclusive__, so screens at exactly `700px` __will__ get this rule

--

##Media Queries

Can apply to whole stylesheets too

```
<link rel="stylesheet" type="text/css" href="mobile.css"
  media="screen and (max-width: 480px)" />
```

This lets you keep mobile-specific styles separate

--

##Media Queries

```
/*float boxes into columns*/
.box {
  float:left;
}
.box.right {
  float:right;
}
@media only screen and (max-width:768px){
  .box,
  .box.right {
    float:none;
  }
}
```
<style>
  .reveal .box-demo {
    background: rgba(255,255,255,.5);
    color:black;
    float:left;
    margin:20px;
    padding: 20px;
  }

  .reveal .box-demo.right {
    float:right;
  }

  @media only screen and (max-width:768px) {
    .reveal .box-demo,
    .reveal .box-demo.right {
      float:none;
    }
  }
</style>

<div class="box-demo">Float when large</div>
<div class="box-demo right">Don't float when small</div>

<div style="clear:both;">If I put the media query first will this work as expected?</div>

--

##Media Queries

####Common media query sizes

![Responsive Templates](../../img/unit_1/responsive-templates.jpg)

That looks nice, but...

--

##Media Queries

####Closer to reality

![Screen Sizes](../../img/unit_1/screen-sizes.jpg)

Best practice is to pick a few breakpoints that work well with your design

---

##Mobile Display

```
<meta name="viewport"
  content="width=device-width, initial-scale=1">
```

<small>Optional: `user-scalable=none`, prevents user from zooming</small>

```
<meta name="viewport"
  content="width=device-width, initial-scale=1, user-scalable=none">
```

What're these for?

* Mobile browser assumes you're using a fixed layout of 980px
* Need to tell the browser that you're prepared for a mobile device, and for it not to try and be too smart

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Responsive Relaxr - How to Start?

---
##Homework
* Finish the [responsive Relaxr homework assignment](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_04_Multiple_Screens/Assignment)
* [Watch this video on CSS Grids](https://www.youtube.com/watch?v=0IrWRuEyXYA)
* [Read about CSS Grids](http://www.sitepoint.com/understanding-css-grid-systems/) 

--

##Exit Survey - Responsive Basics
Goodnight!
|