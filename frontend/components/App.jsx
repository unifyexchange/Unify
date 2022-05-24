import React, { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ChangePasswordFormContainer from './session_form/change_password_form_container';
import ItemFormContainer from './item_form/item_form_container';

import TermsOfServiceContainer from "./terms_of_service/terms_of_service";

import HeaderContainer from "./header/header_container";
import HomeContainer from "./home/home_container";
import CategoryItemContainer from "./category_items/category_items_container";
import ConversationViewContainer from "./conversation_view/conversation_view_container";

import ReportContainer from "./reports/report_form_container";
import ReportListContainer from "./report_list/report_list_container";
import ItemEditContainer from "./item_edit/item_edit_container";
import AboutContainer from "./about/about";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Landing from "./landing/landing";
import ItemShowContainer from "./item_show/item_show_container";
import MetricsContainer from "./metrics/metrics_container";
import SearchedCategoryContainer from "./searched_category/search_category_container";

const App = () => (

  <div>
    <header>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300|Poppins:300|Source+Sans+Pro:600"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Knewave|Monoton|Orbitron"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Mukta"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Barlow:300|Biryani"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Prompt:300"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/react-vis/dist/style.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Manjari:100,400,700&display=swap"
        rel="stylesheet"
      ></link>
    </header>
    <HeaderContainer />
    {/* <Switch>
      <UnauthenticatedTemplate>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/changePassword/:userID" component={ChangePasswordFormContainer} />
        <Route
          exact
          path="/terms-of-service"
          component={TermsOfServiceContainer}
        />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Route exact path="/home" component={HomeContainer} />
        <Route exact path="/items/new" component={ItemFormContainer} />
        <Route path="/items/:itemId" component={ItemShowContainer} />
        <Route
          path="/category/:categoryId"
          component={CategoryItemContainer}
        />
        <Route path="/report/item/:id" component={ReportContainer} />
        <Route path="/item/edit/:itemId" component={ItemEditContainer} />
        <Route path="/report/list" component={ReportListContainer} />
        <Route path="/about-us" component={AboutContainer} />
        <Route path="/report/metrics" component={MetricsContainer} />
        <Route path="/report/most-searched-category" component={SearchedCategoryContainer} />
        <Route
          exact
          path="/conversations"
          component={ConversationViewContainer}
        />
      </AuthenticatedTemplate>
    </Switch> */}

    <Switch>
      <AuthRoute exact path="/" component={Landing} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/changePassword/:userID" component={ChangePasswordFormContainer} />
      <AuthRoute
        exact
        path="/terms-of-service"
        component={TermsOfServiceContainer}
      />
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/items/new" component={ItemFormContainer} />
      <ProtectedRoute path="/items/:itemId" component={ItemShowContainer} />
      <ProtectedRoute
        path="/category/:categoryId"
        component={CategoryItemContainer}
      />
      <ProtectedRoute path="/report/item/:id" component={ReportContainer} />
      <ProtectedRoute path="/item/edit/:itemId" component={ItemEditContainer} />
      <ProtectedRoute path="/report/list" component={ReportListContainer} />
      <ProtectedRoute path="/about-us" component={AboutContainer} />
      <ProtectedRoute path="/report/metrics" component={MetricsContainer} />
      <ProtectedRoute path="/report/most-searched-category" component={SearchedCategoryContainer} />
      <ProtectedRoute
        exact
        path="/conversations"
        component={ConversationViewContainer}
      />
    </Switch>
  </div>
);

export default App;
