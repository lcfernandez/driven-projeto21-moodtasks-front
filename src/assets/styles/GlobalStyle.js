import { GREY_COLOR } from "../../constants/color";
import { TEXT_FONT, TITLE_FONT } from "../../constants/fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    +
    "The 62.5% Font Size Trick"
    +
    box-sizing best practices
    +
    project additions
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%; //10px ("The 62.5% Font Size Trick")
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* box-sizing best practices */
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  /*  project additions */
  h1 {
    color: ${GREY_COLOR};
    font-family: ${TITLE_FONT};
    font-size: 2rem;
  }
  h2 {
    color: ${GREY_COLOR};
    font-family: ${TEXT_FONT};
    font-size: 1.1rem;
  }
  h3 {
    color: ${GREY_COLOR};
    font-family: ${TEXT_FONT};
    font-size: 1rem;
  }
`;
