(self["webpackChunkcalendar_app_ui"] = self["webpackChunkcalendar_app_ui"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _cardComponents_deck_container_deck_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardComponents/deck-container/deck-container.component */ 8539);


class AppComponent {
    constructor() {
        this.title = 'calendar-app-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-deck-container");
    } }, directives: [_cardComponents_deck_container_deck_container_component__WEBPACK_IMPORTED_MODULE_0__.DeckContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _cardComponents_deck_container_deck_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardComponents/deck-container/deck-container.component */ 8539);
/* harmony import */ var _cardComponents_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardComponents/card-container/card-container.component */ 744);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _pipes_dynamic_component_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/dynamic-component.pipe */ 4285);
/* harmony import */ var _cardComponents_card_directives_card_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardComponents/card-directives/card.directive */ 2319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _cardComponents_deck_container_deck_container_component__WEBPACK_IMPORTED_MODULE_2__.DeckContainerComponent,
        _cardComponents_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_3__.CardContainerComponent,
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _pipes_dynamic_component_pipe__WEBPACK_IMPORTED_MODULE_5__.DynamicComponentPipe,
        _cardComponents_card_directives_card_directive__WEBPACK_IMPORTED_MODULE_6__.CardDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule] }); })();


/***/ }),

/***/ 2670:
/*!**************************************************!*\
  !*** ./src/app/cardComponents/card-component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
class Card {
    constructor(id, component) {
        this.id = id;
        this.component = component;
    }
}


/***/ }),

/***/ 744:
/*!***************************************************************************!*\
  !*** ./src/app/cardComponents/card-container/card-container.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContainerComponent": () => (/* binding */ CardContainerComponent)
/* harmony export */ });
/* harmony import */ var _card_directives_card_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card-directives/card.directive */ 2319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _card_services_deck_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card-services/deck-data.service */ 8816);




class CardContainerComponent {
    constructor(deckData, componentFactoryResolver, viewContainerRef) {
        this.deckData = deckData;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.index = 0;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // viewChild is set after the view has been initialized
        this.loadComponent();
    }
    ngAfterViewChecked() {
        // viewChild is updated after the view has been checked
        // this.loadComponent();
    }
    loadComponent() {
        console.log("Loading I: " + this.componentIndex);
        const componentItem = this.deckData.getDeckDataAt(this.componentIndex);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentItem.component);
        console.log(componentItem);
        // const viewContainerRef = this.viewContainerRef;
        // // viewContainerRef.clear();
        // const componentRef = viewContainerRef.createComponent<any>(componentFactory);
        // componentRef.instance.data = componentItem.data;
        const viewContainerRef = this.appCard.viewContainerRef;
        // viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = componentItem.data;
    }
}
CardContainerComponent.ɵfac = function CardContainerComponent_Factory(t) { return new (t || CardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_card_services_deck_data_service__WEBPACK_IMPORTED_MODULE_1__.DeckDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef)); };
CardContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CardContainerComponent, selectors: [["app-card-container"]], viewQuery: function CardContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_card_directives_card_directive__WEBPACK_IMPORTED_MODULE_0__.CardDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.appCard = _t.first);
    } }, inputs: { componentIndex: "componentIndex" }, decls: 2, vars: 0, consts: [[1, "card", "shadow-sm", "p-3", "mb-5", "bg-white", "rounded"], ["appCard", ""]], template: function CardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_card_directives_card_directive__WEBPACK_IMPORTED_MODULE_0__.CardDirective], styles: [".card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImNhcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 2319:
/*!******************************************************************!*\
  !*** ./src/app/cardComponents/card-directives/card.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDirective": () => (/* binding */ CardDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CardDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
CardDirective.ɵfac = function CardDirective_Factory(t) { return new (t || CardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
CardDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardDirective, selectors: [["", "appCard", ""]] });


/***/ }),

