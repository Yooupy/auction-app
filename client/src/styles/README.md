# HOW TO USE SCSS GLOBALLY:

## **@use** sass method insted of **@import**:

In sass(scss), we will use `@use` importing method instead fo @import. Because it has more capabilities than `@import`. Behind the scenes, `@use` makes easier to optimization and converting sass to pure css.

## How to use:

`_breakpoints.scss` holds collection of all breakpoins. To avoid deduplication in our code, simply import this module and use.
`_colors.scss` holds collection of all defined colors in our projects. To avoid deduplication in our code, simply import this module and use.
`_global.scss` holds collection of all reusable global sass methods in our projects. To avoid deduplication in our code, simply import this module and use.

## Examples:

Here you can see some code snippets:

`_global.scss`

```
@use "./colors" as colors;
@use "./breakpoints" as bp;

.commonPadding {
  padding-left: 10px;
  padding-right: 10px;
  color: colors.$white;
  @media (max-width) {
    padding-left: 5px;
    padding-right: 5px;
  }
}

```

To use this `.commonPadding` this common global style, we should import `_global.scss`. See:

`custom.styles.module.scss`

```
@use "./global" as global;

.myCustomElement{
    @include global.commonPadding
}

```

So, now `.myCustomElement` class has inherited all properties of global `.commonPadding` class.
