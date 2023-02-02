import React from 'react';
import ProgressBar from './ProgressBar';


class Languages extends React.Component {
  state = {
    languages: [
      {id: 1, value: "css", xp:5},
      {id: 2, value: "sass", xp:3},
      {id: 3, value: "javascript", xp:4},
      {id: 4, value: "php", xp:1},
      {id: 5, value: "sql", xp:2},
    ],
    frameworks: [
      {id: 1, value: "react", xp:3},
      {id: 2, value: "vuejs", xp:1},
      {id: 3, value: "meteor", xp:1},
      {id: 4, value: "bootstrap", xp:3},
      {id: 5, value: "laravel", xp:1},
      {id: 6, value: "symfony", xp:1},
    ]
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    let {languages, frameworks} = this.state;

    return (
      <section className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="surface languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & library"
          className="surface frameworksDisplay"
        />
      </section>
    );
  }
}

export default Languages;
