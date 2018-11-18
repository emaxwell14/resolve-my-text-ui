/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component, Node } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const getNewValues = (values, index, offset) => values.slice(index, offset);

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
type Props = {
  values: Array<string>,
  count: number,
  formatter: (Array<string>) => Array<Node>,
};

type State = {
  currentOffset: number,
  displayedValues: Array<Node>,
};

class InfiniteScroll extends Component<Props, State> {
  state = {
    currentOffset: 0,
    displayedValues: [],
  };

  componentDidMount() {
    this.updateCurrentValues();
  }

  handleScroll = ({ target: { scrollHeight, scrollTop, clientHeight } }) => {
    const bottom = Math.round(scrollHeight - scrollTop) === clientHeight;
    if (bottom) {
      this.updateCurrentValues();
    }
  };

  updateCurrentValues = () => {
    const { values, count, formatter } = this.props;
    const { currentOffset, displayedValues } = this.state;

    if (values.length > currentOffset) {
      const newOffset = currentOffset + count;
      const newValues = getNewValues(values, currentOffset, newOffset);
      const newDisplayValues = displayedValues.concat(formatter(newValues));

      this.setState({ currentOffset: newOffset, displayedValues: newDisplayValues });
    }
  };

  scrollRef = node => {
    if (node) {
      node.addEventListener('scroll', this.handleScroll);
    }
  };

  render() {
    const { values } = this.props;
    const { displayedValues } = this.state;
    return (
      <div ref={this.scrollRef} onScroll={this.handleScroll}>
        <div className={classnames(['d-flex flex-wrap', styles.infiniteScroll])}>{displayedValues}</div>
        <div className="pt-1">{`Showing ${displayedValues.length} of ${values.length}`}</div>
      </div>
    );
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default InfiniteScroll;
