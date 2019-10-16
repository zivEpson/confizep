//@flow
import React from "react";
import { Route, Switch } from "react-router-dom";

import { default as Header } from "./Layout/Header/HeaderContainer";
import Landing from "./Layout/Landing";
import NotFound from "./Layout/NotFound";
import { default as SideBar } from "./Layout/SideBar/SideBarContainer";
import { default as QuestionsPanel } from "./questions/containers/QuestionsPanelContainer";
import AdminHome from "./Layout/AdminHome";
import { default as Question } from "./questions/containers/QuestionContainer";
import { default as Users } from "./users/containers/UserContainer";
import { default as UserPanel } from "./users/containers/UsersPanelContainer";
import { default as Courses } from "./courses/containers/CourseContainer";
import { default as CoursesPanel } from "./courses/containers/CoursePanelContainer";

import "./routes.css";

const Routes = () => {
  const showAdminSideBar = () => {
    const isAdmin = new RegExp("/admin-dashboard/", "i");
    if (isAdmin.exec(window.location.pathname)) {
      return (
        <div className="col-2" id="sidebar-wrapper" >
          <SideBar />
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            {showAdminSideBar()}
            <div className="col" id="maincontent-wrapper">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route
                  exact
                  path="/admin-dashboard/new-question"
                  component={Question}
                />
                <Route
                  exact
                  path="/admin-dashboard/questions/:id"
                  component={Question}
                />
                <Route
                  exact
                  path="/admin-dashboard/question-panel"
                  component={QuestionsPanel}
                />
                <Route
                  exact
                  path="/admin-dashboard/admin-home"
                  component={AdminHome}
                />
                <Route
                  exact
                  path="/admin-dashboard/add-user"
                  component={Users}
                />
                <Route
                  exact
                  path="/admin-dashboard/user-panel"
                  component={UserPanel}
                />
                <Route
                  exact
                  path="/admin-dashboard/users/:id"
                  component={Users}
                />
                <Route
                  exact
                  path="/admin-dashboard/new-user"
                  component={Users}
                />
                <Route
                  exact
                  path="/admin-dashboard/course-panel"
                  component={CoursesPanel}
                />
                <Route
                  exact
                  path="/admin-dashboard/courses/:id"
                  component={Courses}
                />
                <Route
                  exact
                  path="/admin-dashboard/new-course"
                  component={Courses}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
