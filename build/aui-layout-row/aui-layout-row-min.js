YUI.add("aui-layout-row",function(e,t){var n=12,r=".layout-row",i='<div class="layout-row-container-row"><div class="layout-row row"></div></div>';e.LayoutRow=e.Base.create("layout-row",e.Base,[],{initializer:function(){var t=this.get("cols");e.Array.invoke(t,"addTarget",this),this.after({colsChange:this._afterColsChange}),this._uiSetCols(t)},addCol:function(t,n){var r=this.get("cols").concat(),i=t;e.Lang.isUndefined(t)?i=r.length:e.instanceOf(t,e.LayoutCol)&&(i=r.length,n=t),n||(n=new e.LayoutCol),i>r.length&&(i=r.length),r.splice(i,0,n),r=this._resizeColsAfterAdding(r,i),this.set("cols",r)},moveColContent:function(e,t){var n=this.get("cols").concat(),r=n[e];r.set("value",t.get("value")),t.set("value",null)},removeCol:function(t){e.Lang.isNumber(t)?this._removeColByIndex(t):e.instanceOf(t,e.LayoutCol)&&this._removeColByReference(t)},_afterColsChange:function(t){e.Array.invoke(t.prevVal,"removeTarget",this),e.Array.invoke(t.newVal,"addTarget",this),this._uiSetCols(this.get("cols"))},_expandNeighborColsWidth:function(e,t){var n=e[0],r=e[1];n.set("size",n.get("size")+Math.ceil(t/e.length)),r&&r.set("size",r.get("size")+Math.floor(t/e.length))},_findNeighbors:function(e,t){var n=e[t+1],r=e[t-1],i=[];return r&&i.push(r),n&&i.push(n),i},_getSize:function(t){var n;return e.Array.reduce(t,0,function(t,r){return e.instanceOf(r,e.LayoutCol)?n=r.get("size"):n=r.size||0,t+=n,t})},_reduceNeighborColsWidth:function(e,t){var n=e[0],r,i=0;e[1]&&e[1].get("size")>e[0].get("size")&&(r=e[0],n=e[1]),r&&(i=Math.min(Math.floor(t/e.length),r.get("size")-1),r.set("size",r.get("size")-i)),n.set("size",n.get("size")-(t-i))},_removeColByIndex:function(e){var t=this.get("cols").concat();t.splice(e,1),t=this._resizeColsAfterRemoving(t,e),this.set("cols",t)},_removeColByReference:function(t){var n=this.get("cols").concat(),r=e.Array.indexOf(n,t);r>=0&&this._removeColByIndex(r)},_resizeColsAfterAdding:function(e,t){var n=e[t].get("size"),r=0,i=0,s=0,o=this._findNeighbors(e,t);return r=o[0].get("size"),o[1]&&(i=o[1].get("size")),s=r+i-o.length,n>s&&(n=s),this._reduceNeighborColsWidth(o,n),e[t].set("size",n),e},_resizeColsAfterRemoving:function(e,t){var r=n-this._getSize(e),i;return i=[],e[t]&&i.push(e[t]),e[t-1]&&i.push(e[t-1]),this._expandNeighborColsWidth(i,r),e},_setCols:function(t){var r,i,s=[],o;for(i=0;i<t.length;i++)r=t[i],e.instanceOf(r,e.LayoutCol)||(r=new e.LayoutCol(r)),s.push(r);return t=s,o=this._getSize(t),o<n&&t.push(new e.LayoutCol({size:n-o})),t},_uiSetCols:function(t){var n=this.get("node"),i=n.one(r);n.setStyle("height",n.get("offsetHeight")),i.empty(),e.each(t,function(e){i.append(e.get("node"))}),n.setStyle("height","")},_validateCols:function(t){var r=this.get("maximumCols"),i=this._getSize(t);return i>n||i<0||!e.Lang.isArray(t)||t.length>r?!1:!0}},{ATTRS:{cols:{setter:"_setCols",validator:"_validateCols",value:[]},equalHeight:{validator:e.Lang.isBoolean,value:!0},maximumCols:{validator:function(e){return e>0&&e<=12},value:12},movable:{validator:e.Lang.isBoolean,value:!0},node:{setter:function(e){return e.one(r).setData("layout-row",this),e},validator:e.Lang.isNode,valueFn:function(){return e.Node.create(i)},writeOnce:"initOnly"},removable:{validator:e.Lang.isBoolean,value:!0}}})},"3.1.0-deprecated.56",{requires:["array-invoke","aui-node-base","base-build"],skinnable:!0});