/***/ 7809:
/*!*************************************************************************!*\
  !*** ./src/app/cardComponents/card-services/deck-controller.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckControllerService": () => (/* binding */ DeckControllerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class DeckControllerService {
    constructor() {
        this.sizeOfDeck = 1;
        this.currVisibleCardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
        this.$currVisibleCard = this.currVisibleCardSubject.asObservable();
    }
    setSizeOfDeck(newSize) {
        this.sizeOfDeck = newSize;
    }
    currStateOfDeck() {
        return this.$currVisibleCard;
    }
    moveToNextCard() {
        let currCardValue = this.currVisibleCardSubject.getValue();
        if (currCardValue + 1 <= this.sizeOfDeck) {
            //next card is valid
            this.currVisibleCardSubject.next(currCardValue + 1);
        }
        else {
            //throw error that there is no next card available
            console.log("Error! Next card is not available");
        }
    }
    moveToPreviousCard() {
        let currCardValue = this.currVisibleCardSubject.getValue();
        if (currCardValue - 1 >= 1 && currCardValue - 1 <= this.sizeOfDeck) {
            //next card is valid
            this.currVisibleCardSubject.next(currCardValue - 1);
        }
        else {
            //throw error that there is no next card available
            console.log("Error! Next card is not available");
        }
    }
}
DeckControllerService.ɵfac = function DeckControllerService_Factory(t) { return new (t || DeckControllerService)(); };
DeckControllerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeckControllerService, factory: DeckControllerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8816:
/*!*******************************************************************!*\
  !*** ./src/app/cardComponents/card-services/deck-data.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckDataService": () => (/* binding */ DeckDataService)
/* harmony export */ });
/* harmony import */ var src_app_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/views/login/login.component */ 93);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card-component */ 2670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class DeckDataService {
    constructor() {
        this.data = [
            new _card_component__WEBPACK_IMPORTED_MODULE_1__.Card("login-state", src_app_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent),
            new _card_component__WEBPACK_IMPORTED_MODULE_1__.Card("second-state", src_app_views_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent)
        ];
    }
    getDeckData() {
        return this.data;
    }
    getDeckDataAt(index) {
        return this.data[index];
    }
}
DeckDataService.ɵfac = function DeckDataService_Factory(t) { return new (t || DeckDataService)(); };
DeckDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeckDataService, factory: DeckDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8539:
/*!***************************************************************************!*\
  !*** ./src/app/cardComponents/deck-container/deck-container.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckContainerComponent": () => (/* binding */ DeckContainerComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cardComponents_card_services_deck_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cardComponents/card-services/deck-controller.service */ 7809);
/* harmony import */ var _card_services_deck_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-services/deck-data.service */ 8816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _card_container_card_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card-container/card-container.component */ 744);






function DeckContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card-", i_r2, "");
} }
class DeckContainerComponent {
    constructor(deckController, deckData) {
        this.deckController = deckController;
        this.deckData = deckData;
        this.lodash = lodash__WEBPACK_IMPORTED_MODULE_0__;
        this.cards = this.deckData.getDeckData();
        this.deckController.setSizeOfDeck(this.cards.length);
        this.selectedIndex = 0;
    }
    ngOnInit() {
        //initial index is first
        this.selectedIndex = 0;
    }
}
DeckContainerComponent.ɵfac = function DeckContainerComponent_Factory(t) { return new (t || DeckContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cardComponents_card_services_deck_controller_service__WEBPACK_IMPORTED_MODULE_1__.DeckControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_card_services_deck_data_service__WEBPACK_IMPORTED_MODULE_2__.DeckDataService)); };
DeckContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DeckContainerComponent, selectors: [["app-deck-container"]], decls: 2, vars: 1, consts: [[1, "deck-container-body", "col-sm-12"], [4, "ngFor", "ngForOf"]], template: function DeckContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DeckContainerComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lodash.range(2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _card_container_card_container_component__WEBPACK_IMPORTED_MODULE_3__.CardContainerComponent], styles: ["app-card-container[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 15px;\n  width: 97%;\n  height: 100vh;\n}\n\n.card-0[_ngcontent-%COMP%] {\n  z-index: -0;\n  left: calc(0 * 1%);\n}\n\n.card-1[_ngcontent-%COMP%] {\n  z-index: -1;\n  left: calc(1 * 1%);\n}\n\n.card-2[_ngcontent-%COMP%] {\n  z-index: -2;\n  left: calc(2 * 1%);\n}\n\n.card-3[_ngcontent-%COMP%] {\n  z-index: -3;\n  left: calc(3 * 1%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2stY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBR1I7O0FBTEk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFRUjs7QUFWSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQWFSIiwiZmlsZSI6ImRlY2stY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhcmQtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiA5NyU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuJGNhcmQtY291bnQ6IDQ7IC8vbnVtYmVyIG9mIGNhcmRzIGluIGRlY2tcblxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAoJGNhcmQtY291bnQgLSAxKSB7XG4gICAgLmNhcmQtI3skaX17XG4gICAgICAgIHotaW5kZXg6IC0jeyRpfTsgLy8gLSRpXG4gICAgICAgIGxlZnQ6IGNhbGMoI3skaX0gKiAxJSk7IC8vIGNvbnZlcnRzICRpIHRvICUgdmFsdWVcbiAgICB9XG5cbiAgICAvLyAuY2FyZC0jeyRpfTpob3ZlcntcbiAgICAvLyAgLy8gYm94LXNoYWRvdzogbm9uZXxoLW9mZnNldCB2LW9mZnNldCBibHVyIHNwcmVhZCBjb2xvciB8aW5zZXR8aW5pdGlhbHxpbmhlcml0O1xuICAgIC8vICAgICBib3gtc2hhZG93OiAycHggNHB4IDEwcHggbGlnaHRncmF5O1xuICAgIC8vIH1cbn1cblxuLy8gLmNhcmQtMHtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIGxlZnQ6IDAlO1xuLy8gfVxuXG4vLyAuY2FyZC0xe1xuLy8gICAgIHotaW5kZXg6IC0xO1xuLy8gICAgIGxlZnQ6IDElO1xuLy8gfVxuXG4vLyAuY2FyZC0ye1xuLy8gICAgIHotaW5kZXg6IC0yO1xuLy8gICAgIGxlZnQ6IDIlO1xuLy8gfVxuXG4vLyAuY2FyZC0ze1xuLy8gICAgIHotaW5kZXg6IC0zO1xuLy8gICAgIGxlZnQ6IDMlO1xuLy8gfSJdfQ== */"] });


/***/ }),

/***/ 4285:
/*!*************************************************!*\
  !*** ./src/app/pipes/dynamic-component.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentPipe": () => (/* binding */ DynamicComponentPipe)
/* harmony export */ });
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/login/login.component */ 93);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class DynamicComponentPipe {
    constructor() {
        // objMap: any = 
        //   {
        //     "app-login": LoginComponent
        //   }
        // ;
        this.objMap = [
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
        ];
    }
    transform(value) {
        const view = this.objMap.filter((component) => {
            if (component['__annotations__'][0]['selector'] === value)
                return component;
        });
        if (view) {
            return view;
        }
        throw new Error(`A component with selector "${value}" was not found`);
        // return this.objMap[value];
    }
}
DynamicComponentPipe.ɵfac = function DynamicComponentPipe_Factory(t) { return new (t || DynamicComponentPipe)(); };
DynamicComponentPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dynamicComponent", type: DynamicComponentPipe, pure: true });


/***/ }),

/***/ 93:
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cardComponents_card_services_deck_controller_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cardComponents/card-services/deck-controller.service */ 7809);


class LoginComponent {
    constructor(deckController) {
        this.deckController = deckController;
    }
    ngOnInit() {
    }
    goToNextCard() {
        this.deckController.moveToNextCard();
    }
    goToPreviousCard() {
        this.deckController.moveToPreviousCard();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cardComponents_card_services_deck_controller_service__WEBPACK_IMPORTED_MODULE_0__.DeckControllerService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "login works!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map