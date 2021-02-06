(this["webpackJsonptilde-5.4.0-react"]=this["webpackJsonptilde-5.4.0-react"]||[]).push([[0],{133:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(22),r=n.n(o),s=(n(68),n(9)),c=n(10),l=n(12),u=n(11),h=(n.p,n(69),n(2)),d=n(0),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={date:new Date,isToggled:!1},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){t.tick()}),1e3),this.setState({isToggled:!1})}},{key:"toggle",value:function(){this.setState((function(t){return{isToggled:!t.isToggled}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock ".concat(this.props.class),style:{color:h.textColor},onClick:this.props.onClick,children:[Object(d.jsxs)("div",{className:"Hours",style:{textShadow:"".concat(h.shadowStrength," ").concat(h.shadowColor)},children:[(this.state.date.getHours()<10?"0":"")+this.state.date.getHours()," "]}),Object(d.jsxs)("div",{className:"Minutes",style:{textShadow:"".concat(h.shadowStrength," ").concat(h.shadowColor)},children:[(this.state.date.getMinutes()<10?"0":"")+this.state.date.getMinutes()," "]})]})}}]),n}(i.a.Component),p=n(60),b=n(17),f=n(61);b.b.add(f.a);var g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).listItem=h.frequentBookmarks.map((function(t){return Object(d.jsxs)("a",{style:{color:h.iconColor,filter:"drop-shadow(".concat(h.shadowStrength," ").concat(h.shadowColor,")")},href:t.url,className:"frequentBookmarkIcon",children:[Object(d.jsx)(p.a,{icon:["fab",t.icon],size:h.frequentNameShown?"2x":"3x"}),!!h.frequentNameShown&&Object(d.jsx)("span",{className:"frequentName",children:t.name})]},t.url)})),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"frequentBookmarks ".concat(this.props.isBlackingOut?"blackingOut blackingOutFilter":""),children:this.listItem})}}]),n}(i.a.Component),k=n(74),v=n(75),y=n(76),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),a=e.call(this,t),y.setAPPID("fa54ebb35a166dfa6a6ef9fe7b6dcf06"),y.setUnits(h.weatherUnit),"auto"!=h.weatherLocation?y.setCity(h.weatherLocation):y.setCoordinate(-1,1),a.state={location:null,temperature:null,description:null,icon:null,isNight:!1},a}return Object(c.a)(n,[{key:"getCurrentLocation",value:function(t){if(!navigator.geolocation)throw new Error("Your browser does not support geolocation.");navigator.geolocation.getCurrentPosition((function(e){t(e)}))}},{key:"getCurrentWeather",value:function(t){y.getAllWeather((function(e,n){t(n)}))}},{key:"componentDidMount",value:function(){var t=this;this.getCurrentLocation((function(e){t.setState((function(t){return{location:e}}));try{y.setCoordinate(t.state.location.coords.latitude,t.state.location.coords.longitude),t.getCurrentWeather((function(e){t.setState((function(t){return{temperature:Math.round(e.main.temp),description:e.weather[0].main,icon:e.cod,isNight:(new Date).getHours()>20&&(new Date).getHours<6}}))}))}catch(n){console.log(n)}}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"placeholderText",style:{color:h.textColor,filter:"brightness(40%)",opacity:"true"==this.props.show?"1":"0"},children:[null===this.state.temperature?"":this.state.temperature,Object(d.jsx)("i",{className:"placeholderIcon owf owf-".concat(this.state.icon,"-").concat(this.state.isNight?"n":"d")})]})}}]),n}(i.a.Component),O=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={hidePlaceholder:!1},a._target=i.a.createRef(),a}return Object(c.a)(n,[{key:"togglePlaceholder",value:function(){this.setState((function(t){return{hidePlaceholder:!t.hidePlaceholder}}))}},{key:"showPlaceholder",value:function(){this.setState({hidePlaceholder:!1})}},{key:"hidePlaceholder",value:function(){this.setState({hidePlaceholder:!0})}},{key:"componentDidMount",value:function(){this._target.current.focus()}},{key:"submitForm",value:function(t){window.open(v(this._target.current.value)?this._target.current.value:h.searchEngine+this._target.current.value,"_parent"),this._target.current.value="",t.preventDefault()}},{key:"ensureTextSimilarity",value:function(){this._target.current&&this.props.setText(this._target.current.value)}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("form",{onSubmit:this.submitForm.bind(this),className:"searchForm ".concat(this.props.class),children:[Object(d.jsxs)("div",{style:{position:"relative"},className:"".concat(this.props.isBlackingOut?"blackingOut blackingOutFilter":""),children:[Object(d.jsx)("input",{ref:this._target,className:"searchInput",type:"text",onChange:function(){t.ensureTextSimilarity(),0==t._target.current.value.length?t.showPlaceholder():t.hidePlaceholder()},onFocus:function(){t._target.current.value.length>0&&t.hidePlaceholder()},onBlur:function(){0==t._target.current.value.length&&t.showPlaceholder()},defaultValue:this.props.defaultText,style:{boxShadow:"".concat(h.shadowStrength," ").concat(h.shadowColor),backgroundColor:"".concat(h.color),color:this.state.hidePlaceholder?"#ffffff"==k("".concat(h.color))?"#fafafa":"#0a0a0a":"transparent"}}),this.state.hidePlaceholder?Object(d.jsx)(j,{show:"false"}):Object(d.jsx)(j,{show:"true"})]}),this.props.renderBookmarks?Object(d.jsx)(g,{isBlackingOut:this.props.isBlackingOut}):""]})}}]),n}(i.a.Component),x=n(30),w=n(134),T=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).listItem=a.props.listItems.map((function(t){return Object(d.jsx)(S,{hideKeys:a.props.hideKeys,keyName:t.key,name:t.name,urlName:t.url},t.url)})),a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("li",{className:"category",style:{maxWidth:"".concat(100/h.bookmarks.length-5,"%")},children:[Object(d.jsx)("h2",{className:"categoryName",children:this.props.categoryName}),this.listItem]})}}]),n}(i.a.Component),S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){return Object(s.a)(this,n),e.call(this,t)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("ul",{children:Object(d.jsx)("li",{className:"command",children:Object(d.jsxs)("a",{href:this.props.urlName,children:[this.props.hideKeys?"":Object(d.jsx)("span",{className:"commandKey",children:this.props.keyName}),Object(d.jsx)("span",{className:"commandName",children:this.props.name})]})})})}}]),n}(i.a.Component),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={shown:!0,background:"".concat(h.overlayColor),left:"0px",top:"0px",hideKeys:!1},a.listItem=h.bookmarks.map((function(t,e){return Object(d.jsx)(T,{hideKeys:a.state.hideKeys,listItems:t.list,categoryName:t.title},t.title)})),a._element=i.a.createRef(),window.addEventListener("resize",a.onWindowResized.bind(Object(x.a)(a))),a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"onWindowResized",value:function(){window.innerWidth<500?this.setState({hideKeys:!0}):this.setState({hideKeys:!1})}},{key:"centerHorizontally",value:function(){try{this.setState({left:"calc((100vw - ".concat(this._element.current.clientWidth,"px) / 2)")})}catch(t){this.setState({left:"calc(100vw / 2 - ".concat(50,"px)")})}}},{key:"centerVertically",value:function(){try{this.setState({top:"calc(100vh / 2 - ".concat(this._element.current.clientHeight/2,"px)")})}catch(t){this.setState({top:"calc(100vh / 2 - ".concat(50,"px)")})}}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return Object(d.jsx)(w.a,{in:this.props.shown,timeout:200,onEnter:function(){t.centerHorizontally(),t.centerVertically()},classNames:"overlayParent",unmountOnExit:!0,children:Object(d.jsxs)("div",{ref:this._element,onClick:function(e){t.props.clearTimeout(),e.stopPropagation()},onInput:function(){t.props.clearTimeout()},style:{background:"".concat(h.overlayColor),boxShadow:"".concat(h.overlayShadowStrength," ").concat(h.overlayShadowColor)},className:"overlay",children:[Object(d.jsx)("ul",{className:"lists",children:this.listItem}),Object(d.jsx)(m,{class:"overlayClock",onClick:this.props.toggle.bind(this)}),Object(d.jsx)(O,{defaultText:this.props.defaultText,setText:this.props.setText,class:"overlayForm1"})]})})}}]),n}(i.a.Component),N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={text:""},a.handleIdleTimeout(),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.idleTimerID=null}},{key:"toggle",value:function(){this.props.blurredState(!this.props.isBlurred),this.handleIdleTimeout()}},{key:"handleIdleTimeout",value:function(){h.timeout>0&&this.setIdleTimeout(h.timeout)}},{key:"setIdleTimeout",value:function(t){var e=this;this.clearIdleTimeout(),this.idleTimerID=setTimeout((function(){e.props.blurredState(!1),e.props.blackingOutTimeout()}),t)}},{key:"clearIdleTimeout",value:function(){this.idleTimerID&&clearTimeout(this.idleTimerID)}},{key:"setSameText",value:function(t){this.setState({text:t})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{setText:this.setSameText.bind(this),clearTimeout:this.handleIdleTimeout.bind(this),toggle:this.toggle.bind(this),shown:this.props.isBlurred,defaultText:this.state.text,class:"slideUp"}),Object(d.jsx)(w.a,{in:!this.props.isBlurred,timeout:200,classNames:"overlayForm",unmountOnExit:!0,children:Object(d.jsxs)("div",{className:"consoleSmall",children:[Object(d.jsx)(m,{class:"backgroundClock",onClick:this.toggle.bind(this)}),Object(d.jsx)(O,{isBlackingOut:this.props.isBlackingOut,defaultText:this.state.text,setText:this.setSameText.bind(this),class:"backgroundForm",renderBookmarks:!0})]})})]})}}]),n}(i.a.Component),B=(n(94),n(95),n(25)),I=n(31),D=n.n(I),P=(i.a.Component,function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={x:a.props.X,y:a.props.Y,vx:a.props.velocityX,vy:a.props.velocityY,ax:a.props.velocityY,ay:a.props.accelerationX,color:D.a.Util.getRandomColor()},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){t.move()}),1e3/60)}},{key:"move",value:function(){var t=this.state.x+this.state.vx,e=this.state.y+this.state.vy;this.setState({x:t>=window.innerWidth?0:t,y:e>=window.innerHeight?0:e})}},{key:"render",value:function(){return Object(d.jsx)(B.b,{x:this.state.x,y:this.state.y,width:10,height:10,fill:this.state.color})}}]),n}(i.a.Component)),_=(i.a.Component,function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={blurred:!0,blackingOut:!1},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.body.addEventListener("keydown",(function(t){document.activeElement==document.body&&document.getElementsByTagName("input").length>0&&document.getElementsByTagName("input")[0].focus()})),document.body.addEventListener("mousemove",(function(e){t.setState({blackingOut:!1}),t.handleBlackingTimeout()}))}},{key:"setBlackingOut",value:function(t){this.setState({blackingOut:t})}},{key:"handleBlackingTimeout",value:function(){h.blackingOutTimeout>0&&this.setBlackingTimeout(h.blackingOutTimeout)}},{key:"setBlackingTimeout",value:function(t){var e=this;this.clearBlackingTimeout(),this.blackingTimerID=setTimeout((function(){e.setBlackingOut(!0)}),t)}},{key:"clearBlackingTimeout",value:function(){this.blackingTimerID&&clearTimeout(this.blackingTimerID)}},{key:"setBlur",value:function(t){this.setState({blurred:t})}},{key:"getBlur",value:function(){return this.state.blurred?h.blurStrength:0}},{key:"getDimPercent",value:function(){return this.state.blurred?h.dimPercentage:0}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"Background",style:{backgroundImage:"url(".concat(h.background,")")}}),Object(d.jsx)("div",{className:"backgroundBlur ".concat(this.state.blackingOut?"blackingOut blackingOutBackground":""),style:{backdropFilter:"blur(".concat(this.getBlur(),"px) brightness(").concat(1-this.getDimPercent()/100,")")},onClick:function(){t.setState({blurred:!1})}}),Object(d.jsx)(N,{isBlackingOut:this.state.blackingOut,blackingOutTimeout:this.handleBlackingTimeout.bind(this),isBlurred:this.state.blurred,blurredState:this.setBlur.bind(this)})]})}}]),n}(i.a.Component)),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),o(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),E()},2:function(t){t.exports=JSON.parse('{"background":"https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D","blurStrength":"10","dimPercentage":"10","color":"#383e42","overlayColor":"#383e428c","textColor":"#fafafa","iconColor":"#fafafa","timeout":20000,"blackingOutTimeout":40000,"shouldBlackOutSearch":true,"shadowColor":"rgba(0,0,0,0.6)","shadowStrength":"0px 1px 4px","overlayShadowColor":"rgba(0,0,0,0.6)","overlayShadowStrength":"0px 1px 8px","searchEngine":"https://duckduckgo.com/?q=","weatherUnit":"metric","weatherLocation":"auto","weatherCoordinates":[51.4049607501142,21.15317029465331],"bookmarks":[{"title":"WORK","list":[{"key":"g","name":"Gmail","url":"https://mail.google.com/mail/u/0/"},{"key":"wu","name":"WU","url":"https://euczelnia.uniwersytetradom.pl/"},{"key":"wteii","name":"WTEiI","url":"https://old.uniwersytetradom.pl/redirect.php?action=setcategory&id=741"},{"key":"uth","name":"UTH","url":"https://uniwersytetradom.pl/"}]},{"title":"LURK","list":[{"key":"t","name":"Twitter","url":"https://twitter.com/"},{"key":"r","name":"Reddit","url":"https://www.reddit.com/"},{"key":"y","name":"YouTube","url":"https://youtube.com/feed/subscriptions"},{"key":"ttv","name":"Twitch","url":"https://twitch.tv/"}]},{"title":"OTHER","list":[{"key":"op","name":"op.gg","url":"https://eune.op.gg/summoner/userName=istir"},{"key":"d","name":"Diki","url":"https://www.diki.pl/"},{"key":"ff","name":"ff20","url":"http://surrenderat20.net/"},{"key":"u","name":"ugg","url":"http://u.gg/"}]}],"frequentNameShown":false,"frequentBookmarks":[{"name":"Twitter","icon":"twitter","url":"https://twitter.com/"},{"name":"YouTube","icon":"youtube","url":"https://youtube.com/feed/subscriptions"},{"name":"Reddit","icon":"reddit","url":"https://www.reddit.com/"}]}')},68:function(t,e,n){},69:function(t,e,n){},80:function(t,e){},82:function(t,e){},94:function(t,e,n){},95:function(t,e,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.a59f1434.chunk.js.map