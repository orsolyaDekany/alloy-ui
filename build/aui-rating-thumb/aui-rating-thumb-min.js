YUI.add("aui-rating-thumb",function(e,t){var n=e.getClassName,r=n("glyphicon"),i=n("glyphicon","thumbs","down"),s=n("glyphicon","thumbs","up"),o=n("rating","off"),u=n("rating","on"),a=e.Component.create({NAME:"ThumbRating",ATTRS:{cssClasses:{value:{down:[r,i].join(" "),element:o,hover:u,off:o,on:u,up:[r,s].join(" ")}},size:{value:2,readOnly:!0}},EXTENDS:e.Rating,prototype:{renderUI:function(){var e=this,t=e.get("cssClasses");a.superclass.renderUI.apply(this,arguments);var n=e.get("elements");n.addClass(t.off),n.item(0).addClass(t.up),n.item(1).addClass(t.down)},fillTo:function(e){var t=this,n=t.get("cssClasses");this.clearSelection();if(e>=0){var r=this.get("elements").item(e);r.addClass(n.on),r.removeClass(n.off)}},_syncElements:function(){}}});e.ThumbRating=a},"3.1.0-deprecated.81",{requires:["aui-rating-base"]});
