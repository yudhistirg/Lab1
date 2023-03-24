"use strict";
var core;
(function (core) {
  class Router {
    m_activeLink;
    m_linkData;
    m_routingTable;
    get ActiveLink() {
      return this.m_activeLink;
    }
    set ActiveLink(link) {
      this.m_activeLink = link;
    }
    get LinkData() {
      return this.m_linkData;
    }
    set LinkData(data) {
      this.m_linkData = data;
    }
    constructor() {
      this.m_activeLink = "";
      this.m_linkData = "";
      this.m_routingTable = [];
    }
    Add(route) {
      this.m_routingTable.push(route);
    }
    AddTable(routingTable) {
      this.m_routingTable = routingTable;
    }
    Find(route) {
      return this.m_routingTable.indexOf(route);
    }
    Remove(route) {
      if (this.Find(route) > -1) {
        this.m_routingTable.splice(this.Find(route), 1);
        return true;
      }
      return false;
    }
    toString() {
      return this.m_routingTable.toString();
    }
  }
  core.Router = Router;
})(core || (core = {}));

let router = new core.Router();

function authGuard() {
  if (localStorage.getItem("user")) {
    // User is authenticated, return true
    return true;
  } else {
    // User is not authenticated, return false
    return false;
  }
}

router.AddTable([
  {
    route: "/",
    callback: DisplayHomePage
  },
  {
    route: "/home",
    callback: DisplayHomePage
  },
  {
    route: "/about",
    callback: DisplayAboutPage
  },
  {
    route: "/services",
    callback: DisplayServicesPage
  },
  {
    route: "/contact",
    callback: DisplayContactPage
  },
  {
    route: "/contact-list",
    callback: DisplayContactListPage,
    guard: authGuard
  },
  {
    route: "/products",
    callback: DisplayProductsPage
  },
  {
    route: "/register",
    callback: DisplayRegisterPage
  },
  {
    route: "/login",
    callback: DisplayLoginPage
  },
  {
    route: "/edit",
    callback: DisplayEditPage
  },
  {
    route: "/task-list",
    callback: DisplayTaskList,
    guard: authGuard
  },
  {
    route: "/404",
    callback: Display404Page
  }
]);

let route = location.pathname;
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : "404";
