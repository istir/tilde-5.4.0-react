(this["webpackJsonptilde-5.4.0-react"]=this["webpackJsonptilde-5.4.0-react"]||[]).push([[0],{132:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(22),i=n.n(r),s=(n(68),n(9)),c=n(10),l=n(12),u=n(11),h=(n.p,n(69),n(5)),d=n(0),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={date:new Date,isToggled:!1},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){t.tick()}),1e3),this.setState({isToggled:!1})}},{key:"toggle",value:function(){this.setState((function(t){return{isToggled:!t.isToggled}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock ".concat(this.props.class),style:{color:h.textColor},onClick:this.props.onClick,children:[Object(d.jsxs)("div",{className:"Hours",style:{textShadow:"".concat(h.shadowStrength," ").concat(h.shadowColor)},children:[(this.state.date.getHours()<10?"0":"")+this.state.date.getHours()," "]}),Object(d.jsxs)("div",{className:"Minutes",style:{textShadow:"".concat(h.shadowStrength," ").concat(h.shadowColor)},children:[(this.state.date.getMinutes()<10?"0":"")+this.state.date.getMinutes()," "]})]})}}]),n}(o.a.Component),p=n(60),f=n(17),g=n(61);f.b.add(g.a);var b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).listItem=h.frequentBookmarks.map((function(t){return Object(d.jsxs)("a",{style:{color:h.iconColor,filter:"drop-shadow(".concat(h.shadowStrength," ").concat(h.shadowColor,")")},href:t.url,className:"frequentBookmarkIcon",children:[Object(d.jsx)(p.a,{icon:["fab",t.icon],size:h.frequentNameShown?"2x":"3x"}),!!h.frequentNameShown&&Object(d.jsx)("span",{className:"frequentName",children:t.name})]},t.url)})),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"frequentBookmarks",children:this.listItem})}}]),n}(o.a.Component),v=n(74),j=n(75),y=n(76),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),a=e.call(this,t),y.setAPPID("fa54ebb35a166dfa6a6ef9fe7b6dcf06"),y.setUnits(h.weatherUnit),"auto"!=h.weatherLocation?y.setCity(h.weatherLocation):y.setCoordinate(-1,1),a.state={location:null,temperature:null,description:null,icon:null,isNight:!1},a}return Object(c.a)(n,[{key:"getCurrentLocation",value:function(t){if(!navigator.geolocation)throw new Error("Your browser does not support geolocation.");navigator.geolocation.getCurrentPosition((function(e){t(e)}))}},{key:"getCurrentWeather",value:function(t){y.getAllWeather((function(e,n){t(n)}))}},{key:"componentDidMount",value:function(){var t=this;this.getCurrentLocation((function(e){t.setState((function(t){return{location:e}})),y.setCoordinate(t.state.location.coords.latitude,t.state.location.coords.longitude),t.getCurrentWeather((function(e){t.setState((function(t){return{temperature:Math.round(e.main.temp),description:e.weather[0].main,icon:e.cod,isNight:(new Date).getHours()>20&&(new Date).getHours<6}}))}))}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"placeholderText",style:{color:h.textColor,filter:"brightness(40%)",opacity:"true"==this.props.show?"1":"0"},children:[null===this.state.temperature?"":this.state.temperature,Object(d.jsx)("i",{className:"placeholderIcon owf owf-".concat(this.state.icon,"-").concat(this.state.isNight?"n":"d")})]})}}]),n}(o.a.Component),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={hidePlaceholder:!1},a._target=o.a.createRef(),a}return Object(c.a)(n,[{key:"togglePlaceholder",value:function(){this.setState((function(t){return{hidePlaceholder:!t.hidePlaceholder}}))}},{key:"showPlaceholder",value:function(){this.setState({hidePlaceholder:!1})}},{key:"hidePlaceholder",value:function(){this.setState({hidePlaceholder:!0})}},{key:"componentDidMount",value:function(){this._target.current.focus()}},{key:"submitForm",value:function(t){window.open(j(this._target.current.value)?this._target.current.value:h.searchEngine+this._target.current.value,"_parent"),this._target.current.value="",t.preventDefault()}},{key:"ensureTextSimilarity",value:function(){this._target.current&&this.props.setText(this._target.current.value)}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("form",{onSubmit:this.submitForm.bind(this),className:"searchForm ".concat(this.props.class),children:[Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsx)("input",{ref:this._target,className:"searchInput",type:"text",onChange:function(){t.ensureTextSimilarity(),0==t._target.current.value.length?t.showPlaceholder():t.hidePlaceholder()},onFocus:function(){t._target.current.value.length>0&&t.hidePlaceholder()},onBlur:function(){0==t._target.current.value.length&&t.showPlaceholder()},defaultValue:this.props.defaultText,style:{boxShadow:"".concat(h.shadowStrength," ").concat(h.shadowColor),backgroundColor:"".concat(h.color),color:this.state.hidePlaceholder?"#ffffff"==v("".concat(h.color))?"#fafafa":"#0a0a0a":"transparent"}}),this.state.hidePlaceholder?Object(d.jsx)(k,{show:"false"}):Object(d.jsx)(k,{show:"true"})]}),this.props.renderBookmarks?Object(d.jsx)(b,{}):""]})}}]),n}(o.a.Component),O=n(30),w=n(133),S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).listItem=a.props.listItems.map((function(t){return Object(d.jsx)(T,{keyName:t.key,name:t.name,urlName:t.url},t.url)})),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("li",{className:"category",style:{maxWidth:"".concat(100/h.bookmarks.length-5,"%")},children:[Object(d.jsx)("h2",{className:"categoryName",children:this.props.categoryName}),this.listItem]})}}]),n}(o.a.Component),T=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){return Object(s.a)(this,n),e.call(this,t)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("ul",{children:Object(d.jsx)("li",{className:"command",children:Object(d.jsxs)("a",{href:this.props.urlName,children:[Object(d.jsx)("span",{className:"commandKey",children:this.props.keyName}),Object(d.jsx)("span",{className:"commandName",children:this.props.name})]})})})}}]),n}(o.a.Component),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).listItem=h.bookmarks.map((function(t,e){return Object(d.jsx)(S,{listItems:t.list,categoryName:t.title},t.title)})),a.state={shown:!0,background:"".concat(h.overlayColor),left:"0px",top:"0px"},a._element=o.a.createRef(),window.addEventListener("resize",a.onWindowResized.bind(Object(O.a)(a))),a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"onWindowResized",value:function(){this.centerHorizontally(),this.centerVertically();try{console.log(this._element.current.clientWidth)}catch(t){}this.forceUpdate()}},{key:"centerHorizontally",value:function(){try{this.setState({left:"calc((100vw - ".concat(this._element.current.clientWidth,"px) / 2)")})}catch(t){this.setState({left:"calc(100vw / 2 - ".concat(50,"px)")})}}},{key:"centerVertically",value:function(){try{this.setState({top:"calc(100vh / 2 - ".concat(this._element.current.clientHeight/2,"px)")})}catch(t){this.setState({top:"calc(100vh / 2 - ".concat(50,"px)")})}}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return Object(d.jsx)(w.a,{in:this.props.shown,timeout:200,onEnter:function(){t.centerHorizontally(),t.centerVertically()},classNames:"overlayParent",unmountOnExit:!0,children:Object(d.jsxs)("div",{ref:this._element,onClick:function(e){t.props.clearTimeout(),e.stopPropagation()},onInput:function(){t.props.clearTimeout()},style:{background:"".concat(h.overlayColor),boxShadow:"".concat(h.overlayShadowStrength," ").concat(h.overlayShadowColor)},className:"overlay",children:[Object(d.jsx)("ul",{className:"lists",children:this.listItem}),Object(d.jsx)(m,{class:"overlayClock",onClick:this.props.toggle.bind(this)}),Object(d.jsx)(x,{defaultText:this.props.defaultText,setText:this.props.setText,class:"overlayForm1"})]})})}}]),n}(o.a.Component),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={isToggled:!0,text:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({isToggled:!0}),this.timerID=null}},{key:"toggle",value:function(){this.setState((function(t){return{isToggled:!t.isToggled}})),this.props.blurredState(!this.state.isToggled),this.handleTimeout()}},{key:"handleTimeout",value:function(){h.timeout>0&&this.setIdleTimeout(h.timeout)}},{key:"setIdleTimeout",value:function(t){var e=this;this.clearTimeout(),this.timerID=setTimeout((function(){e.setState({isToggled:!1}),e.props.blurredState(!1)}),t)}},{key:"clearTimeout",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.timerID&&clearTimeout(this.timerID)}))},{key:"setSameText",value:function(t){this.setState({text:t})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{setText:this.setSameText.bind(this),clearTimeout:this.handleTimeout.bind(this),toggle:this.toggle.bind(this),shown:this.state.isToggled,defaultText:this.state.text,class:"slideUp"}),Object(d.jsx)(w.a,{in:!this.state.isToggled,timeout:200,classNames:"overlayForm",unmountOnExit:!0,children:Object(d.jsxs)("div",{className:"consoleSmall",children:[Object(d.jsx)(m,{class:"backgroundClock",onClick:this.toggle.bind(this)}),Object(d.jsx)(x,{defaultText:this.state.text,setText:this.setSameText.bind(this),class:"backgroundForm",renderBookmarks:!0})]})})]})}}]),n}(o.a.Component),I=(n(94),n(25)),D=n(31),P=n.n(D),_=(o.a.Component,function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={x:a.props.X,y:a.props.Y,vx:a.props.velocityX,vy:a.props.velocityY,ax:a.props.velocityY,ay:a.props.accelerationX,color:P.a.Util.getRandomColor()},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){t.move()}),1e3/60)}},{key:"move",value:function(){var t=this.state.x+this.state.vx,e=this.state.y+this.state.vy;this.setState({x:t>=window.innerWidth?0:t,y:e>=window.innerHeight?0:e})}},{key:"render",value:function(){return Object(d.jsx)(I.b,{x:this.state.x,y:this.state.y,width:10,height:10,fill:this.state.color})}}]),n}(o.a.Component)),B=(o.a.Component,function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={blurred:!0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.body.addEventListener("keydown",(function(t){document.activeElement==document.body&&document.getElementsByTagName("input").length>0&&document.getElementsByTagName("input")[0].focus()}))}},{key:"setBlur",value:function(t){this.setState({blurred:t})}},{key:"getBlur",value:function(){return this.state.blurred?h.blurStrength:0}},{key:"getDimPercent",value:function(){return this.state.blurred?h.dimPercentage:0}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"Background",style:{backgroundImage:"url(".concat(h.background,")")}}),Object(d.jsx)("div",{className:"backgroundBlur",style:{backdropFilter:"blur(".concat(this.getBlur(),"px) brightness(").concat(1-this.getDimPercent()/100,")")}}),Object(d.jsx)(N,{blurredState:this.setBlur.bind(this)})]})}}]),n}(o.a.Component)),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),E()},5:function(t){t.exports=JSON.parse('{"background":"https://source.unsplash.com/random/1920x1080","blurStrength":"10","dimPercentage":"10","color":"#383e42","overlayColor":"#383e428c","textColor":"#fafafa","iconColor":"#fafafa","timeout":20000,"shadowColor":"rgba(0,0,0,0.6)","shadowStrength":"0px 1px 4px","overlayShadowColor":"rgba(0,0,0,0.6)","overlayShadowStrength":"0px 1px 8px","searchEngine":"https://duckduckgo.com/?q=","weatherUnit":"metric","weatherLocation":"auto","weatherCoordinates":[51.4049607501142,21.15317029465331],"bookmarks":[{"title":"WORK","list":[{"key":"g","name":"Gmail","url":"https://mail.google.com/mail/u/0/"},{"key":"wu","name":"WU","url":"https://euczelnia.uniwersytetradom.pl/"},{"key":"wteii","name":"WTEiI","url":"https://old.uniwersytetradom.pl/redirect.php?action=setcategory&id=741"},{"key":"uth","name":"UTH","url":"https://uniwersytetradom.pl/"}]},{"title":"LURK","list":[{"key":"t","name":"Twitter","url":"https://twitter.com/"},{"key":"r","name":"Reddit","url":"https://www.reddit.com/"},{"key":"y","name":"YouTube","url":"https://youtube.com/feed/subscriptions"},{"key":"ttv","name":"Twitch","url":"https://twitch.tv/"}]},{"title":"OTHER","list":[{"key":"op","name":"op.gg","url":"https://eune.op.gg/summoner/userName=istir"},{"key":"d","name":"Diki","url":"https://www.diki.pl/"},{"key":"ff","name":"ff20","url":"http://surrenderat20.net/"},{"key":"u","name":"ugg","url":"http://u.gg/"}]}],"frequentNameShown":false,"frequentBookmarks":[{"name":"Twitter","icon":"twitter","url":"https://twitter.com/"},{"name":"YouTube","icon":"youtube","url":"https://youtube.com/feed/subscriptions"},{"name":"Reddit","icon":"reddit","url":"https://www.reddit.com/"}]}')},68:function(t,e,n){},69:function(t,e,n){},80:function(t,e){},82:function(t,e){},94:function(t,e,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.6ac9e62c.chunk.js.map