// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * A list of globals used by this module.
 *
 * @module moodle-assignfeedback_editpdf-editor
 */
var AJAXBASE = M.cfg.wwwroot + '/mod/assign/feedback/editpdf/ajax.php',
    AJAXBASEPROGRESS = M.cfg.wwwroot + '/mod/assign/feedback/editpdf/ajax_progress.php',
    CSS = {
        DIALOGUE : 'assignfeedback_editpdf_widget'
    },
    SELECTOR = {
        PREVIOUSBUTTON : '.' + CSS.DIALOGUE + ' .navigate-previous-button',
        NEXTBUTTON : '.' + CSS.DIALOGUE + ' .navigate-next-button',
        SEARCHCOMMENTSBUTTON : '.' + CSS.DIALOGUE + ' .searchcommentsbutton',
        SEARCHFILTER : '.assignfeedback_editpdf_commentsearch input',
        SEARCHCOMMENTSLIST : '.assignfeedback_editpdf_commentsearch ul',
        PAGESELECT : '.' + CSS.DIALOGUE + ' .navigate-page-select',
        LOADINGICON : '.' + CSS.DIALOGUE + ' .loading',
        PROGRESSBARCONTAINER : '.' + CSS.DIALOGUE + ' .progress-info.progress-striped',
        DRAWINGREGION : '.' + CSS.DIALOGUE + ' .drawingregion',
        DRAWINGCANVAS : '.' + CSS.DIALOGUE + ' .drawingcanvas',
        SAVE : '.' + CSS.DIALOGUE + ' .savebutton',
        COMMENTCOLOURBUTTON : '.' + CSS.DIALOGUE + ' .commentcolourbutton',
        COMMENTMENU : ' .commentdrawable a',
        ANNOTATIONCOLOURBUTTON : '.' + CSS.DIALOGUE + ' .annotationcolourbutton',
        DELETEANNOTATIONBUTTON : '.' + CSS.DIALOGUE + ' .deleteannotationbutton',
        UNSAVEDCHANGESDIV : '.assignfeedback_editpdf_unsavedchanges',
        STAMPSBUTTON : '.' + CSS.DIALOGUE + ' .currentstampbutton',
        DIALOGUE : '.' + CSS.DIALOGUE
    },
    SELECTEDBORDERCOLOUR = 'rgba(200, 200, 255, 0.9)',
    SELECTEDFILLCOLOUR = 'rgba(200, 200, 255, 0.5)',
    COMMENTCOLOUR = {
        'white' : 'rgb(255,255,255)',
        'yellow' : 'rgb(255,255,176)',
        'red' : 'rgb(255,176,176)',
        'green' : 'rgb(176,255,176)',
        'blue' : 'rgb(208,208,255)',
        'clear' : 'rgba(255,255,255, 0)'
    },
    ANNOTATIONCOLOUR = {
        'white' : 'rgb(255,255,255)',
        'yellow' : 'rgb(255,255,0)',
        'red' : 'rgb(255,0,0)',
        'green' : 'rgb(0,255,0)',
        'blue' : 'rgb(0,0,255)',
        'black' : 'rgb(0,0,0)'
    },
    CLICKTIMEOUT = 300,
    TOOLSELECTOR = {
        'comment': '.' + CSS.DIALOGUE + ' .commentbutton',
        'pen': '.' + CSS.DIALOGUE + ' .penbutton',
        'line': '.' + CSS.DIALOGUE + ' .linebutton',
        'rectangle': '.' + CSS.DIALOGUE + ' .rectanglebutton',
        'oval': '.' + CSS.DIALOGUE + ' .ovalbutton',
        'stamp': '.' + CSS.DIALOGUE + ' .stampbutton',
        'select': '.' + CSS.DIALOGUE + ' .selectbutton',
        'highlight': '.' + CSS.DIALOGUE + ' .highlightbutton'
    },
    STROKEWEIGHT = 4;
