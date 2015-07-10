//fulll version
import assert from 'assert'
function toTitleCase(s) {
let m = ["a", "an", "and", "as", "at", "but", "by", "en", "for", "if", "in", "nor", "of", "on", "or", "per", "the", "to", "v", "v.", "vs", "vs.", "via"];
let p=0
let a = (c) => c.toUpperCase()
s = s.replace(/[^\s\-]+/g, (x) => {
  p++;
  if (/[A-Z@\/]/.test(x) || m.includes(x) && p != 1)  return x;
  if (/:$/.test(x)) p = 0;
  return x.replace(/^[^\w]*\w/, a);
});
s = s.replace(/[^\s\-]+$/g, (x) => x.replace(/^./, a));
return s;
}

const tests = [
  {
    "input": "follow step-by-step instructions",
    "expect": "Follow Step-by-Step Instructions"
  },
  {
    "input": "this sub-phrase is nice",
    "expect": "This Sub-Phrase Is Nice"
  },
  {
    "input": "catchy title: a subtitle",
    "expect": "Catchy Title: A Subtitle"
  },
  {
    "input": "catchy title: \"a quoted subtitle\"",
    "expect": "Catchy Title: \"A Quoted Subtitle\""
  },
  {
    "input": "catchy title: “‘a twice quoted subtitle’”",
    "expect": "Catchy Title: “‘A Twice Quoted Subtitle’”"
  },
  {
    "input": "\"a title inside double quotes\"",
    "expect": "\"A Title Inside Double Quotes\""
  },
  {
    "input": "all words capitalized",
    "expect": "All Words Capitalized"
  },
  {
    "input": "small words are for by and of lowercase",
    "expect": "Small Words Are for by and of Lowercase"
  },
  {
    "input": "a small word starts",
    "expect": "A Small Word Starts"
  },
  {
    "input": "a small word it ends on",
    "expect": "A Small Word It Ends On"
  },
  {
    "input": "do questions work?",
    "expect": "Do Questions Work?"
  },
  {
    "input": "multiple sentences. more than one.",
    "expect": "Multiple Sentences. More Than One."
  },
  {
    "input": "Ends with small word of",
    "expect": "Ends With Small Word Of"
  },
  {
    "input": "double quoted \"inner\" word",
    "expect": "Double Quoted \"Inner\" Word"
  },
  {
    "input": "single quoted 'inner' word",
    "expect": "Single Quoted 'Inner' Word"
  },
  {
    "input": "fancy double quoted “inner” word",
    "expect": "Fancy Double Quoted “Inner” Word"
  },
  {
    "input": "fancy single quoted ‘inner’ word",
    "expect": "Fancy Single Quoted ‘Inner’ Word"
  },
  {
    "input": "this vs. that",
    "expect": "This vs. That"
  },
  {
    "input": "this vs that",
    "expect": "This vs That"
  },
  {
    "input": "this v. that",
    "expect": "This v. That"
  },
  {
    "input": "this v that",
    "expect": "This v That"
  },
  {
    "input": "address email@example.com titles",
    "expect": "Address email@example.com Titles"
  },
  {
    "input": "pass camelCase through",
    "expect": "Pass camelCase Through"
  },
  {
    "input": "don't break",
    "expect": "Don't Break"
  },
  {
    "input": "catchy title: substance subtitle",
    "expect": "Catchy Title: Substance Subtitle"
  },
  {
    "input": "we keep NASA capitalized",
    "expect": "We Keep NASA Capitalized"
  },
  {
    "input": "leave Q&A unscathed",
    "expect": "Leave Q&A Unscathed"
  },
  {
    "input": "Scott Moritz and TheStreet.com’s million iPhone la-la land",
    "expect": "Scott Moritz and TheStreet.com’s Million iPhone La-La Land"
  },
  {
    "input": "you have a http://example.com/foo/ title",
    "expect": "You Have a http://example.com/foo/ Title"
  },
  {
    "input": "your hair[cut] looks (nice)",
    "expect": "Your Hair[cut] Looks (Nice)"
  },
  {
    "input": "keep that colo(u)r",
    "expect": "Keep That Colo(u)r"
  },
  {
    "input": "have you read “The Lottery”?",
    "expect": "Have You Read “The Lottery”?"
  },
  {
    "input": "Notes and observations regarding Apple’s announcements from ‘The Beat Goes On’ special event",
    "expect": "Notes and Observations Regarding Apple’s Announcements From ‘The Beat Goes On’ Special Event"
  }
];
tests.forEach((test) => {
  assert(test.expect === toTitleCase(test.input), 'expected ' + test.expect + ', got ' + toTitleCase(test.input));
} );

