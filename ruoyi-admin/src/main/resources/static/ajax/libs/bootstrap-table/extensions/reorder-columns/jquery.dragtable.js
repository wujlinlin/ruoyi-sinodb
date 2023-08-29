/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /gh/akottr/dragtable@master/jquery.dragtable.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * dragtable
 *
 * @Version 2.0.15
 *
 * Copyright (c) 2010-2013, Andres akottr@gmail.com
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Inspired by the the dragtable from Dan Vanderkam (danvk.org/dragtable/)
 * Thanks to the jquery and jqueryui comitters
 *
 * Any comment, bug report, feature-request is welcome
 * Feel free to contact me.
 */
!function(e){e.widget("akottr.dragtable",{options:{revert:!1,dragHandle:".table-handle",maxMovingRows:40,excludeFooter:!1,onlyHeaderThreshold:100,dragaccept:null,persistState:null,restoreState:null,exact:!0,clickDelay:10,containment:null,cursor:"move",cursorAt:!1,distance:0,tolerance:"pointer",axis:"x",beforeStart:e.noop,beforeMoving:e.noop,beforeReorganize:e.noop,beforeStop:e.noop},originalTable:{el:null,selectedHandle:null,sortOrder:null,startIndex:0,endIndex:0},sortableTable:{el:e(),selectedHandle:e(),movingRow:e()},persistState:function(){var t=this;this.originalTable.el.find("th").each((function(e){""!==this.id&&(t.originalTable.sortOrder[this.id]=e)})),e.ajax({url:this.options.persistState,data:this.originalTable.sortOrder})},_restoreState:function(t){for(var i in t)this.originalTable.startIndex=e("#"+i).closest("th").prevAll().length+1,this.originalTable.endIndex=parseInt(t[i],10)+1,this._bubbleCols()},_bubbleCols:function(){var e,t,i,o,a=this.originalTable.startIndex,l=this.originalTable.endIndex,s=this.originalTable.el.children();if(this.options.excludeFooter&&(s=s.not("tfoot")),a<l)for(e=a;e<l;e++)for(i=s.find("> tr > td:nth-child("+e+")").add(s.find("> tr > th:nth-child("+e+")")),o=s.find("> tr > td:nth-child("+(e+1)+")").add(s.find("> tr > th:nth-child("+(e+1)+")")),t=0;t<i.length;t++)n(i[t],o[t]);else for(e=a;e>l;e--)for(i=s.find("> tr > td:nth-child("+e+")").add(s.find("> tr > th:nth-child("+e+")")),o=s.find("> tr > td:nth-child("+(e-1)+")").add(s.find("> tr > th:nth-child("+(e-1)+")")),t=0;t<i.length;t++)n(i[t],o[t])},_rearrangeTableBackroundProcessing:function(){var n=this;return function(){n._bubbleCols(),n.options.beforeStop(n.originalTable),n.sortableTable.el.remove(),function(){e("#__dragtable_disable_text_selection__").remove(),t?e(document.body).attr("onselectstart",t):e(document.body).removeAttr("onselectstart");i?e(document.body).attr("unselectable",i):e(document.body).removeAttr("unselectable")}(),null!==n.options.persistState&&(e.isFunction(n.options.persistState)?n.options.persistState(n.originalTable):n.persistState())}},_rearrangeTable:function(){var e=this;return function(){e.originalTable.selectedHandle.removeClass("dragtable-handle-selected"),e.sortableTable.el.sortable("disable"),e.sortableTable.el.addClass("dragtable-disabled"),e.options.beforeReorganize(e.originalTable,e.sortableTable),e.originalTable.endIndex=e.sortableTable.movingRow.prevAll().length+1,setTimeout(e._rearrangeTableBackroundProcessing(),50)}},_generateSortable:function(t){!t.cancelBubble&&(t.cancelBubble=!0);for(var i=this,n=this.originalTable.el[0].attributes,o="",a=0;a<n.length;a++)n[a].nodeValue&&"id"!=n[a].nodeName&&"width"!=n[a].nodeName&&(o+=n[a].nodeName+'="'+n[a].nodeValue+'" ');var l=[],s=[];this.originalTable.el.find("tr").slice(0,this.options.maxMovingRows).each((function(t,i){for(var n=this.attributes,o="",a=0;a<n.length;a++)n[a].nodeValue&&"id"!=n[a].nodeName&&(o+=" "+n[a].nodeName+'="'+n[a].nodeValue+'"');l.push(o),s.push(e(this).height())}));var r=[],d=0,h=i.originalTable.el.children();if(this.options.excludeFooter&&(h=h.not("tfoot")),h.find("> tr > th").each((function(t,i){var n=e(this).is(":visible")?e(this).outerWidth():0;r.push(n),d+=n})),i.options.exact){var c=d-i.originalTable.el.outerWidth();r[0]-=c}var b='<ul class="dragtable-sortable" style="position:absolute; width:'+(d+=2)+'px;">';h.find("> tr > th").each((function(t,n){var a=e(this).is(":visible")?e(this).outerWidth():0;b+='<li style="width:'+a+'px;">',b+="<table "+o+">";var r=h.find("> tr > th:nth-child("+(t+1)+")");i.options.maxMovingRows>1&&(r=r.add(h.find("> tr > td:nth-child("+(t+1)+")").slice(0,i.options.maxMovingRows-1))),r.each((function(t){var i=e(this).clone().wrap("<div></div>").parent().html();0===i.toLowerCase().indexOf("<th")&&(b+="<thead>"),b+="<tr "+l[t]+'" style="height:'+s[t]+'px;">',b+=i,0===i.toLowerCase().indexOf("<th")&&(b+="</thead>"),b+="</tr>"})),b+="</table>",b+="</li>"})),b+="</ul>",this.sortableTable.el=this.originalTable.el.before(b).prev(),this.sortableTable.el.find("> li > table").each((function(t,i){e(this).css("width",r[t]+"px")})),this.sortableTable.selectedHandle=this.sortableTable.el.find("th .dragtable-handle-selected");var u,g=this.options.dragaccept?"li:has("+this.options.dragaccept+")":"li";this.sortableTable.el.sortable({items:g,stop:this._rearrangeTable(),revert:this.options.revert,tolerance:this.options.tolerance,containment:this.options.containment,cursor:this.options.cursor,cursorAt:this.options.cursorAt,distance:this.options.distance,axis:this.options.axis}),this.originalTable.startIndex=e(t.target).closest("th").prevAll().length+1,this.options.beforeMoving(this.originalTable,this.sortableTable),this.sortableTable.movingRow=this.sortableTable.el.find("> li:nth-child("+this.originalTable.startIndex+")"),u=e('<style id="__dragtable_disable_text_selection__" type="text/css">body { -ms-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;user-select:none; }</style>'),e(document.head).append(u),e(document.body).attr("onselectstart","return false;").attr("unselectable","on"),window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),this.sortableTable.movingRow.trigger(e.extend(e.Event(t.type),{which:1,clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY,screenX:t.screenX,screenY:t.screenY}));var p=this.sortableTable.el.find(".ui-sortable-placeholder");!p.height()<=0&&p.css("height",this.sortableTable.el.find(".ui-sortable-helper").height()),p.html('<div class="outer" style="height:100%;"><div class="inner" style="height:100%;"></div></div>')},bindTo:{},_create:function(){this.originalTable={el:this.element,selectedHandle:e(),sortOrder:{},startIndex:0,endIndex:0},this.bindTo=this.originalTable.el.find("th"),this.options.dragaccept&&(this.bindTo=this.bindTo.filter(this.options.dragaccept)),this.bindTo.find(this.options.dragHandle).length>0&&(this.bindTo=this.bindTo.find(this.options.dragHandle)),null!==this.options.restoreState&&(e.isFunction(this.options.restoreState)?this.options.restoreState(this.originalTable):this._restoreState(this.options.restoreState));var t=this;this.bindTo.mousedown((function(i){1===i.which&&!1!==t.options.beforeStart(t.originalTable)&&(clearTimeout(this.downTimer),this.downTimer=setTimeout((function(){t.originalTable.selectedHandle=e(this),t.originalTable.selectedHandle.addClass("dragtable-handle-selected"),t._generateSortable(i)}),t.options.clickDelay))})).mouseup((function(e){clearTimeout(this.downTimer)}))},redraw:function(){this.destroy(),this._create()},destroy:function(){this.bindTo.unbind("mousedown"),e.Widget.prototype.destroy.apply(this,arguments)}});var t=e(document.body).attr("onselectstart"),i=e(document.body).attr("unselectable");function n(e,t){var i=e.parentNode,n=e.nextSibling===t?e:e.nextSibling;t.parentNode.insertBefore(e,t),i.insertBefore(t,n)}}(jQuery);
