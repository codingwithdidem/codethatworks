---
title: 'Animations With Tailwindcss'
date: '2021-03-16'
spoiler: 'For your app to shine, you need to consider adding animations.'
---

# Why use Animations?

Building apps are easy. There are tons of _ordinary_ applications on the Internet.
And you, **as a developer**, can easily create one of them. But as I might guess, this is not what you want.
You want to make a good impression, huh?

Well, for your app to shine, you need to consider adding _animations_.

# How to do it with Tailwindcss?

So you have built your app using _tailwindcss_ and it is already pretty good-looking.
Now its time to add some spice on top of it.

Out of box, tailwind comes with a series of suggested animations you can apply on any elements in your markup.

```css
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
     spin: {
       to: {
         transform: 'rotate(360deg)',
       },
     },
     ping: {
       '75%, 100%': {
         transform: 'scale(2)',
         opacity: '0',
       },
     },
     pulse: {
       '50%': {
         opacity: '.5',
       },
     },
     bounce: {
       '0%, 100%': {
         transform: 'translateY(-25%)',
         animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
       },
       '50%': {
         transform: 'none',
         animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
       },
     },
   },

```

You can use `animate-none` `animate-spin` `animate-ping` `animate-pulse` `animate-bounce` utility classes to use them.

## Lets try `animate-spin` animation.

<Button>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
   
  </svg>
  Processing
</Button>
