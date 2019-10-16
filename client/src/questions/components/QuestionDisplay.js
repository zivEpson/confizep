// @flow
import React, { Component } from "react";
import Prism from "prismjs";

import "../../utils/DisplayUtils/CodeBlockUtils/prism.css";
import {
  getButtonAndCollapse,
  getListOfButtonsAndCollapses
} from "../../utils/DisplayUtils/ButtonAndCollapse";

/**
 * @file Display the question for end-user
 * @module QuestionDisplay
 */

type Props = {
  //values from the DB or from the new created question
  formValues: Object
};

class QuestionDisplay extends Component<Props> {
  componentDidMount() {
    //PrismJS - initialize the code format
    Prism.highlightAll();
  }

  renderFields = () => {
    const { formValues } = this.props;
    return (
      <div className="card mt-3">
        {/* title */}
        <div className="card-header">
          <h5 className="card-title text-center text-capitalize font-weight-bold">
            {formValues["title"]}
          </h5>
        </div>
        <div className="card-body">
          {/* body */}
          <div className="card ">
            <div className="card-body font-weight-light">
              <p className="card-text">{formValues["body"]}</p>
              {/* display code only if it exsist*/}
              { (formValues["bodyCode"] == null || formValues["bodyCode"].length === 0) ? null : <div className="card" style={{ border: "none" }}>
                <div className="card-body">
                  <figure>
                    <pre>
                      <code className="language-javascript">
                        {formValues["bodyCode"]}
                      </code>
                    </pre>
                  </figure>
                </div>
              </div> }
            </div>
          </div>

          {/* hints */}
          <div className="mt-3">
            {getListOfButtonsAndCollapses("Hint", formValues["hints"])}
          </div>
          {/* answer */}
          {getButtonAndCollapse("Answer", formValues["answer"])}
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderFields()}</div>;
  }
}

export default QuestionDisplay;
