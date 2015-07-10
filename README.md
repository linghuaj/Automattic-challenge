#Challenge: Brevity

http://automattic.paris/challenge/brevity

## Description

For this challenge, you will need to write the shortest possible program in JavaScript that converts a string into title case.

Your module must export a single function that accepts one argument (a string) and returns that string converted to title case.

The program will be run in the latest node.js 0.10.x environment using babel 5.6.14 with stage 0 experimental features enabled (yay, ES6!). No external modules are available in node: only builtin modules.

## Title Case Rules:

1.    Small words (see the list) should not be capitalized (unless a small word is the first or last word).
2.    Pieces of hyphenated words should be capitalized separately.
3.    Each sentence in the title should be capitalized separately.
4.    Titles and Subtitles (separated by ": " — see examples) should be capitalized separately.
5.    Email addresses, file names, domains, and URLs should not be altered.
6.    Words in camelCase should not be altered.
7.    Acronyms (like ESA) should not be altered.
8.    Quotation marks and apostrophes may be either ASCII or curly: neither should be altered.
9.    Words may contain non-alphabetic characters. For such words, the first alphabetic character should be 
10.   10. capitalized according to the other rules above.
    

###
In this gist https://gist.github.com/nb/0779eab0272bf3172f70 you can find all the tests we will be using to make sure the solutions are acurate. Yes, you are free to pass the tests by writing a long switch statement, but we doubt this will result in the shortest solution :-)

###
The small words that do not need to be capitalized are:

    "a",
    "an",
    "and",
    "as",
    "at",
    "but",
    "by",
    "en",
    "for",
    "if",
    "in",
    "nor",
    "of",
    "on",
    "or",
    "per",
    "the",
    "to",
    "v",
    "v.",
    "vs",
    "vs.",
    and "via".

Examples:

1. the œuvre of matisse demonstrates a mastery of color → The Œuvre of Matisse Demonstrates a Mastery of Color
2.    my "run-of-the-mill" code works → My "Run-of-the-Mill" Code Works
3.    react is cool. the conference called ReactEurope is also cool. → React Is Cool. The Conference Called ReactEurope Is Also Cool.
4.    title: a subtitle → Title: A Subtitle
5.    color v. colour v. colo(u)r: “a spelling feud” → Color v. Colour v. Colo(u)r: “A Spelling Feud”
6.    don't stop reactin' → Don't Stop Reactin'
7.    this /w/ord looks fun[ny] → This /W/ord Looks Fun[ny]

