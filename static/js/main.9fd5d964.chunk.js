(this["webpackJsonpneural-net-snake"]=this["webpackJsonpneural-net-snake"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),s=a.n(i),o=(a(32),a(7)),p=a(9),c=a(11),l=a(10),u=a(15);var h=function(e){return r.a.createElement("div",null,e.snake.map((function(t,a){var n={left:"".concat(t[0]*e.pixelSize,"px"),top:"".concat(t[1]*e.pixelSize,"px"),width:"".concat(e.pixelSize,"px"),height:"".concat(e.pixelSize,"px")};return r.a.createElement("div",{className:"SnakeSegment",key:a,style:n})})))};var S=function(e){var t={left:"".concat(e.coordinates[0]*e.pixelSize,"px"),top:"".concat(e.coordinates[1]*e.pixelSize,"px"),width:"".concat(e.pixelSize,"px"),height:"".concat(e.pixelSize,"px")};return r.a.createElement("div",{className:"SnakeFood",style:t})},m=a(5),g=a.n(m),f=a(8),d=function(e){for(var t=Array.from(Array(e.gridWidth*e.gridHeight),(function(t){return Array(e.gridWidth*e.gridHeight).fill(0)})),a=0;a<e.gridHeight;a+=1)for(var n=0;n<e.gridWidth;n+=1){var r=a*e.gridWidth+n;if(n+1<e.gridWidth){var i=a*e.gridWidth+n+1;t[r][i]=1,t[i][r]=1}if(a+1<e.gridHeight){var s=(a+1)*e.gridWidth+n;t[r][s]=1,t[s][r]=1}}return t},k=function(e,t){return e[1]*t.gridWidth+e[0]},v=function(e,t){var a=[0,0];return a[0]=e%t.gridWidth,a[1]=Math.floor(e/t.gridWidth),a},x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).findPath=Object(f.a)(g.a.mark((function e(){var t,a,r,i,s,o,p,c,l,u,h,S,m;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=n.props.gameState.snake[n.props.gameState.snake.length-2][1]*n.props.areaSize.gridWidth+n.props.gameState.snake[n.props.gameState.snake.length-2][0],a=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),console.log(t),console.log(a),(r=n.adjacencyMatrix.map((function(e){return e.slice()})))[a][t]=0,r[t][a]=0,i=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),s=k(n.props.gameState.food,n.props.areaSize),o=new Array(r.length).fill(!1),p=[],c=new Array(r.length).fill(Number.MAX_SAFE_INTEGER),l=new Array(r.length).fill(-1),n.setState({visited:o,queue:p,path:[]}),o[i]=!0,p.push(i),c[i]=0,u=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p.length>0)){e.next=22;break}t=p.shift(),a=0;case 3:if(!(a<r.length)){e.next=20;break}if(1!==r[t][a]){e.next=17;break}if(!1!==o[a]){e.next=17;break}if(o[a]=!0,c[a]=c[t]+1,l[a]=t,p.push(a),n.setState({visited:o,queue:p}),!n.props.options.visualize){e.next=14;break}return e.next=14,h(10);case 14:if(a!==s){e.next=17;break}return console.log("path found"),e.abrupt("break",22);case 17:a++,e.next=3;break;case 20:e.next=0;break;case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=21,u();case 21:for((S=[]).push(m=s);-1!==l[m];)S.push(l[m]),m=l[m];return n.setState({path:S}),e.abrupt("return",S);case 27:case"end":return e.stop()}}),e)}))),n.solve=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.findPath();case 2:t=e.sent,n.props.moveSnake(t);case 4:case"end":return e.stop()}}),e)}))),n.adjacencyMatrix=d(n.props.areaSize),n.state={queue:[],visited:[],path:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return this.props.options.visualize?r.a.createElement("div",null,this.state.queue.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Queue",style:i})})),this.state.visited.map((function(t,a){if(!0===t){var n=v(a,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Visited",style:i})}})),this.state.path.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Path",style:i})}))):null}}]),a}(n.Component),z=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).findPath=Object(f.a)(g.a.mark((function e(){var t,a,r,i,s,o,p,c,l,u,h,S,m;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=n.props.gameState.snake[n.props.gameState.snake.length-2][1]*n.props.areaSize.gridWidth+n.props.gameState.snake[n.props.gameState.snake.length-2][0],a=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),console.log(t),console.log(a),(r=n.adjacencyMatrix.map((function(e){return e.slice()})))[a][t]=0,r[t][a]=0,i=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),s=k(n.props.gameState.food,n.props.areaSize),o=new Array(r.length).fill(!1),p=[],c=new Array(r.length).fill(Number.MAX_SAFE_INTEGER),l=new Array(r.length).fill(-1),n.setState({visited:o,queue:p,path:[]}),o[i]=!0,p.push(i),c[i]=0,u=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p.length>0)){e.next=22;break}t=p.pop(),a=0;case 3:if(!(a<r.length)){e.next=20;break}if(1!==r[t][a]){e.next=17;break}if(!1!==o[a]){e.next=17;break}if(o[a]=!0,c[a]=c[t]+1,l[a]=t,p.push(a),n.setState({visited:o,queue:p}),!n.props.options.visualize){e.next=14;break}return e.next=14,h(10);case 14:if(a!==s){e.next=17;break}return console.log("path found"),e.abrupt("break",22);case 17:a++,e.next=3;break;case 20:e.next=0;break;case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=21,u();case 21:for((S=[]).push(m=s);-1!==l[m];)S.push(l[m]),m=l[m];return n.setState({path:S}),e.abrupt("return",S);case 27:case"end":return e.stop()}}),e)}))),n.solve=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.findPath();case 2:t=e.sent,n.props.moveSnake(t);case 4:case"end":return e.stop()}}),e)}))),n.adjacencyMatrix=d(n.props.areaSize),n.state={queue:[],visited:[],path:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return this.props.options.visualize?r.a.createElement("div",null,this.state.queue.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Queue",style:i})})),this.state.visited.map((function(t,a){if(!0===t){var n=v(a,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Visited",style:i})}})),this.state.path.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Path",style:i})}))):null}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).findPath=function(){var e=n.props.gameState.snake[n.props.gameState.snake.length-2][1]*n.props.areaSize.gridWidth+n.props.gameState.snake[n.props.gameState.snake.length-2][0],t=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize);console.log(e),console.log(t);var a=n.adjacencyMatrix.map((function(e){return e.slice()}));a[t][e]=0,a[e][t]=0;var r=new Array(a.length).fill(-1);n.setState({path:[]});k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),k(n.props.gameState.food,n.props.areaSize);var i=function(e,t){if(0===a[r[t-1]][e])return!1;for(var n=0;n<t;n+=1)if(r[n]===e)return!1;return!0};return r[0]=0,!1===function e(t){if(t===a.length)return 1===a[r[t-1]][r[0]];for(var n=1;n<a.length;n+=1)if(i(n,t)){if(r[t]=n,!0===e(t+1))return!0;r[t]=-1}return!1}(1)&&console.log("No path"),r},n.solve=function(){var e=n.findPath();console.log(e);e.length,n.props.gameState.snake[n.props.gameState.snake.length-1]},n.adjacencyMatrix=d(n.props.areaSize),n.state={path:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.solve()}},{key:"render",value:function(){var e=this;return this.props.options.visualize?r.a.createElement("div",null,this.state.path.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Path",style:i})}))):null}}]),a}(n.Component),E=function e(t,a){Object(o.a)(this,e),this.element=t,this.priority=a},y=function e(){var t=this;Object(o.a)(this,e),this.push=function(e,a){var n=new E(e,a);t.heap.push(n);for(var r=t.heap.length-1;r>0;){var i=t.heap[r],s=Math.floor((r-1)/2),o=t.heap[s];if(o.priority<=i.priority)break;t.heap[r]=o,t.heap[s]=i,r=s}},this.minHeapify=function(e){var a=2*e+1,n=2*e+2,r=e,i=t.heap.length;if(a<i&&t.heap[a].priority<t.heap[e].priority&&(r=a),n<i&&t.heap[n].priority<t.heap[e].priority&&(r=n),r!==e){var s=t.heap[r];t.heap[r]=t.heap[e],t.heap[e]=s,t.minHeapify(r)}},this.pop=function(){var e=t.heap[0];return t.heap[0]=t.heap.pop(),t.minHeapify(0),e.element},this.peak=function(){return t.heap[0].element},this.isEmpty=function(){return 0===t.heap.length},this.elements=function(){var e=[];return t.heap.forEach((function(t){e.push(t.element)})),e},this.heap=[]},w=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).heuristic=function(e,t){var a=v(e,n.props.areaSize),r=v(t,n.props.areaSize);return Math.abs(a[0]-r[0])+Math.abs(a[1]-r[1])},n.findPath=Object(f.a)(g.a.mark((function e(){var t,a,r,i,s,o,p,c,l,u,h;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=n.props.gameState.snake[n.props.gameState.snake.length-2][1]*n.props.areaSize.gridWidth+n.props.gameState.snake[n.props.gameState.snake.length-2][0],a=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),console.log(t),console.log(a),(r=n.adjacencyMatrix.map((function(e){return e.slice()})))[a][t]=0,r[t][a]=0,i=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),s=k(n.props.gameState.food,n.props.areaSize),(o=[])[i]=-1,(p=new y).push(i,0),n.setState({priorityQueue:p.elements()}),c=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p.isEmpty()){e.next=20;break}if((t=p.pop())!==s){e.next=4;break}return e.abrupt("break",20);case 4:a=0;case 5:if(!(a<r.length)){e.next=18;break}if(1!==r[t][a]){e.next=15;break}if(o.includes(a)){e.next=15;break}if(i=n.heuristic(s,a),p.push(a,i),o[a]=t,n.setState({priorityQueue:p.elements()}),!n.props.options.visualize){e.next=15;break}return e.next=15,l(10);case 15:a+=1,e.next=5;break;case 18:e.next=0;break;case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=18,c();case 18:for((u=[]).push(h=s);-1!==o[h];)u.push(o[h]),h=o[h];return e.abrupt("return",u);case 23:case"end":return e.stop()}}),e)}))),n.solve=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.findPath();case 2:t=e.sent,n.props.moveSnake(t);case 4:case"end":return e.stop()}}),e)}))),n.adjacencyMatrix=d(n.props.areaSize),n.state={priorityQueue:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return this.props.options.visualize?r.a.createElement("div",null,this.state.priorityQueue.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Queue",style:i})}))):null}}]),a}(n.Component),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).heuristic=function(e,t){var a=v(e,n.props.areaSize),r=v(t,n.props.areaSize);return Math.abs(a[0]-r[0])+Math.abs(a[1]-r[1])},n.findPath=Object(f.a)(g.a.mark((function e(){var t,a,r,i,s,o,p,c,l,u,h,S;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t=n.props.gameState.snake[n.props.gameState.snake.length-2][1]*n.props.areaSize.gridWidth+n.props.gameState.snake[n.props.gameState.snake.length-2][0],a=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),(r=n.adjacencyMatrix.map((function(e){return e.slice()})))[a][t]=0,r[t][a]=0,i=k(n.props.gameState.snake[n.props.gameState.snake.length-1],n.props.areaSize),s=k(n.props.gameState.food,n.props.areaSize),console.log(a),console.log(s),p=[],(o=[])[i]=-1,p[i]=0,(c=new y).push(i,0),n.setState({priorityQueue:c.elements()}),l=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a,i,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.isEmpty()){e.next=22;break}if((t=c.pop())!==s){e.next=4;break}return e.abrupt("break",22);case 4:a=0;case 5:if(!(a<r.length)){e.next=20;break}if(1!==r[t][a]){e.next=17;break}if(i=p[t]+1,!(!o.includes(a)|i<p[a])){e.next=17;break}if(p[a]=i,l=n.heuristic(s,a)+i,c.push(a,l),o[a]=t,n.setState({priorityQueue:c.elements()}),!n.props.options.visualize){e.next=17;break}return e.next=17,u(10);case 17:a+=1,e.next=5;break;case 20:e.next=0;break;case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=20,l();case 20:for((h=[]).push(S=s);-1!==o[S];)h.push(o[S]),S=o[S];return e.abrupt("return",h);case 25:case"end":return e.stop()}}),e)}))),n.solve=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.findPath();case 2:t=e.sent,n.props.moveSnake(t);case 4:case"end":return e.stop()}}),e)}))),n.adjacencyMatrix=d(n.props.areaSize),n.state={priorityQueue:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return this.props.options.visualize?r.a.createElement("div",null,this.state.priorityQueue.map((function(t,a){var n=v(t,e.props.areaSize),i={left:"".concat(n[0]*e.props.areaSize.pixelSize,"px"),top:"".concat(n[1]*e.props.areaSize.pixelSize,"px"),width:"".concat(e.props.areaSize.pixelSize,"px"),height:"".concat(e.props.areaSize.pixelSize,"px")};return r.a.createElement("div",{className:"Queue",style:i})}))):null}}]),a}(n.Component),j={snake:[[0,0],[1,0],[2,0]],direction:"RIGHT"},F=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getRandomCoordinate=function(){var e=n.props.areaSettings.gridWidth,t=n.props.areaSettings.gridHeight;return[Math.floor(Math.random()*e+0),Math.floor(Math.random()*t+0)]},n.onKeyDown=function(e){switch((e=e||window.event).keyCode){case 38:"DOWN"!==n.state.direction&&n.setState({direction:"UP"});break;case 40:"UP"!==n.state.direction&&n.setState({direction:"DOWN"});break;case 37:"RIGHT"!==n.state.direction&&n.setState({direction:"LEFT"});break;case 39:"LEFT"!==n.state.direction&&n.setState({direction:"RIGHT"})}},n.moveSnake=function(){var e=Object(u.a)(n.state.snake),t=e[e.length-1];switch(n.state.direction){case"UP":t=[t[0],t[1]-1];break;case"DOWN":t=[t[0],t[1]+1];break;case"LEFT":t=[t[0]-1,t[1]];break;case"RIGHT":t=[t[0]+1,t[1]]}e.push(t),e.shift(),n.setState({snake:e})},n.moveSnakeUp=function(){n.setState({direction:"UP"});var e=Object(u.a)(n.state.snake),t=e[e.length-1];t=[t[0],t[1]-1],e.push(t),e.shift(),n.setState({snake:e})},n.moveSnakeDown=function(){n.setState({direction:"DOWN"});var e=Object(u.a)(n.state.snake),t=e[e.length-1];t=[t[0],t[1]+1],e.push(t),e.shift(),n.setState({snake:e})},n.moveSnakeLeft=function(){n.setState({direction:"LEFT"});var e=Object(u.a)(n.state.snake),t=e[e.length-1];t=[t[0]-1,t[1]],e.push(t),e.shift(),n.setState({snake:e})},n.moveSnakeRight=function(){n.setState({direction:"RIGHT"});var e=Object(u.a)(n.state.snake),t=e[e.length-1];t=[t[0]+1,t[1]],e.push(t),e.shift(),n.setState({snake:e})},n.isOutOfBounds=function(){var e=n.state.snake[n.state.snake.length-1];(e[0]>=n.props.areaSettings.gridWidth||e[1]>=n.props.areaSettings.gridHeight||e[0]<0||e[1]<0)&&n.gameOver()},n.gameOver=function(){alert("Game Over! Your score is ".concat(n.props.gameScore)),n.setState(j),n.setState({food:n.getRandomCoordinate(),currentAlgo:n.props.algorithm},(function(){switch(clearInterval(n.manualsnake),n.state.currentAlgo){case"BFS":n.refs.BFS.solve();break;case"DFS":n.refs.DFS.solve();break;case"BestFS":n.refs.BestFirstSearch.solve();break;case"Astar":n.refs.Astar.solve();break;case"Human":n.manualsnake=setInterval(n.moveSnake,n.props.gameSettings.snakeSpeed)}})),n.props.scoreChangehandler(0)},n.isSelfBite=function(){var e=Object(u.a)(n.state.snake),t=e[e.length-1];e.pop(),e.forEach((function(e){e[0]===t[0]&&e[1]===t[1]&&(alert("BIT YOURSELF"),n.gameOver())}))},n.isEat=function(){var e=n.state.snake[n.state.snake.length-1];e[0]===n.state.food[0]&&e[1]===n.state.food[1]&&(n.props.gameSettings.enlargeSnake&&n.increaseLength(),n.props.scoreChangehandler(n.props.gameScore+1),n.setState({food:n.getRandomCoordinate(),currentAlgo:n.props.algorithm},(function(){switch(clearInterval(n.manualsnake),n.state.currentAlgo){case"BFS":n.refs.BFS.solve();break;case"DFS":n.refs.DFS.solve();break;case"BestFS":n.refs.BestFirstSearch.solve();break;case"Astar":n.refs.Astar.solve();break;case"Human":n.manualsnake=setInterval(n.moveSnake,n.props.gameSettings.snakeSpeed),document.onkeydown=n.onKeyDown}})))},n.increaseLength=function(){var e=Object(u.a)(n.state.snake);e.unshift([]),n.setState({snake:e})},n.moveSnake=function(e){var t=e.length-1;!function a(){var r=n.state.snake[n.state.snake.length-1];setTimeout((function(){e[t]===k(r,n.props.areaSettings)+1?(console.log("Moving snake right"),n.moveSnakeRight()):e[t]===k(r,n.props.areaSettings)-1?(console.log("Moving snake left"),n.moveSnakeLeft()):e[t]===k(r,n.props.areaSettings)+n.props.areaSettings.gridWidth?(console.log("Moving snake down"),n.moveSnakeDown()):e[t]===k(r,n.props.areaSettings)-n.props.areaSettings.gridWidth?(console.log("Moving snake up"),n.moveSnakeUp()):(console.log(e[t]),console.log(r),console.log("illegal move")),--t>=0&&a()}),n.props.gameSettings.snakeSpeed)}()},n.state={snake:[[0,0],[1,0],[2,0]],food:n.getRandomCoordinate(),direction:"RIGHT",eaten:!1,currentAlgo:"BFS"},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.refs.BFS.solve()}},{key:"componentDidUpdate",value:function(){this.isOutOfBounds(),this.isSelfBite(),this.isEat()}},{key:"render",value:function(){var e,t={width:"".concat(this.props.areaSettings.gridWidth*this.props.areaSettings.pixelSize,"px"),height:"".concat(this.props.areaSettings.gridHeight*this.props.areaSettings.pixelSize,"px")},a=r.a.createElement(x,{ref:"BFS",gameState:this.state,areaSize:this.props.areaSettings,moveSnake:this.moveSnake,options:{visualize:this.props.visualize,snakeSpeed:this.props.gameSettings.snakeSpeed}}),n=r.a.createElement(z,{ref:"DFS",gameState:this.state,areaSize:this.props.areaSettings,moveSnake:this.moveSnake,options:{visualize:this.props.visualize,snakeSpeed:this.props.gameSettings.snakeSpeed}}),i=r.a.createElement(b,{ref:"HAMIL",gameState:this.state,areaSize:this.props.areaSettings,moveSnake:this.moveSnake,options:{visualize:this.props.visualize,snakeSpeed:this.props.gameSettings.snakeSpeed}}),s=r.a.createElement(w,{ref:"BestFirstSearch",gameState:this.state,areaSize:this.props.areaSettings,moveSnake:this.moveSnake,options:{visualize:this.props.visualize,snakeSpeed:this.props.gameSettings.snakeSpeed}}),o=r.a.createElement(O,{ref:"Astar",gameState:this.state,areaSize:this.props.areaSettings,moveSnake:this.moveSnake,options:{visualize:this.props.visualize,snakeSpeed:this.props.gameSettings.snakeSpeed}});switch(this.state.currentAlgo){case"BFS":e=a;break;case"DFS":e=n;break;case"Hamil":e=i;break;case"BestFS":e=s;break;case"Astar":e=o}return r.a.createElement("div",{className:"GameArea",style:t},r.a.createElement(h,{snake:this.state.snake,pixelSize:this.props.areaSettings.pixelSize}),r.a.createElement(S,{coordinates:this.state.food,pixelSize:this.props.areaSettings.pixelSize}),e)}}]),a}(n.Component),A=a(25),M=a(23),B=a(16),N=a(13),W=a(14),C=a(12),H=a(22),I=a.n(H),P=(a(34),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleScorechange=function(e){n.setState({score:e})},n.state={gameAreaSettings:{gridHeight:30,gridWidth:50,pixelSize:20},algorithm:"BFS",visualize:!1,gameSettings:{snakeSpeed:40,enlargeSnake:!1},score:0},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(A.a,{fluid:!0,style:{marginBottom:"0px",backgroundColor:"#008b00"}},r.a.createElement(M.a,null,r.a.createElement("h1",null,"\ud83d\udc0dSnake AI"),r.a.createElement("p",null,"A Snake Game that can be played by an AI that can help visualize several search algorithms.")))),r.a.createElement("div",null,r.a.createElement(M.a,{fluid:!0},r.a.createElement(B.a,null,r.a.createElement(N.a,{sm:4,align:"center",style:{margin:"auto"}},r.a.createElement("div",{id:"score"},"\ud83c\udf4eScore: ",this.state.score),r.a.createElement(C.a,{className:"form"},r.a.createElement(C.a.Group,{as:B.a},r.a.createElement(C.a.Label,{column:!0},"Algorithm:"),r.a.createElement(N.a,null,r.a.createElement(W.a,null,r.a.createElement(W.a.Toggle,{variant:"success",id:"dropdown-basic"},this.state.algorithm),r.a.createElement(W.a.Menu,null,r.a.createElement(W.a.Item,{onClick:function(){e.setState({algorithm:"BFS"})}},"BFS"),r.a.createElement(W.a.Item,{onClick:function(){e.setState({algorithm:"DFS"})}},"DFS"),r.a.createElement(W.a.Item,{onClick:function(){e.setState({algorithm:"BestFS"})}},"Greedy Best First Search"),r.a.createElement(W.a.Item,{onClick:function(){e.setState({algorithm:"Astar"})}},"A star"),r.a.createElement(W.a.Item,{onClick:function(){e.setState({algorithm:"Human"})}},"Human Player"))))),r.a.createElement(C.a.Group,{as:B.a},r.a.createElement(C.a.Label,{column:!0},"Algorithm Visualization"),r.a.createElement(N.a,null,r.a.createElement(I.a,{checked:this.state.visualize,onlabel:"ON",offlabel:"OFF",onChange:function(t){e.setState({visualize:t})}}))),r.a.createElement(C.a.Group,{as:B.a},r.a.createElement(C.a.Label,{column:!0},"Snake Speed"),r.a.createElement(N.a,null,r.a.createElement(C.a.Control,{type:"range",min:"10",max:"100",step:"10",id:"snakeSpeed",className:"slider",onChange:function(t){e.setState({gameSettings:{snakeSpeed:100-t.target.value,enlargeSnake:e.state.gameSettings.enlargeSnake}})}}),100-this.state.gameSettings.snakeSpeed)),r.a.createElement(C.a.Group,{as:B.a},r.a.createElement(C.a.Label,{column:!0},"Enlarge Snake after eating apple"),r.a.createElement(N.a,null,r.a.createElement(I.a,{checked:this.state.enlargeSnake,onlabel:"ON",offlabel:"OFF",onChange:function(t){e.setState({gameSettings:{snakeSpeed:e.state.gameSettings.snakeSpeed,enlargeSnake:t}})}}))))),r.a.createElement(N.a,{sm:8,className:"area",id:"123"},r.a.createElement(F,{areaSettings:this.state.gameAreaSettings,algorithm:this.state.algorithm,visualize:this.state.visualize,gameSettings:this.state.gameSettings,gameScore:this.state.score,scoreChangehandler:this.handleScorechange}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9fd5d964.chunk.js.map