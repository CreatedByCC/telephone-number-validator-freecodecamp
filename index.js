function telephoneCheck(str) {
    return /^1?[ -]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/g.test(str);
  }
  
  telephoneCheck("555-555-5555");

  /*  Regex breakdown:
        ^1?[ -]? - the str may start with a one followed by a space or dash (optional)
        (\(\d{3}\)|\d{3}) - a group of 3 digits or 3 digits in parentheses
        [ -]?\d{3}[ -]? - an optional space or dash followed by 3 digits followed by another optional space or dash
        \d{4}$ - 4 digits at the end of the string
  */