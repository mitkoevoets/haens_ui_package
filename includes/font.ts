// tslint:disable:no-var-requires
import { fontFace } from 'emotion'

/**
 * LATO
 */
const lato_regular_woff2 = require('haens-assets/fonts/lato_-_latogeometricsans3_regular-webfont.woff2')
const lato_regular = require('haens-assets/fonts/lato_-_latogeometricsans3_regular-webfont.woff')
fontFace(`
    font-family: 'bookman';
    src: url('${lato_regular_woff2}') format('woff2'),
         url('${lato_regular}') format('woff');
    font-weight: normal;
    font-style: normal;
`)

const lato_semibold_woff2 = require('haens-assets/fonts/lato_-_latogeometricsans3_semibold-webfont.woff2')
const lato_semibold = require('haens-assets/fonts/lato_-_latogeometricsans3_semibold-webfont.woff')
fontFace(`
    font-family: 'lato';
    src: url('${lato_semibold_woff2}') format('woff2'),
         url('${lato_semibold}') format('woff');
    font-weight: bold;
    font-style: normal;
`)

/**
 * BOOKMAN
 */
const bookman_regular_woff2 = require('haens-assets/fonts/bookman-regular-webfont.woff2')
const bookman_regular = require('haens-assets/fonts/bookman-regular-webfont.woff')
fontFace(`
    font-family: 'bookman';
    src: url('${bookman_regular_woff2}') format('woff2'),
         url('${bookman_regular}') format('woff');
    font-weight: normal;
    font-style: normal;
`)

const bookman_semibold_woff2 = require('haens-assets/fonts/bookman-bold-webfont.woff2')
const bookman_semibold = require('haens-assets/fonts/bookman-bold-webfont.woff')
fontFace(`
    font-family: 'bookman';
    src: url('${bookman_semibold_woff2}') format('woff2'),
         url('${bookman_semibold}') format('woff');
    font-style: normal;
    font-weight: bold;
`)
